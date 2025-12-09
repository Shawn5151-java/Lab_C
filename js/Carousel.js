let slideIndex = 1;
showSlides(slideIndex);

// --- 【新增】自動播放設定 ---
// 設定一個計時器，每 2000 毫秒 (2秒) 自動呼叫 plusSlides(1)
let autoPlayTimer = setInterval(function() {
    plusSlides(1);
}, 2000);

// --- Next/previous controls (左右切換按鈕) ---
function plusSlides(n) {
  // 當使用者手動切換時，先清除原本的計時器 (避免衝突)
  clearInterval(autoPlayTimer);
  
  showSlides(slideIndex += n);
  
  // 切換完後，重新啟動計時器
  autoPlayTimer = setInterval(function() {
      plusSlides(1);
  }, 2000);
}

// --- Thumbnail image controls (圓點切換) ---
function currentSlide(n) {
  // 手動點圓點時，也要重置計時器
  clearInterval(autoPlayTimer);
  
  showSlides(slideIndex = n);
  
  // 重新啟動
  autoPlayTimer = setInterval(function() {
      plusSlides(1);
  }, 2000);
}

// --- 顯示圖片的核心邏輯 (這部分維持原本的樣子) ---
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}