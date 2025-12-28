let colorPara = document.getElementById('color');
colorPara.textContent = "#FFFF";

document.getElementById('generate').onclick = function() {
    let randomColor = '#' + Math.floor(Math.random() * 1677215).toString(16);
    colorPara.textContent = randomColor;
    document.body.style.backgroundColor = randomColor;
};