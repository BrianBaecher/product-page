const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// 1- HAMBURG MENU (mobile)
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    console.log("click");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
})
);

// 2- Changing Image (mobile)
const mainImg = document.querySelector(".mainImg")

const imgSrcArray = [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg"
]

let activeSlideIdx = 0
// 2a - ARROWS  
const leftArrow = document.querySelector("#left");
const rightArrow = document.querySelector("#right");

leftArrow.addEventListener("click", leftClick);

function leftClick() {
    console.log("left");
    if(activeSlideIdx > 0){
        activeSlideIdx--
    }
    mainImg.src = imgSrcArray[activeSlideIdx]
}

rightArrow.addEventListener("click", rightClick);

function rightClick() {
    console.log("right");
    if(activeSlideIdx < (imgSrcArray.length -1)){
        activeSlideIdx++
    }
    mainImg.src = imgSrcArray[activeSlideIdx]
}

// 3 Changing image on laptop res and up
const thumbnails = document.querySelector(".thumbnails")

thumbnails.addEventListener("click", (e) => console.log(e.srcElement.id))
thumbnails.addEventListener("click", (e) => changeMainImg(e))
let initialThumb = document.querySelector(".thumby")
initialThumb.style.opacity = "50%"
function changeMainImg(e){
    let thumbies = document.querySelectorAll(".thumby")
    console.log(thumbies)
    thumbies.forEach((e) => {
        e.style.opacity = "100%"
    })
    let activeThumb = document.getElementById(e.srcElement.id)
    let targetNum = +e.target.id - 1
    mainImg.src = imgSrcArray[targetNum]
    activeThumb.style.opacity = "50%"
}