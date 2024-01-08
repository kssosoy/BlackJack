let cards=[]
let sum= 0
let hasBlackJack =false
let isAlive =false
let message=""

let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")

let player={
    name:"Per",
    chips:145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent =player.name+": $"+player.chips

function startGame(){
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstcard,secondCard]
    sum=firstCard+secondCard

    renderGame()
}

function getRandomCard(){
    let randomNum= Math.floor(Math.random()*13)+1
    if (randomNum===1){
        randomNum=11
    }
    else if ((randomNum===11)||(randomNum===12)||(randomNum===13)){
        randomNum=10
    }
   
    return randomNum
}
function renderGame(){
    sumEl.textContent="Sum: "+sum
    cardsEl.textContent="Cards: "
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent +=cards[i] +" "
    }
    if (sum<=20){
        message="Do you want to draw a new card?"
    } else if (sum ===21){
        message="You are win!"
        hasBlackJack=true
    } else {
        message="you're out of the game!"
        isAlive=false
    }
    messageEl.textContent=message
}
function newCard(){
    if(isAlive===true&& hasBlackJack===false){
        let card= getRandomCard()
        cards.push(card)
        sum+=card
        renderGame()
    }

}

