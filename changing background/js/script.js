const title = document.querySelector('.title');
const button = document.querySelector('.button');
const body = document.querySelector('body');
const span = document.querySelector('.span');

let array = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function getRandom() {
    return Math.floor(Math.random() * array.length);
};

button.addEventListener('click', () => {
    let createHex = '';
    for (let i = 0; i < 6; i++) {
        createHex += array[getRandom()]; 
    };
    title.style.color = `#${createHex}`;
    span.textContent = `#${createHex}`;
    body.style.backgroundColor = `#${createHex}`;
});
