// ==========================================
//  1. 建立車輛資料庫
// ==========================================
const carDatabase = {
    'altis': { name: 'Toyota Altis', price: 2000, img: './car_img/altis/1717641892766577_1400_1200.jpg' },
    'vios': { name: 'Toyota Vios', price: 1600, img: './car_img/vios/1522288071292520_1400_1200.jpg' },
    'yaris': { name: 'Toyota Yaris', price: 1650, img: './car_img/yaris/1628669439967903_1400_1200.jpg' },
    'focus': { name: 'Ford Focus Wagon', price: 2200, img: './car_img/focus/1677662116558940_1400_1200.jpg' },
    'mazda3': { name: 'Mazda 3 5D', price: 2200, img: './car_img/mazda_3/1652688412760334_1400_1200.jpg' },
    'c300': { name: 'Mercedes-Benz C300', price: 5500, img: './car_img/C300/1636707654189529_1400_1200.jpg' },
    'bmw520i': { name: 'BMW 520i', price: 5500, img: './car_img/520i/1732786347246378_1400_1200.jpg' },
    'bmw320i': { name: 'BMW 320i Touring', price: 5000, img: './car_img/320i/1737698775655755_1400_1200.jpg' },
    'gt4': { name: 'Mercedes-Benz GT4-63S', price: 20000, img: './car_img/GT_4Door/1677826209113364_1400_1200.jpg' },
    '911': { name: 'Porsche 911 GTS', price: 18000, img: './car_img/911GTS/1747039621445846_1400_1200.jpg' },
    'panamera': { name: 'Porsche Panamera', price: 16500, img: './car_img/panamera_turboE/1744017354108007_1400_1200.jpg' },
    'cross': { name: 'Toyota Cross', price: 2500, img: './car_img/Cross/1733469092520711_1400_1200.jpg' },
    'rav4': { name: 'Toyota RAV4', price: 3500, img: './car_img/RAV4/1706682310246251_1400_1200.jpg' },
    'kuga': { name: 'Ford Kuga', price: 3000, img: './car_img/Kuga/1727344014875547_1400_1200.jpg' },
    'rx350': { name: 'Lexus RX350', price: 4500, img: './car_img/RX350/1670308733508370_1400_1200.jpg' },
    'modely': { name: 'Tesla Model Y', price: 7000, img: './car_img/model_3/1729837131080542_1400_1200.jpg' },
    'etron': { name: 'Audi e-tron GT', price: 17000, img: './car_img/e_tron_gt/1646119068976980_1400_1200.jpg' }
};

let currentCarDailyRate = 0;

// ==========================================
//  2. 初始化與計算功能
// ==========================================
function initSelectedCar() {
    const urlParams = new URLSearchParams(window.location.search);
    const carId = urlParams.get('car');

    if (carId && carDatabase[carId]) {
        const carData = carDatabase[carId];
        currentCarDailyRate = carData.price;

        document.getElementById('selected-car-img').src = carData.img;
        document.getElementById('selected-car-name').textContent = carData.name;
        document.getElementById('selected-car-price-text').textContent = `NT$ ${carData.price.toLocaleString()} / 日`;

        updateSummary();
    } else {
        currentCarDailyRate = 2000;
        updateSummary();
    }
}

function updateSummary() {
    const pickupDateInput = document.getElementById('pickup-date');
    const returnDateInput = document.getElementById('return-date');

    let days = 0;

    // 1. 計算天數 (防呆邏輯移到 Flatpickr 設定中，這裡做最後確認)
    if (pickupDateInput.value && returnDateInput.value) {
        const start = new Date(pickupDateInput.value);
        const end = new Date(returnDateInput.value);
        const diffTime = end - start;

        if (diffTime < 0) {
            // 如果還車日期早於取車 (雖然 Flatpickr 會擋，但防萬一)
            days = 0;
            alert("還車日期不能早於取車日期，請重新選擇！");
            returnDateInput.value = ""; // 清空錯誤日期
        } else {
            days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            if (days === 0 && pickupDateInput.value === returnDateInput.value) {
                days = 1;
            }
        }
    }

    // 2. 計算租金
    const rentalTotal = days * currentCarDailyRate;

    // 3. 【修改】計算加購項目 (混合計價邏輯)
    let addOnTotal = 0;
    const selectedAddOns = document.querySelectorAll('.add-on.selected');

    selectedAddOns.forEach(addon => {
        const price = parseInt(addon.getAttribute('data-price'));
        const mode = addon.getAttribute('data-mode'); // 抓取計價模式 (daily 或 once)

        if (mode === 'daily') {
            // 如果是 daily (像保險)，要乘上天數
            // 如果天數是 0 (還沒選日期)，就算 0 元，避免誤會
            addOnTotal += price * (days > 0 ? days : 0);
        } else {
            // 如果是 once (像兒童椅)，只算一次錢 (固定價)
            addOnTotal += price;
        }
    });

    // 4. 計算總金額
    const finalTotal = rentalTotal + addOnTotal;

    // 更新畫面
    const summaryDaysEl = document.getElementById('summary-days');
    if (summaryDaysEl) summaryDaysEl.textContent = days;

    const summaryTotalEl = document.getElementById('summary-total');
    if (summaryTotalEl) summaryTotalEl.textContent = finalTotal.toLocaleString();

    const summaryCarEl = document.getElementById('summary-car-name');
    const mainCarNameEl = document.getElementById('selected-car-name');
    if (summaryCarEl && mainCarNameEl) {
        summaryCarEl.textContent = mainCarNameEl.textContent;
    }
}

