"use stricts"

let menu = document.querySelector(".hamburger-menu")
let button = menu.querySelector("button")

function setMenuState(isOpen) {
    menu.classList.toggle("open", isOpen)
}

let open = false

button.addEventListener("click", () => {
    setMenuState(!open)

})