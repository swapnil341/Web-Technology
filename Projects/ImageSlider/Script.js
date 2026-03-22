// const images = [
//     "https://picsum.photos/id/1015/600/400",
//     "https://picsum.photos/id/1016/600/400",
//     "https://picsum.photos/id/1018/600/400",
//     "https://picsum.photos/id/1020/600/400"
// ];

const images = [
    "Images/image1.jpg",
    "Images/image2.jpg",
    "Images/image3.jpg",
    "Images/image4.jpg",
    "Images/image5.jpg"
];

let currentIndex = 0;

function showSlide(index) {
    document.getElementById("slide").src = images[index];
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000);