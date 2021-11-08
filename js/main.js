const overlayEffect = document.querySelector('.overlay')
const overlayDescription = document.querySelector('.overlay-desc')

overlayEffect.addEventListener('mouseover', () => {
    overlayDescription.classList.add('show-desc');
})