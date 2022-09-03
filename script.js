const startNumber = 9
const flipCard = document.querySelector(".flip-card")
const topHalf = flipCard.querySelector(".top")
const bottomHalf = flipCard.querySelector(".bottom")
const topFlip = document.createElement('div')
topFlip.classList.add('top-flip')
const bottomFlip = document.createElement('div')
bottomFlip.classList.add('bottom-flip')

topHalf.textContent = startNumber
bottomHalf.textContent = startNumber
topFlip.textContent = startNumber
bottomFlip.textContent = startNumber + 1

flipCard.dataset.currentNumber = startNumber
flipCard.dataset.nextNumber = startNumber - 1
flipCard.addEventListener("animationstart", e => {
    topHalf.textContent = startNumber - 1
})
flipCard.addEventListener("animationend", e => {
    bottom.textContent = startNumber - 1
})
flipCard.append(topFlip, bottomFlip);