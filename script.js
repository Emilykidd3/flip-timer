const startNumber = 9
const flipCard = document.querySelector(".flip-card")

;[...flipCard.children].forEach(child => {
    child.textContent = startNumber
});
flipCard.dataset.currentNumber = startNumer
flipCard.dataset.nextNumber = startNumber - 1
flipCard.classList.add("flip");