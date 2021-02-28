const slide = Array.from(document.getElementsByClassName(`slider__item`));
const dot = Array.from(document.getElementsByClassName(`slider__dot`));
let change = 0;
dotChange();
function slideChange() {
    slide.forEach(el => {
        el.classList.remove(`slider__item_active`);
    });
    slide[change].classList.add(`slider__item_active`);

}
const prev = document.querySelector(`.slider__arrow_prev`);
const next = document.querySelector(`.slider__arrow_next`);
prev.onclick = () => {
    if (change < 1) {
        change = slide.length;
    }
    change -= 1;
    slideChange();
    dotChange();
}
next.onclick = () => {
    if (change >=
        slide.length - 1) {
        change = -1;
    }
    change += 1;
    slideChange();
    dotChange();
}

function dotChange() {
    dot.forEach(el => {
        el.classList.remove(`slider__dot_active`);
    });
    dot[change].classList.add(`slider__dot_active`);
}
dot.forEach((el, i) => {
    el.onclick = () => {
        change = i;
        slideChange();
        dotChange();
    }
})