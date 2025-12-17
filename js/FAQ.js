document.addEventListener("DOMContentLoaded", function() {

    // ============================================
    // 1. 手風琴功能 (Accordion) - 展開/收合問答
    // ============================================
    var acc = document.getElementsByClassName("accordion");

    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            // 切換 active 樣式 (變色)
            this.classList.toggle("active");
            
            // 抓取下一個兄弟元素 (就是 panel)
            var panel = this.nextElementSibling;
            
            // 如果已經打開，就關起來；否則就打開
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }


    // ============================================
    // 2. 頁籤切換功能 (Tabs) - 切換三大分類
    // ============================================
    
    // 定義變數：抓取您的 Class 名稱
    const navLinks = document.querySelectorAll('.faqNav a');   // 抓取選單連結
    const sections = document.querySelectorAll('.question');   // 抓取下面那三個大區塊

    // --- 定義一個函式：重置所有狀態 ---
    // (把所有區塊藏起來，並把所有按鈕的顏色變回原本的樣子)
    function resetTabs() {
        // 1. 隱藏所有內容區塊
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // 2. 移除所有按鈕的 Active 樣式
        navLinks.forEach(link => {
            link.classList.remove('faqMenuActive');
        });
    }

    // --- 初始化：網頁一打開時要做的事 ---
    // 雖然您的 HTML 裡每個按鈕都有 faqMenuActive，但我們這裡用 JS 強制重置，只留第一個
    if (navLinks.length > 0) {
        resetTabs(); // 先全部關掉
        
        // 只打開第一個
        navLinks[0].classList.add('faqMenuActive'); 
        if (sections[0]) {
            sections[0].style.display = 'block';
        }
    }

    // --- 綁定點擊事件 ---
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // 1. 阻止網頁亂跳 (取消錨點預設行為)

            // 2. 呼叫重置函式 (先關閉所有區塊)
            resetTabs();

            // 3. 幫「目前被點擊」的按鈕加上 Active 樣式 (變色)
            this.classList.add('faqMenuActive');

            // 4. 找出要顯示哪個區塊
            // 抓取 href 裡面的 ID (例如 #section-booking -> 去掉 # 變成 section-booking)
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // 5. 如果找得到該區塊，就顯示出來
            if (targetSection) {
                targetSection.style.display = 'block';
                
                // (選用) 加入一點淡入動畫，讓切換更滑順
                targetSection.style.opacity = '0';
                targetSection.style.transition = 'opacity 0.4s ease-in';
                setTimeout(() => {
                    targetSection.style.opacity = '1';
                }, 10);
            }
        });
    });

});