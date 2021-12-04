const output = document.querySelector('output');
const slider = document.querySelector('#quantity');
const sliderDots = document.querySelectorAll('.slider-dot-box');
const outputMin = slider.getAttribute('min');
const outputStep = slider.getAttribute('step');
const outputMax = slider.getAttribute('max');

output.innerText = `${slider.value} doz.`;

slider.addEventListener('input', () => {
    output.innerText = `${slider.value} doz.`;
    updateDots(slider.value);
});

function updateDots(newValue) {
    sliderDots.forEach(dot => { dot.classList.remove('active'); });

    // min and max are always transparent
    if(newValue !== outputMin && newValue != output) {
        // Figure out how many steps along the slider we are
        const steps = (newValue - outputMin) / outputStep;
        sliderDots[steps].classList.add('active');
    }
}