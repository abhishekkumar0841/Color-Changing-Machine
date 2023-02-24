const colorValue = document.querySelector("#color-value");
const btn = document.querySelector('#btn');
const container = document.querySelector('.container');


function randomColorGenerator(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const randomColor = `rgb(${red}, ${green}, ${blue})`;
    return randomColor;
}


btn.addEventListener('click', 
()=>{
    const randomColor = randomColorGenerator();
    container.style.backgroundColor = randomColor;
    colorValue.textContent = randomColor;
})





























