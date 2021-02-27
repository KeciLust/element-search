const menu = document.querySelectorAll(`ul li a.menu__link`);
const menuActive = document.getElementsByClassName(`menu_active`)

function menuOpen() {
    menu.forEach(el => {
        if (el.closest(`li`).querySelectorAll(`ul`).length > 0) {
            el.onclick = () => {
                if (menuActive.length > 0) {
                    menuActive[0].classList.remove(`menu_active`);
                }
                const menuChange = el.closest(`li`).querySelectorAll(`ul`);
                menuChange[0].classList.toggle(`menu_active`);
                return false;
            }
        }
    })
}
menuOpen();