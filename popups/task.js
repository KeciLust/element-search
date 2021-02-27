const modalOpen = document.getElementById(`modal_main`);
modalOpen.classList.add(`modal_active`);
const modalClose = Array.from(document.getElementsByClassName(`modal__close`));
modalClose.forEach(el => {
    el.addEventListener(`click`, () => {
        modalOpen.classList.remove(`modal_active`);
        modalSuccess.classList.remove(`modal_active`);
    })
});
const modalSuccess = document.getElementById(`modal_success`);
const showSuccess = Array.from(document.getElementsByClassName(`show-success`));
showSuccess.forEach(el => {
    el.addEventListener(`click`, () => {
        modalSuccess.classList.add(`modal_active`);
    })
})