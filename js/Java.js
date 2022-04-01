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