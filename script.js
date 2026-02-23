const box = document.querySelector('.box');
const btn = document.querySelector('.btn');
const speedButtons = document.querySelector('.speed-container button');
const speedFirst = document.querySelector('.speed-first');
const speedSecond = document.querySelector('.speed-second');
const speedThird = document.querySelector('.speed-third');

function randomNum(){
    let num = Math.round(Math.random() * 255);
    return num;
}

btn.addEventListener('click',() => {
    const num1 = randomNum(),
        num2 = randomNum(),
        num3 = randomNum();
    box.style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`;
})

speedFirst.addEventListener('click',() => {
    box.style.transition = "background-color 0.5s";
})
speedSecond.addEventListener('click', () => {
    box.style.transition = "background-color 1s";
})

speedThird.addEventListener('click', () => {
    box.style.transition = "background-color 2s";
})

