let imageSelector = document.querySelector('.img');
console.log(imageSelector);
if (imageSelector instanceof HTMLImageElement) {
    imageSelector.src = "https://cdn.pixabay.com/photo/2023/06/12/01/22/lotus-8057438_1280.jpg";
}