const menu = document.querySelectorAll(`ul li a.menu__link`);
const menuActive = document.getElementsByClassName(`menu_active`)

function menuOpen() {
    menu.forEach(el => {
        const menuChange = el.closest(`li`).querySelectorAll(`ul`);
        if (menuChange.length > 0) {
            el.onclick = () => {
                if (menuActive.length > 0 && !menuChange[0].classList.contains(`menu_active`)) {
                    menuActive[0].classList.remove(`menu_active`);
                }
                menuChange[0].classList.toggle(`menu_active`);
                return false;
            }
        }
    })
}
menuOpen();