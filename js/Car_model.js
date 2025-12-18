function filterCar(targetId) {
    // 1. 抓出所有車款區塊 (全班同學)
    const allSections = document.querySelectorAll('.car-section');

    // 2. 先全部隱藏 (全班坐下)
    allSections.forEach(function (section) {
        section.style.display = 'none';
    });

    // 3. 判斷要顯示誰
    if (targetId === 'all') {
        // 如果是 'all'，就全部顯示
        allSections.forEach(function (section) {
            section.style.display = 'block';
        });
    } else {
        // 否則，只抓出指定的那個區塊 (被點名的人站起來)
        const targetSection = document.getElementById(targetId);

        // 確保真的有抓到這個區塊才顯示，避免報錯
        if (targetSection) {
            targetSection.style.display = 'block';
        }
    }
}

// --- 【新增】這段是為了讓首頁連過來時能自動篩選 ---
window.onload = function () {
    // 1. 取得網址後面的 #文字 (例如 #sec-normal)
    const hash = window.location.hash;

    // 2. 如果真的有抓到 #
    if (hash) {
        // 3. 把 # 拿掉，只剩下 id 文字 (例如 sec-normal)
        const targetId = hash.substring(1);

        // 4. 自動執行篩選功能
        filterCar(targetId);
    }
};

