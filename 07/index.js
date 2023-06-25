var imageSelector = document.querySelector('.img');
if (imageSelector instanceof HTMLImageElement) {
    imageSelector.src = "https://cdn.pixabay.com/photo/2023/06/12/01/22/lotus-8057438_1280.jpg";
}

var anchorSelector = document.querySelectorAll('.naver');
Array.prototype.forEach(anchorSelector, function(v){
    console.log(v instanceof HTMLAnchorElement);
    v.href = 'https://kakao.com';
});