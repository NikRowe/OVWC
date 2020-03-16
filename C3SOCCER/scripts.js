//Button Hover Styling via JS
const elBtn = document.querySelector('.welcomeBtn1');
    elBtn.addEventListener("mouseover", () => {
        document.querySelector('.welcomeBtn1').style.color = '#5bc0de'
    });
    elBtn.addEventListener("mouseleave", () => {
        document.querySelector('.welcomeBtn1').style.color = 'white'
    });

const elBtn2 = document.querySelector('.welcomeBtn2');
    elBtn2.addEventListener("mouseover", () => {
        document.querySelector('.welcomeBtn2').style.color = '#5bc0de'
    });
    elBtn2.addEventListener("mouseleave", () => {
        document.querySelector('.welcomeBtn2').style.color = 'white'
    });