const board = document.querySelector('.board');
const btnGray = document.createElement('button');
const btnRGB = document.createElement('button');
const btnBlack = document.createElement('button');
const btnDarken = document.createElement('button');
const btnClear = document.createElement('button');
const buttons = document.querySelector('.buttons');

function generateDivs(col, rows) {
    for(let i = 0; i < (col * rows); i++) {
        let div = document.createElement('div');
        div.style.border = "1px solid lightgray";
        board.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        board.appendChild(div).classList.add('box');
        
    }
    const boxs = document.querySelectorAll('.box')
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'rgb(0,0,0)';
    }))
}

generateDivs(50, 50);

function clearBoard() {
    btnClear.textContent = 'Clear Board';
    btnClear.addEventListener('click', () => {
        const boxs = document.querySelectorAll('.box');
        boxs.forEach(box => box.style.background = 'white');
        let newGrid = prompt('How many grid do you want? (Max: 100)')
        while (newGrid > 100 || isNaN(newGrid || newGrid < 1)) {
            if (newGrid > 100 || newGrid < 1) {
                newGrid = prompt('The number you entered is not appropiate. Enter a new number.')
            }
            if (isNaN(newGrid)) {
                newGrid = prompt("You didn't enter a number. Enter a number");
            }
        }
        board.textContent = '';
        generateDivs(newGrid, newGrid);
        blackColor();
        grayColor();
        rgbColor();
    })
    buttons.appendChild(btnClear).classList.add('btn');
}
clearBoard();

function blackColor() {
    const boxs = document.querySelectorAll('.box')
    btnBlack.textContent = 'Black'
    btnBlack.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'rgb(0, 0, 0)';
        }))
    })
    buttons.appendChild(btnBlack).classList.add('btn');
}
blackColor();

function grayColor() {
    const boxs = document.querySelectorAll('.box')
    btnGray.textContent = 'Grayscale'
    btnGray.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            let randomNumber = Math.floor(Math.random() * 255);
            box.style.background = `rgb(${randomNumber},${randomNumber},${randomNumber})`
        }))
    })
    buttons.appendChild(btnGray).classList.add('btn');
}
grayColor();

function rgbColor() {
    const boxs = document.querySelectorAll('.box');
    btnRGB.textContent = 'RGB'
    btnRGB.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            const colorArray = ['217,33,32', '231,126,49', '210,179,63', '159,190,87', '107,178,140', '72,139,194', '64,67,153', 
            '120,28,129'];
            let randomNumber = Math.floor(Math.random() * colorArray.length);
            box.style.background = `rgb(${colorArray[randomNumber]})`;
        }))
    })
    buttons.appendChild(btnRGB).classList.add('btn');
}
rgbColor();

function darken() {
    const boxs = document.querySelectorAll('.box');
    btnDarken.textContent = 'Darken';
    btnDarken.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            box.removeEventListener('click', )
            let darker = box.style.background;
            darker = darker.slice(4, -1);
            darker = darker.replace(/ /g, '');
            let darkerArray = darker.split(',')
            let rDarker = Number(darkerArray[0]) + 125;
            let gDarker = Number(darkerArray[1]) + 125;
            let bDarker = Number(darkerArray[2]) + 125;
            box.style.background = `rgb(${rDarker},${gDarker},${bDarker})`
        }))
    })
    buttons.appendChild(btnDarken).classList.add('btn');
}
darken();


//Right now if I hover, the background still randomizes.