// 1. 相簿資料庫 (請把您的照片路徑填進去)
const carGalleryData = {
    'altis': {
        title: 'Toyota Altis',
        images: [
            './car_img/altis/1717641892766577_1400_1200.jpg',
            './car_img/altis/1717641892431574_1400_1200.jpg',
            './car_img/altis/1717641892842396_1400_1200.jpg',
            './car_img/altis/1717642035813807_1400_1200.jpg',
            './car_img/altis/1717642038007542_1400_1200.jpg',
            './car_img/altis/1717642039200019_1400_1200.jpg',
        ]
    },
    'vios': {
        title: 'Toyota Vios',
        images: [
            './car_img/vios/1522288071292520_1400_1200.jpg',
            './car_img/vios/1522288072204445_1400_1200.jpg',
            './car_img/vios/1522288075696526_1400_1200.jpg',
            './car_img/vios/1522288218225191_1400_1200.jpg',
            './car_img/vios/1522288213945848_1400_1200.jpg',
            './car_img/vios/1522288217406161_1400_1200.jpg', 
        ]
    },
    'yaris':{
        title: 'Toyota Yaris',
        images: [
            './car_img/yaris/1628669439967903_1400_1200.jpg',
            './car_img/yaris/1628669439833057_1400_1200.jpg',
            './car_img/yaris/1628669439833057_1400_1200.jpg',
            './car_img/yaris/1628669602949187_1400_1200.jpg',
            './car_img/yaris/1628669603166348_1400_1200.jpg',
            './car_img/yaris/1628669601270343_1400_1200.jpg',
        ]
    },
    'mazda_3':{
        title: 'Mazda 3 5D',
        images: [
            './car_img/mazda_3/1652688412760334_1400_1200.jpg',
            './car_img/mazda_3/1652688422309444_1400_1200.jpg',
            './car_img/mazda_3/1652688420750052_1400_1200.jpg',
            './car_img/mazda_3/1652688425082721_1400_1200.jpg',
            './car_img/mazda_3/1723174576311044_1400_1200.jpg',
            './car_img/mazda_3/1723174577714941_1400_1200.jpg',
        ]
    },
    'focus':{
        title: 'Ford Focus Wagon',
        images: [
            './car_img/focus/1677662116558940_1400_1200.jpg',
            './car_img/focus/1677662117520138_1400_1200.jpg',
            './car_img/focus/1677662119390230_1400_1200.jpg',
            './car_img/focus/1677662112655419_1400_1200.jpg',
            './car_img/focus/1677662100489875_1400_1200.jpg',
            './car_img/focus/1677662095192401_1400_1200.jpg',
            './car_img/focus/1677662097048025_1400_1200.jpg',
        ]
    },
    '320i':{
        title: 'BMW 320i Touring',
        images: [
            './car_img/320i/1737698775655755_1400_1200.jpg',
            './car_img/320i/1737698775946674_1400_1200.jpg',
            './car_img/320i/1737698776494001_1400_1200.jpg',
            './car_img/320i/1737698776713246_1400_1200.jpg',
            './car_img/320i/1737698774509562_1400_1200.jpg',
            './car_img/320i/1737698772226775_1400_1200.jpg',
            './car_img/320i/1737698775037859_1400_1200.jpg',
            './car_img/320i/1737698769364747_1400_1200.jpg',
        ]
    },
    '520i':{
        title: 'BMW 520i',
        images: [
            './car_img/520i/1732786347246378_1400_1200.jpg',
            './car_img/520i/1732786346467967_1400_1200.jpg',
            './car_img/520i/1732786348138968_1400_1200.jpg',
            './car_img/520i/1732786348764227_1400_1200.jpg',
            './car_img/520i/1732786347025069_1400_1200.jpg',
            './car_img/520i/1732786340971296_1400_1200.jpg',
            './car_img/520i/1732786340424470_1400_1200.jpg',
        ]
    },
    'p911':{
        title: 'Porsche 911 GTS',
        images: [
            './car_img/911GTS/1747039621445846_1400_1200.jpg',
            './car_img/911GTS/1747039622005321_1400_1200.jpg',
            './car_img/911GTS/1747039621979716_1400_1200.jpg',
            './car_img/911GTS/1747039621453856_1400_1200.jpg',
            './car_img/911GTS/1747039618167352_1400_1200.jpg',
            './car_img/911GTS/1747039618370908_1400_1200.jpg',
            './car_img/911GTS/1747039614268258_1400_1200.jpg',
        ]
    },
    'panamera':{
        title: 'Porsche Panamera Turbo E',
        images: [
            './car_img/panamera_turboE/1744017354108007_1400_1200.jpg',
            './car_img/panamera_turboE/1744017354144257_1400_1200.jpg',
            './car_img/panamera_turboE/1744017352392756_1400_1200.jpg',
            './car_img/panamera_turboE/1744017359740396_1400_1200.jpg',
            './car_img/panamera_turboE/1744017362237096_1400_1200.jpg',
            './car_img/panamera_turboE/1744017360325057_1400_1200.jpg',
            './car_img/panamera_turboE/1744017368335094_1400_1200.jpg',
        ]
    },
    'c300':{
        title: 'Mercedes-Benz C300',
        images: [
            './car_img/C300/1636707654189529_1400_1200.jpg',
            './car_img/C300/1636707688196302_1400_1200.jpg',
            './car_img/C300/1636707654649851_1400_1200.jpg',
            './car_img/C300/1636707838787588_1400_1200.jpg',
            './car_img/C300/1636707837679066_1400_1200.jpg',
            './car_img/C300/1636707836312664_1400_1200.jpg',
            './car_img/C300/1636707835628753_1400_1200.jpg',
        ]
    },
    's450':{
        title: 'Mercedes-Benz S450',
        images: [
            './car_img/s450/1615173696839878_1400_1200.jpg',
            './car_img/s450/1615173696849459_1400_1200.jpg',
            './car_img/s450/1615173697268323_1400_1200.jpg',
            './car_img/s450/1615173712923864_1400_1200.jpg',
            './car_img/s450/1615173713876209_1400_1200.jpg',
            './car_img/s450/1615173713747818_1400_1200.jpg',
            './car_img/s450/1615173731797657_1400_1200.jpg',
        ]
    },
    'gt63s':{
        title: 'Mercedes-Benz GT4-63S',
        images: [
            './car_img/GT_4Door/1677826209113364_1400_1200.jpg',
            './car_img/GT_4Door/1677826204743990_1400_1200.jpg',
            './car_img/GT_4Door/1677826204892133_1400_1200.jpg',
            './car_img/GT_4Door/1677826240514095_1400_1200.jpg',
            './car_img/GT_4Door/1677826203523370_1400_1200.jpg',
            './car_img/GT_4Door/1677826199883849_1400_1200.jpg',
            './car_img/GT_4Door/1677826189222560_1400_1200.jpg',
            './car_img/GT_4Door/1677826195423047_1400_1200.jpg',
        ]
    },
    'cross':{
        title: 'Toyota Cross',
        images: [
            './car_img/Cross/1733469092520711_1400_1200.jpg',
            './car_img/Cross/1733469092906708_1400_1200.jpg',
            './car_img/Cross/1733469091162338_1400_1200.jpg',
            './car_img/Cross/1733469221385469_1400_1200.jpg',
            './car_img/Cross/1733469220816085_1400_1200.jpg',
            './car_img/Cross/1733469223099737_1400_1200.jpg',
            './car_img/Cross/1733469452389787_1400_1200.jpg',
        ]
    },
    'rav4':{
        title: 'Toyota RAV4',
        images: [
            './car_img/RAV4/1706682310246251_1400_1200.jpg',
            './car_img/RAV4/1706682313079638_1400_1200.jpg',
            './car_img/RAV4/1706682310358105_1400_1200.jpg',
            './car_img/RAV4/1706682314076819_1400_1200.jpg',
            './car_img/RAV4/1706682314823521_1400_1200.jpg',
            './car_img/RAV4/1706682315460764_1400_1200.jpg',
            './car_img/RAV4/1706682316645852_1400_1200.jpg',
        ]
    },
    'rx350':{
        title: 'Lexus RX350',
        images: [
            './car_img/RX350/1670308733508370_1400_1200.jpg',
            './car_img/RX350/1670308734279802_1400_1200.jpg',
            './car_img/RX350/1670308731054501_1400_1200.jpg',
            './car_img/RX350/1670308740056641_1400_1200.jpg',
            './car_img/RX350/1670308739649036_1400_1200.jpg',
            './car_img/RX350/1670308740023978_1400_1200.jpg',
            './car_img/RX350/1670308744828360_1400_1200.jpg',
        ]
    },
    'kuga':{
        title: 'Ford Kuga',
        images: [
            './car_img/Kuga/1727344014875547_1400_1200.jpg',
            './car_img/Kuga/1727344015034025_150_100.jpg',
            './car_img/Kuga/1727344014980650_1400_1200.jpg',
            './car_img/Kuga/1727344243616237_1400_1200.jpg',
            './car_img/Kuga/1727344244934329_1400_1200.jpg',
            './car_img/Kuga/1727344245593165_1400_1200.jpg',
            './car_img/Kuga/1727344132611406_1400_1200.jpg',
        ]
    },
    'e-tron':{
        title: 'Auid e-tron GT',
        images: [
            './car_img/e_tron_gt/1646119068976980_1400_1200.jpg',
            './car_img/e_tron_gt/1646119069180832_1400_1200.jpg',
            './car_img/e_tron_gt/1646119068614121_1400_1200.jpg',
            './car_img/e_tron_gt/1646119074967378_1400_1200.jpg',
            './car_img/e_tron_gt/1646119073009135_1400_1200.jpg',
            './car_img/e_tron_gt/1646119073581238_1400_1200.jpg',
        ]
    },
    'model_3':{
        title: 'Tesla Model 3',
        images: [
            './car_img/model_3/1729837131080542_1400_1200.jpg',
            './car_img/model_3/1729837134462600_1400_1200.jpg',
            './car_img/model_3/1729837133307868_1400_1200.jpg',
            './car_img/model_3/1729837134381032_1400_1200.jpg',
            './car_img/model_3/1729837127718810_1400_1200.jpg',
            './car_img/model_3/1729837128423582_1400_1200.jpg',
            './car_img/model_3/1729837127490097_1400_1200.jpg',
            './car_img/model_3/1729837127554669_1400_1200.jpg',
        ]
    },
};

