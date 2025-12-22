const promotionsData = {
    "new_member": {
        tag: "會員禮遇",
        period: "常駐活動",
        title: "新會員專屬禮遇｜首旅尊享 7 折優惠",
        image: "./img/promotion1.jpg",
        intro: "飛瑞租車誠摯邀請您體驗極致的移動服務。為歡迎新貴賓加入，首次租賃即享全車系 7 折尊榮禮遇。從預約到交車，我們致力於為您提供流暢、安心且高品質的駕駛體驗。",
        content: `
            <h3>卓越品質，始於初見</h3>
            <p>我們深信，優質的出行體驗能為旅途增色。飛瑞租車嚴選 3 年內新車，並堅持原廠級維護標準。針對首次註冊會員，我們提供無門檻的 7 折體驗價，讓您以最優渥的條件，感受我們對品質的堅持。</p>
            <h3>專屬權益說明</h3>
            <ul>
                <li><strong>適用資格：</strong> 完成會員註冊與身分驗證之新用戶。</li>
                <li><strong>禮遇內容：</strong> 首次預約任一車款，結帳享 <strong>7 折</strong> 優惠。</li>
                <li><strong>適用範圍：</strong> 包含一般轎車、休旅車及豪華尊榮車系。</li>
            </ul>
            <h3>預約須知</h3>
            <p>1. 本優惠採系統自動折抵，無需輸入代碼。<br>
               2. 需於取車前完成證件上傳與審核。<br>
               3. 部分特殊節日（如農曆春節）依當時公告為準。</p>
        `
    },
    "early_bird": {
        tag: "預定權益",
        period: "活動期間：即日起 - 2026/06/30",
        title: "假期先行者｜提早預約享最高 $2,000 折抵",
        image: "./img/promotion2.jpg",
        intro: "運籌帷幄，從容出發。針對連續假期用車需求，我們推出「先行者預約計畫」。提早 30 天完成行程規劃，不僅確保優先派車權，更享實質租金回饋，讓您的旅程更加從容不迫。",
        content: `
            <h3>優先佈局，尊享回饋</h3>
            <p>連續假期往往一車難求。飛瑞租車鼓勵貴賓提前規劃行程，凡於 30 天前完成預訂，我們將為您保留指定車款，並依租賃金額提供階梯式折抵回饋，最高可享 $2,000 元優惠。</p>
            <h3>階梯式回饋方案</h3>
            <ul>
                <li><strong>輕旅方案：</strong> 訂單滿 $5,000，<strong>折抵 $500</strong>。</li>
                <li><strong>巡遊方案：</strong> 訂單滿 $10,000，<strong>折抵 $1,200</strong>。</li>
                <li><strong>長征方案：</strong> 訂單滿 $15,000，<strong>折抵 $2,000</strong>。</li>
            </ul>
        `
    },
    "ev_promo": {
        tag: "永續移動",
        period: "活動期間：常態推廣",
        title: "未來驅動｜Tesla、Audi 純電系列 85 折體驗",
        image: "./img/promotion3.jpg",
        intro: "響應全球淨零碳排趨勢，飛瑞租車引進 Tesla 與 Audi 頂尖電動車款。我們邀請具前瞻視野的您，以 85 折專屬費率，親身感受零排放、高性能的純電駕馭美學。",
        content: `
            <h3>靜謐與性能的完美平衡</h3>
            <p>電動車不僅是交通工具，更是生活態度的展現。無論是 Tesla 的極簡科技，或是 Audi e-tron GT 的豪華工藝，皆能帶給您前所未有的駕駛感受。隨車附贈充電轉接設備與充電金，讓綠色移動更加無憂。</p>
            <h3>純電禮遇詳情</h3>
            <ul>
                <li><strong>指定車款：</strong> Model 3 / Audi e-tron GT。</li>
                <li><strong>推廣費率：</strong> 不分平假日，一律享定價 <strong>85 折</strong>。</li>
                <li><strong>加值服務：</strong> 隨車附贈 $200 充電儲值卡。</li>
            </ul>
            <h3>租賃規範</h3>
            <p>1. 駕駛人需年滿 25 歲且持有駕照滿 2 年。<br>
               2. 交車時提供完整操作導覽服務。<br>
               3. 歸還車輛時請維持 20% 以上電量以利調度。</p>
        `
    },
    "birthday": {
        tag: "壽星禮讚",
        period: "活動期間：年度禮遇",
        title: "生日禮讚｜當月壽星享「租一送一」尊榮禮遇",
        image: "./img/promotion4.jpg",
        intro: "您的重要時刻，飛瑞倍感榮幸能參與其中。為祝賀您的生日，我們獻上「租一送一」專屬禮遇。延長您的旅途時光，讓美好的慶祝回憶加倍延續。",
        content: `
            <h3>專屬時刻，倍感尊榮</h3>
            <p>飛瑞租車重視每一位會員的重要日子。凡當月壽星承租車輛，我們將免費招待第二天的租金。您只需支付首日費用，即可享有 48 小時的用車權益，讓您的慶生行程更加充裕、盡興。</p>
            <h3>壽星權益說明</h3>
            <ul>
                <li><strong>適用對象：</strong> 國曆生日當月之壽星會員。</li>
                <li><strong>優惠機制：</strong> 承租滿 24 小時，即贈送後續 24 小時（共 48 小時）。</li>
                <li><strong>適用車型：</strong> 一般房車系列（Economy / Standard）。</li>
            </ul>
            <h3>使用規範</h3>
            <p>1. 限壽星本人為承租簽約人。<br>
               2. 每位會員每年限享用此權益一次。<br>
               3. 遇國定假日則調整為折抵金 $1,000 元。</p>
        `
    },
    "news_clean": {
        tag: "安全承諾",
        period: "公告日期：2025/12/15",
        title: "衛生安全承諾｜全線導入醫療級清消標準",
        image: "./img/porm02.jpg",
        intro: "守護顧客的健康，是飛瑞租車責無旁貸的承諾。我們全面升級車輛整備流程，標準化導入醫療級消毒程序與臭氧殺菌技術，確保您接觸的每一個細節，皆純淨無虞。",
        content: `
            <h3>超越標準的潔淨苛求</h3>
            <p>我們深知衛生是豪華體驗的基石。因此，飛瑞租車不惜成本引進專業臭氧 (O3) 殺菌設備，並嚴格執行標準化清潔 SOP。從空氣淨化到接觸點消毒，我們以最高規格，打造讓您安心信賴的移動空間。</p>
            <h3>四道嚴謹工序</h3>
            <ul>
                <li><strong>深層除塵：</strong> 專業吸塵設備，徹底清除車室粉塵。</li>
                <li><strong>重點消毒：</strong> 針對方向盤、排檔桿等高頻接觸點，使用 75% 酒精擦拭。</li>
                <li><strong>臭氧淨化：</strong> 啟動空氣循環進行 15 分鐘臭氧殺菌，分解異味源。</li>
                <li><strong>安心封條：</strong> 完成後張貼消毒封條，確保交車前的潔淨狀態。</li>
            </ul>
            <p>這不僅是清潔，更是飛瑞對每一位駕駛者的安全承諾。</p>
        `
    },
    "news_etron": {
        tag: "旗艦抵達",
        period: "公告日期：2025/12/12",
        title: "旗艦入列｜Audi e-tron GT 定義純電豪華新標竿",
        image: "./img/porm01.jpg",
        intro: "承襲德系百年工藝，融合未來電能科技。飛瑞租車榮耀宣佈，Audi e-tron GT 純電轎跑正式加入服務陣容。邀您親臨鑑賞，體驗兼具性能與美學的旗艦風範。",
        content: `
            <h3>工藝與科技的集大成者</h3>
            <p>Audi e-tron GT 體現了品牌對「Progress through Technology」的極致追求。0.24 Cd 的超低風阻係數，搭配 quattro 智慧型四輪傳動系統，在靜謐中爆發出 530 匹馬力的驚人動能。這不只是一次駕駛，更是一場感官的饗宴。</p>
            <h3>頂尖規格一覽</h3>
            <ul>
                <li><strong>動力性能：</strong> 最大馬力 530 hp，0-100 km/h 僅需 4.1 秒。</li>
                <li><strong>續航表現：</strong> WLTP 續航里程達 488 km。</li>
                <li><strong>充電科技：</strong> 800V 高壓快充系統，高效補能。</li>
            </ul>
            <h3>限量預約鑑賞</h3>
            <p>為維護服務品質，Audi e-tron GT 採每日限量預約制。即日起開放會員優先預訂，平日租賃更享純電推廣禮遇。歡迎洽詢旗艦店服務專員。</p>
        `
    }
};

