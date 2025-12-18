// ==========================================
//  1. 建立車輛資料庫 (Data)
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
    'modely': { name: 'Tesla Model 3', price: 7000, img: './car_img/model_3/1729837131080542_1400_1200.jpg' },
    'etron': { name: 'Audi e-tron GT', price: 17000, img: './car_img/e_tron_gt/1646119068976980_1400_1200.jpg' },
    's450': { name: 'Mercedes-Benz S450', price: 10000, img: './car_img/s450/1615173696839878_1400_1200.jpg' },
};

// 全域變數：目前選到的車價
let currentCarPrice = 0;

// ==========================================
//  2. 初始化邏輯 (Initialization)
// ==========================================
function initSelectedCar() {
    // 1. 抓取網址上的 ?car=xxx 參數
    const urlParams = new URLSearchParams(window.location.search);
    const carId = urlParams.get('car');

    // 2. 檢查是否有這個 ID 且資料庫有資料
    if (carId && carDatabase[carId]) {
        const car = carDatabase[carId];

        // 3. 更新畫面上的文字與圖片
        // 【修正】這裡的 ID 必須對應 HTML 裡的 ID
        const nameEl = document.getElementById('selected-car-name');
        const priceEl = document.getElementById('selected-car-price-text'); // 修正 ID
        const imgEl = document.getElementById('selected-car-img');
        const sidebarNameEl = document.getElementById('summary-car-name'); // 側邊欄車名

        if(nameEl) nameEl.innerText = car.name;
        if(sidebarNameEl) sidebarNameEl.innerText = car.name; // 同步更新側邊欄
        if(priceEl) priceEl.innerText = `NT$ ${car.price.toLocaleString()} / 日`;
        if(imgEl) imgEl.src = car.img;

        // 4. 記錄價格供計算用
        currentCarPrice = car.price;
        
        // 5. 觸發一次金額更新
        updateSummary();
    } else {
        console.warn("未指定車款或車款不存在");
    }
}

// ==========================================
//  3. 核心功能 (Core Functions)
// ==========================================

// 切換步驟
function nextStep(stepNumber) {
    document.querySelectorAll('.step-section').forEach(el => el.classList.remove('active'));
    document.getElementById('step' + stepNumber).classList.add('active');

    // 更新進度條
    document.querySelectorAll('.step-indicator').forEach(el => el.classList.remove('active'));
    for (let i = 1; i <= stepNumber; i++) {
        const indicator = document.getElementById('progress-' + i);
        if (indicator) indicator.classList.add('active');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 計算總金額
function updateSummary() {
    const pickupDateStr = document.getElementById('pickup-date').value;
    const returnDateStr = document.getElementById('return-date').value;
    
    let days = 0;

    // 計算天數
    if (pickupDateStr && returnDateStr) {
        const d1 = new Date(pickupDateStr);
        const d2 = new Date(returnDateStr);
        const diffTime = d2 - d1;
        days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (days < 1) days = 1;
    }

    // 計算租金
    const rentalFee = currentCarPrice * days;

    // 計算加購項目
    let addonsTotal = 0;
    // 【修正】這裡要抓取 .add-on.selected
    document.querySelectorAll('.add-on.selected').forEach(el => {
        // 從 HTML 的 data-price 屬性讀取價格
        const price = parseInt(el.dataset.price || 0);
        addonsTotal += price * days; // 假設加購項目也是按日計算 (簡單化)
    });

    const finalTotal = rentalFee + addonsTotal;

    // 更新畫面
    const daysEl = document.getElementById('summary-days');
    const totalEl = document.getElementById('summary-total'); // 修正 ID (HTML 是 summary-total)

    if(daysEl) daysEl.innerText = days;
    if(totalEl) totalEl.innerText = finalTotal.toLocaleString();
}

// 加購項目切換
// 【修正】這個函式名稱要跟 HTML 裡的 onclick="toggleAddOn(this)" 一樣 (大寫 O)
function toggleAddOn(btnElement) {
    // 找到按鈕所在的卡片容器 (父層 div)
    const card = btnElement.closest('.add-on');
    
    if (card) {
        // 切換選取狀態
        card.classList.toggle('selected');
        
        // 改變按鈕外觀 (選用)
        if (card.classList.contains('selected')) {
            btnElement.innerText = "已加購";
            btnElement.style.backgroundColor = "#4C585B";
            btnElement.style.color = "white";
        } else {
            btnElement.innerText = "加購";
            btnElement.style.backgroundColor = ""; // 恢復原狀
            btnElement.style.color = "";
        }
        
        // 重新計算總金額
        updateSummary();
    }
}

// 身分證驗證
function validate_simple_ID() {
    const element = document.getElementById('driver-ID');
    const id = element.value;
    const regex = /^[A-Z][0-9]{9}$/;
    
    if (!regex.test(id)) {
        alert("身分證格式錯誤！請輸入 1 個大寫英文字母 + 9 個數字");
        element.style.border = "2px solid red";
    } else {
        element.style.border = "1px solid #ccc";
    }
}

// 完成預約
function finish() {
    const name = document.getElementById('driver-name').value;
    const phone = document.getElementById('driver-phone').value;
    const idNumber = document.getElementById('driver-ID').value;
    
    if (!name || !phone || !idNumber) {
        alert("請填寫完整聯絡人資料！");
        return;
    }

    // 【修正】抓取正確的總金額 ID
    const totalText = document.getElementById('summary-total').innerText;
    const carName = document.getElementById('selected-car-name').innerText;
    
    alert(`🎉 預約成功！\n\n感謝您的預訂：${name}\n車款：${carName}\n總金額：NT$ ${totalText}\n\n我們將盡快與您聯繫確認取車細節。`);
}

// ==========================================
//  4. 程式入口
// ==========================================
document.addEventListener('DOMContentLoaded', function () {
    
    initSelectedCar();

    if (typeof flatpickr !== 'undefined') {
        const pickupPicker = flatpickr("#pickup-date", {
            enableTime: false,
            dateFormat: "Y-m-d",
            minDate: "today",
            locale: "zh_tw",
            onChange: function (selectedDates, dateStr, instance) {
                returnPicker.set("minDate", dateStr);
                updateSummary();
            }
        });

        const returnPicker = flatpickr("#return-date", {
            enableTime: false,
            dateFormat: "Y-m-d",
            minDate: "today",
            locale: "zh_tw",
            onChange: function (selectedDates, dateStr, instance) {
                updateSummary();
            }
        });
        
        // 接收首頁傳來的日期
        const urlParams = new URLSearchParams(window.location.search);
        const urlPickup = urlParams.get('pickup');
        const urlReturn = urlParams.get('return');

        if (urlPickup && urlReturn) {
            pickupPicker.setDate(urlPickup);
            returnPicker.setDate(urlReturn);
            returnPicker.set("minDate", urlPickup);
            updateSummary();
        }
    }
});