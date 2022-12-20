document.addEventListener('DOMContentLoaded', () => {
    const array = [{ name: "apple", img: "apple.png" }, { name: "apple", img: "apple.png" }, { name: "banana", img: "banana.png" }, { name: "banana", img: "banana.png" },
    { name: "cherry", img: "cherry.png" }, { name: "cherry", img: "cherry.png" }, { name: "kiwi", img: "kiwi.png" }, { name: "kiwi", img: "kiwi.png" }, { name: "mango", img: "mango.png" },
    { name: "mango", img: "mango.png" }, { name: "peach", img: "peach.png" }, { name: "peach", img: "peach.png" }, { name: "strawberry", img: "strawberry.png" },
    { name: "strawberry", img: "strawberry.png" }, { name: "watermelon", img: "watermelon.png" }, { name: "watermelon", img: "watermelon.png" }]

    array.sort(() => 0.5 - Math.random())
    const grid = document.querySelector(".grid")
    point = document.getElementById("score")
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
    var cardsWonId = []

    function createBoard() {
        for (let i = 0; i < array.length; i++) {
            score = 0
            var card = document.createElement("img")
            card.setAttribute("src", "clown.jpg")
            card.setAttribute("data-id", i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    function checkForMatch() {
        var cards = document.querySelectorAll("img")
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1] && optionOneId !== optionTwoId) {
            cardsWon.push(cardsChosen)
            cardsWonId.push(optionOneId)
            cardsWonId.push(optionTwoId)
        }
        else {
            cards[optionOneId].setAttribute('src', 'clown.jpg')
            cards[optionTwoId].setAttribute('src', 'clown.jpg')
        }
        cardsChosen = []
        cardsChosenId = []
        console.log(cardsWonId)

    }
    function flipcard() {
        var pointScored = true;
        var cardId = this.getAttribute("data-id")
        for (i = 0; i < cardsWonId.length; i++) {
            if (cardId === cardsWonId[i]) {
                pointScored = false;
            }
        }
        if (pointScored) {
            score++;
            point.textContent = score;
            cardsChosen.push(array[cardId].name)
            cardsChosenId.push(cardId)
            this.setAttribute('src', array[cardId].img)
            if (cardsChosen.length == 2) {
                setTimeout(checkForMatch, 450)
            }
        }
    }
    createBoard()
    point.textContent = score
})

function reset() {
    window.location.reload()
}
