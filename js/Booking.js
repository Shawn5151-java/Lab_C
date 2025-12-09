// 1. 取得 DOM 元素
const pickupTimeSelect = document.getElementById('pickup-time');
const returnTimeSelect = document.getElementById('return-time');
const durationDisplay = document.getElementById('duration-display');
const totalDaysSpan = document.getElementById('total-days');
const totalHoursSpan = document.getElementById('total-hours');
const submitBtn = document.querySelector('.submit-btn'); // 取得按鈕

// --- 【新增】台灣連假設定 (格式：YYYY-MM-DD) ---
// 您可以在這裡自由新增或刪除日期
const taiwanHolidays = [
    // 2025 年範例
    "2025-12-31", // 跨年
    
    // 2026 年預估連假 (以下為範例日期，請依行政院行事曆調整)
    "2026-01-01", // 元旦
    "2026-01-02", 
    "2026-01-03", 
    "2026-01-04", // 元旦連假
    
    "2026-02-15", // 小年夜
    "2026-02-16", // 除夕
    "2026-02-17", // 初一
    "2026-02-18", // 初二
    "2026-02-19", // 初三
    "2026-02-20", // 初四
    "2026-02-21", // 初五
    "2026-02-22", // 初六
    
    "2026-02-28", // 228紀念日
    "2026-04-04", // 兒童節/清明節
    "2026-04-05"  // 清明連假
];

// --- 2. 產生時間下拉選單 (09:00 - 21:00) ---
function generateTimeOptions() {
    let options = "";
    for (let hour = 9; hour <= 21; hour++) {
        let hourStr = hour < 10 ? "0" + hour : hour;
        options += `<option value="${hourStr}:00">${hourStr}:00</option>`;
        if (hour < 21) {
            options += `<option value="${hourStr}:30">${hourStr}:30</option>`;
        }
    }
    return options;
}
const timeOptionsHTML = generateTimeOptions();
pickupTimeSelect.innerHTML = timeOptionsHTML;
returnTimeSelect.innerHTML = timeOptionsHTML;
pickupTimeSelect.value = "10:00";
returnTimeSelect.value = "10:00";

// --- 3. 初始化 Flatpickr 日曆 (包含假日標示功能) ---
const fp = flatpickr("#pickup-date", {
    "locale": "zh_tw",
    mode: "range",
    minDate: "today",
    dateFormat: "Y-m-d",
    showMonths: 2,
    disableMobile: true,
    plugins: [new rangePlugin({ input: "#return-date"})],
    
    // 【新增】這段是標示紅色的關鍵
    onDayCreate: function(dObj, dStr, fp, dayElem) {
        // 利用 Flatpickr 內建工具將日期轉成 "2025-12-31" 格式
        const dateString = flatpickr.formatDate(dayElem.dateObj, "Y-m-d");
        
        // 檢查這一天是否在我們的「假日清單」裡面
        if (taiwanHolidays.includes(dateString)) {
            // 如果是，就加上紅色的 class
            dayElem.className += " holiday-flag";
            
            // (選用) 加個 tooltip 提示這是假日
            dayElem.title = "連假優惠適用"; 
        }
    },
    
    onClose: function(selectedDates, dateStr, instance) {
        calculateDuration();
    }
});

// --- 4. 計算天數與小時的邏輯 ---
function calculateDuration() {
    const startDateStr = document.getElementById('pickup-date').value;
    const endDateStr = document.getElementById('return-date').value;
    const startTimeStr = pickupTimeSelect.value;
    const endTimeStr = returnTimeSelect.value;

    if (!startDateStr || !endDateStr) {
        durationDisplay.style.display = "none";
        return;
    }

    const startDateTime = new Date(`${startDateStr}T${startTimeStr}`);
    const endDateTime = new Date(`${endDateStr}T${endTimeStr}`);

    let diff = endDateTime - startDateTime;

    if (diff <= 0) {
        totalDaysSpan.innerText = "0";
        totalHoursSpan.innerText = "0";
        durationDisplay.style.display = "flex";
        durationDisplay.style.justifyContent = "center";
        durationDisplay.style.color = "red";
        durationDisplay.innerHTML = "還車時間不可早於取車時間";
        return;
    }

    durationDisplay.style.display = "block";
    durationDisplay.style.color = "#4C585B";
    durationDisplay.innerHTML = `共計 <span id="total-days"></span> 天 <span id="total-hours"></span> 小時`;

    const diffHours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diffHours / 24);
    const hours = diffHours % 24;

    document.getElementById('total-days').innerText = days;
    document.getElementById('total-hours').innerText = hours;
}

// --- 5. 綁定監聽器 ---
pickupTimeSelect.addEventListener('change', calculateDuration);
returnTimeSelect.addEventListener('change', calculateDuration);

// --- 6. 送出按鈕檢查 ---
submitBtn.addEventListener('click', function() {
    const pickupDate = document.getElementById('pickup-date').value;
    const returnDate = document.getElementById('return-date').value;

    if (pickupDate === "" || returnDate === "") {
        alert("請先選擇取車與還車日期！");
    } else {
        alert("正在為您搜尋 " + pickupDate + " 到 " + returnDate + " 的車輛...");
    }
});