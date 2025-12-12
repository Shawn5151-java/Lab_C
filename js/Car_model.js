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