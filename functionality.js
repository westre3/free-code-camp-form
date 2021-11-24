const output = document.querySelector('output');
const slider = document.querySelector('#slider');

output.innerText = slider.value;

slider.addEventListener('input', () => {
    output.innerText = slider.value;
});