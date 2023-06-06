let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let statusEl = document.getElementById("status-el")
let startBtn = document.getElementById("start-btn")
let cardBtn = document.getElementById("card-btn")
let playerEl = document.getElementById("p-el")

let player = {
    name: "Desire",
    chips: 100
}

let isAlive = false
let hasBlackjack = false
let cards = []
let sum = 0

startBtn.addEventListener("click", function() {
    isAlive = true
    let firstCard = Math.floor(Math.random() * 13) + 1
    let secondCard = Math.floor(Math.random() * 13) + 1
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
})

function renderGame() {
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    
    if (sum < 21) {
        statusEl.textContent = "Draw a new card!"
    } else if (sum === 21) {
        hasBlackjack = true
        statusEl.textContent = "Jackpot! You've got blackjack!"
    } else {
        isAlive = false
        statusEl.textContent = "You're out!"
    }

    playerEl.textContent = "Player " + player.name + ": " + player.chips + " chips"
}

cardBtn.addEventListener("click", function() {
    if (isAlive === true & hasBlackjack === false) {
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    } 
})

function getRandomCard() {
    randoCard = Math.floor(Math.random() * 13) + 1
    if (randoCard === 1) {
        randoCard = 11
        return randoCard
    } else if (randoCard > 10) {
        randoCard = 10
        return randoCard
    } else {
        return randoCard
    }
}