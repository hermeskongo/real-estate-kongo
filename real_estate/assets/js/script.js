
function elementToggle(element, classToggle) {
    element.classList.toggle(classToggle)
}

const menu = document.querySelector("[data-header-action-menu]")
const closeMenu = document.querySelector("[data-nav-close-btn]")
const navbar = document.querySelector("[data-navbar]")
const navLink = document.querySelectorAll(".nav-link")

const menuArr = [menu, closeMenu]

for(let i = 0; i < navLink.length; i++) {
    menuArr.push(navLink[i])
}
console.log(menuArr)
for(item of menuArr) {
    item.addEventListener('click', () => {
        elementToggle(navbar, 'active')
    })
}