// ==========================================
//  3. 互動功能
// ==========================================
function nextStep(stepNumber) {
    if (stepNumber === 2) {
        const pickup = document.getElementById('pickup-date').value;
        const returnd = document.getElementById('return-date').value;
        if (!pickup || !returnd) {
            alert("請先選擇正確的取還車日期！");
            return;
        }
    }

    const steps = document.getElementsByClassName("step-section");
    for (var i = 0; i < steps.length; i++) {
        steps[i].classList.remove("active");
    }
    document.getElementById("step" + stepNumber).classList.add("active");

    updateSummary();
}

function toggleAddOn(button) {
    const card = button.parentElement.parentElement;
    card.classList.toggle('selected');

    if (card.classList.contains('selected')) {
        button.textContent = "已加購";
    } else {
        button.textContent = "加購";
    }
    updateSummary();
}

function validate_simple_ID() {
    const idInput = document.getElementById('driver-ID');
    const msgArea = document.getElementById('id-msg-area');
    const userID = idInput.value.toUpperCase().trim();

    if (userID === "") {
        idInput.classList.remove('invalid', 'valid');
        msgArea.style.display = 'none';
        return;
    }
    const regex = /^[A-Z]\d{9}$/;

    if (regex.test(userID)) {
        msgArea.textContent = "格式正確 ✅";
        msgArea.style.display = 'block';
        msgArea.className = 'success-text';
        idInput.classList.remove('invalid');
        idInput.classList.add('valid');
    } else {
        msgArea.textContent = "格式錯誤 ❌ (需為首字英文+9碼數字)";
        msgArea.style.display = 'block';
        msgArea.className = 'error-text';
        idInput.classList.remove('valid');
        idInput.classList.add('invalid');
    }
}

// 修改 ShoppingCar.js 的 finish() 函式
function finish() {
    const name = document.getElementById('driver-name').value.trim();
    const phone = document.getElementById('driver-phone').value.trim();
    const email = document.getElementById('driver-email').value.trim();
    // 【新增】抓取身分證
    const id = document.getElementById('driver-ID').value.trim().toUpperCase();

    // 1. 檢查必填 (加入 id)
    if (name === "" || phone === "" || email === "" || id === "") {
        alert("⚠️ 請確認所有必填欄位 (*) 皆已填寫！");
        return;
    }

    // 2. 【新增】檢查身分證格式 (確保送出前是正確的)
    // 這裡再跑一次正規表達式，防止使用者無視 onblur 的錯誤
    const idRegex = /^[A-Z]\d{9}$/;
    if (!idRegex.test(id)) {
        alert("⚠️ 身分證字號格式錯誤，請重新檢查！");
        return; // 阻止送出
    }

    // ... 後面抓取金額與 alert 的程式碼保持不變 ...
    const carName = document.getElementById('summary-car-name').textContent;
    const totalText = document.querySelector('.summary-card h3[style*="color"]').textContent;
    alert(`🎉 預約成功！\n\n感謝您的預訂：${name}\n車款：${carName}\n${totalText}\n\n確認信已寄送至 ${email}`);
}

// ==========================================
//  4. 程式入口 (載入後執行)
// ==========================================
document.addEventListener('DOMContentLoaded', function () {
    initSelectedCar();

    // 【修改】Flatpickr 設定，加入日期連動限制
    if (typeof flatpickr !== 'undefined') {
        // 1. 初始化「取車」日曆
        const pickupPicker = flatpickr("#pickup-date", {
            enableTime: false,
            dateFormat: "Y-m-d",
            minDate: "today",
            locale: "zh_tw",
            onChange: function (selectedDates, dateStr, instance) {
                // 當選了取車日，設定還車日的 minDate 為同一天
                // 這樣使用者就無法選擇比取車日還早的日期了
                returnPicker.set("minDate", dateStr);

                // 如果目前還車日已經比新的取車日早，就清空還車日
                const returnDateVal = document.getElementById('return-date').value;
                if (returnDateVal && returnDateVal < dateStr) {
                    returnPicker.clear();
                }

                updateSummary();
            }
        });

        // 2. 初始化「還車」日曆
        const returnPicker = flatpickr("#return-date", {
            enableTime: false,
            dateFormat: "Y-m-d",
            minDate: "today", // 初始值，會被上面的程式碼動態修改
            locale: "zh_tw",
            onChange: function (selectedDates, dateStr, instance) {
                updateSummary();
            }
        });
    }
});