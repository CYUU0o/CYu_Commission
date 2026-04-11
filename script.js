let currentPage = 'home';

function goPage(page){

    if(page === currentPage) return;

    const current = document.getElementById(currentPage);
    const next = document.getElementById(page);

    // 舊頁
    current.classList.remove('active');
    current.classList.add('exit-left');

    // 新頁
    setTimeout(()=>{
        current.classList.remove('exit-left');

        next.classList.add('active');
        currentPage = page;

    }, 200);
}

// 圖片放大
function openLightbox(img){
    const box = document.getElementById("lightbox");
    const boxImg = document.getElementById("lightbox-img");

    box.style.display = "flex";
    boxImg.src = img.src;
}

// 關閉圖片
function closeLightbox(){
    document.getElementById("lightbox").style.display = "none";
}