let currentImgIndex = 0;
let currentCarId = '';

// 2. 打開相簿
function openGallery(carId) {
    // 檢查是否有資料
    if (!carGalleryData[carId]) {
        alert("抱歉，此車款尚無更多照片。");
        return;
    }

    currentCarId = carId;
    currentImgIndex = 0; // 重置為第一張
    const data = carGalleryData[carId];

    // 設定標題
    document.getElementById('gallery-title').innerText = data.title;

    // 產生縮圖列表
    const thumbContainer = document.getElementById('thumbnail-list');
    thumbContainer.innerHTML = ''; // 清空舊的

    data.images.forEach((imgSrc, index) => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.className = 'thumb-img';
        // 點擊縮圖切換大圖
        img.onclick = function () {
            showImage(index);
        };
        thumbContainer.appendChild(img);
    });

    // 顯示第一張圖
    showImage(0);

    // 顯示視窗
    document.getElementById('galleryModal').style.display = 'block';
}

// 3. 顯示特定圖片
function showImage(index) {
    const data = carGalleryData[currentCarId];

    // 循環邏輯 (最後一張再按下一張會回到第一張)
    if (index >= data.images.length) index = 0;
    if (index < 0) index = data.images.length - 1;

    currentImgIndex = index;

    // 更新大圖
    document.getElementById('gallery-main-img').src = data.images[currentImgIndex];

    // 更新縮圖選取狀態
    const thumbs = document.getElementsByClassName('thumb-img');
    for (let i = 0; i < thumbs.length; i++) {
        thumbs[i].classList.remove('active');
    }
    thumbs[currentImgIndex].classList.add('active');
}

// 4. 左右切換按鈕
function changeImage(n) {
    showImage(currentImgIndex + n);
}

// 5. 關閉相簿
function closeGallery() {
    document.getElementById('galleryModal').style.display = 'none';
}

// 點擊黑色背景也可以關閉
window.onclick = function (event) {
    const modal = document.getElementById('galleryModal');
    if (event.target == modal) {
        closeGallery();
    }
}