// 2. 監聽網頁載入
document.addEventListener("DOMContentLoaded", function () {

    console.log("機器人起床了！網頁載入完成。");

    // --- 機器人開始工作 ---

    // 步驟 A: 抓取網址上的參數 (例如 ?id=new_member)
    const urlParams = new URLSearchParams(window.location.search);
    const currentId = urlParams.get('id');

    console.log("抓到的 ID 是：", currentId); // 您可以在 F12 看這個有沒有出現

    // 步驟 B: 檢查資料庫有沒有這一筆資料
    if (currentId && promotionsData[currentId]) {

        // 有資料！把它拿出來
        const data = promotionsData[currentId];

        // 步驟 C: 把資料填進 HTML 的洞裡 (DOM 操作)

        // 1. 填標籤
        document.getElementById('page-tag').textContent = data.tag;

        // 2. 填日期 (如果有 icon，用 innerHTML)
        // 判斷一下 data.period 是否包含 icon HTML，如果沒有可以自己補
        document.getElementById('page-period').innerHTML = '<i class="fa-regular fa-calendar-days"></i> ' + data.period;

        // 3. 填標題
        document.getElementById('page-title').textContent = data.title;

        // 4. 填圖片 src
        document.getElementById('page-img').src = data.image;

        // 5. 填前言
        document.getElementById('page-intro').textContent = data.intro;

        // 6. 填主要內容 (這裡最重要，要用 innerHTML 因為裡面有標籤)
        document.getElementById('page-content').innerHTML = data.content;

        // 7. 改分頁標題 (讓瀏覽器標籤也變換)
        document.title = data.title + " | 飛瑞租車";

    } else {
        // 步驟 D: 如果找不到資料 (例如網址亂打)
        console.error("找不到資料！");

        // 在內容區顯示錯誤訊息
        document.querySelector('.detail-wrapper').innerHTML = `
            <div style="text-align:center; padding: 50px;">
                <h2>⚠️ 找不到此優惠活動</h2>
                <p>您點擊的連結可能已失效或網址錯誤。</p>
                <a href="./Promotions.html" class="btn-back" style="margin-top:20px;">返回列表</a>
            </div>
        `;
    }
});