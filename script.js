function goPage(page){
    document.querySelectorAll('.page').forEach(p=>{
        p.classList.remove('active');
    });

    document.getElementById(page).classList.add('active');
}

// 開啟燈箱
function openLightbox(img){
    const box = document.getElementById("lightbox");
    const boxImg = document.getElementById("lightbox-img");

    box.style.display = "flex";
    boxImg.src = img.src;
}

// 關閉燈箱
function closeLightbox(){
    document.getElementById("lightbox").style.display = "none";
}