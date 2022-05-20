"use strict"

let menu = document.querySelector(".hamburger-menu")
console.log(menu)
let button = menu.querySelector(".hamburger")

function setMenuState(isOpen) {
    menu.classList.toggle("open", isOpen)
    open = isOpen
}

let open = false

button.addEventListener("click", () => {
    setMenuState(!open)

})

document.addEventListener("mousedown", (event) => {
    console.log(event.target);
    if (!menu.contains(event.target)) {
        setMenuState(false)
    }
})

let carousel = document.querySelector(".karusell")
let carouselImages = carousel.querySelector(".bilder")
let n = 0
console.log(carouselImages)
let rightButton = carousel.querySelector("button.right")
let leftButton = carousel.querySelector("button.left")
rightButton.addEventListener("click", ()=>{
    showCarouselItem(1)
})
leftButton.addEventListener("click", ()=>{
    showCarouselItem(-1)
})

function showCarouselItem(direction) {
    let imageCount = carouselImages.childElementCount
    n += direction
    if(n >= imageCount){
        n = 0
    }
    if(n < 0){
        n = imageCount - 1
    }

    for (const image of carouselImages.children) {
      image.classList.remove("visible")  
    }

    carouselImages.children[n].classList.add("visible")
}

