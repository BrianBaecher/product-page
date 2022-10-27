const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// 1 -> HAMBURG MENU (mobile)
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

// 2 -> Changing Image (mobile)
const mainImg = document.querySelector(".mainImg");

const imgSrcArray = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];

let activeSlideIdx = 0;
// 2.a -> ARROWS
const leftArrow = document.querySelector("#left");
const rightArrow = document.querySelector("#right");

leftArrow.addEventListener("click", leftClick);

function leftClick() {
  if (activeSlideIdx > 0) {
    activeSlideIdx--;
  }
  mainImg.src = imgSrcArray[activeSlideIdx];
}

rightArrow.addEventListener("click", rightClick);

function rightClick() {
  if (activeSlideIdx < imgSrcArray.length - 1) {
    activeSlideIdx++;
  }
  mainImg.src = imgSrcArray[activeSlideIdx];
}

// 3 -> Changing image on laptop res and up
const thumbnails = document.querySelector(".thumbnails");

thumbnails.addEventListener("click", (e) => changeMainImg(e));
let initialThumb = document.querySelector(".thumby");
initialThumb.style.opacity = "50%";
function changeMainImg(e) {
  if (e.srcElement.classList[0] === "thumby") {
    let thumbies = document.querySelectorAll(".thumby");
    thumbies.forEach((e) => {
      e.style.opacity = "100%";
    });
    let activeThumb = document.getElementById(e.srcElement.id);
    let targetNum = +e.target.id - 1;
    mainImg.src = imgSrcArray[targetNum];
    activeThumb.style.opacity = "50%";
  }
}

// 4 -> -----SHOPPING CART----

// 4.a -> change cart amount
const amountNum = document.querySelector(".num");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
plus.addEventListener(
  "click",
  () => (amountNum.textContent = +amountNum.textContent + 1)
);
minus.addEventListener("click", () => {
  if (+amountNum.textContent > 0) {
    amountNum.textContent = +amountNum.textContent - 1;
  }
});

// 4.b -> Cart
let cart = {};

// 4.c -> Cart Display
const cartDisplay = document.querySelector(".cartBox");
const cartIcon = document.getElementById("cartImg");
cartIcon.addEventListener("click", () => {
  cartDisplay.classList.toggle("active");
});

// 4.d -> Empty Cart Message
const cartItems = document.querySelector(".cartItems");
const cartItemsContain = document.querySelector(".cartItemsContain");
const checkoutButton = document.querySelector(".checkoutButton");
function cartChecker() {
  if (Object.entries(cart).length === 0) {
    document.querySelector(".emptyMessage").style.display = "block";
    // cartItems.textContent = "Your cart is empty."; // this causes display issues after adding to cart if you've opened it while cart was 0
    cartItemsContain.style.display = "none";
    checkoutButton.style.display = "none";
  }
  if (Object.entries(cart).length !== 0) {
    document.querySelector(".emptyMessage").style.display = "none";
    cartItemsContain.style.display = "flex";
    checkoutButton.style.display = "flex";
    document.querySelector(".cartProductName").textContent =
      cart.productName.substring(0, 20) + "...";
    document.querySelector(".cartCalcPrice").textContent = cart.price;
    document.querySelector(".cartCalcAmount").textContent = cart.productAmount;
    document.querySelector(".cartCalcTotal").textContent =
      "$" + (+cart.price.slice(1) * cart.productAmount + ".00");
  }
  document
    .querySelector(".deleteButton")
    .addEventListener("click", () => (cart = {}));
  document
    .querySelector(".deleteButton")
    .addEventListener("click", cartChecker);
}
cartIcon.addEventListener("click", cartChecker);
// add test
const cartAddBtn = document.querySelector(".cartAddButton");
cartAddBtn.addEventListener("click", cartAdd);
function cartAdd() {
  if (+amountNum.textContent > 0) {
    cart.productName = document.querySelector(".productName").textContent;
    cart.image = imgSrcArray[0];
    cart.price = document.querySelector(".salePrice").textContent;
    cart.productAmount = +amountNum.textContent;
  }
  cartChecker();
  console.log(cart);
}
