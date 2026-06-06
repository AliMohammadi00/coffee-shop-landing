const toggleThemeBtns = document.querySelectorAll(".toggle_theme");
const bars = document.querySelector('.bar-3')
const nav = document.querySelector(".nav")
const closeNavBtn = document.querySelector('.x-mark')
const cover = document.querySelector(".cover")
const openNavBar = document.querySelector("#open_nav_bar")

const shoppingCardMobile = document.querySelector('.shopping-card-mobile')
const shoppingCard = document.querySelector('.shopping-card')
const closeShopBtn = document.querySelector('.x-mark-shop')

toggleThemeBtns.forEach(element => {
    element.addEventListener('click', () => {
        if (localStorage.theme === "dark") {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    })
});

bars.addEventListener('click', () => {
    openNavCar(nav, "right-0", "-right-64", closeNavBtn)
})

shoppingCard.addEventListener('click', () => {
    openNavCar(shoppingCardMobile, "left-0", "-left-64", closeShopBtn)
})

function openNavCar(element, classAdd, classRemove, closeElementBtn) {

    OpenSideBar(element, classRemove, classAdd)

    closeElementBtn.addEventListener('click', () => {
        closeSideBar(element, classRemove, classAdd)
    })

    cover.addEventListener('click', () => {
        closeSideBar(element, classRemove, classAdd)
    })

}

function addAndRemoveFromCover(element, classesAdd, classesRemove) {
    classesAdd.forEach(classAdd => {
        element.classList.add(classAdd)
    });
    classesRemove.forEach(classRemove => {
        element.classList.remove(classRemove)
    })
}

function OpenSideBar(element, classRemove, classAdd) {
    element.classList.remove(classRemove)
    element.classList.add(classAdd)
    addAndRemoveFromCover(cover, ["visible", "opacity-1"], ["invisible", "opacity-0"])
}

function closeSideBar(element, classRemove, classAdd) {
    element.classList.remove(classAdd)
    element.classList.add(classRemove)
    addAndRemoveFromCover(cover, ["invisible", "opacity-0"], ["visible", "opacity-1"])
}