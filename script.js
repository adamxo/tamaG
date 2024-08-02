const hungerMoodle = document.querySelector(".hungerMoodle")

let sprite = {
    hunger: 100,
    thirst: 100,
    happiness: 100
}

function getHungry() {
    if (sprite.hunger < 50) {
        hungerMoodle.classList.add("active")
    } else{
        hungerMoodle.classList.remove("active")

    }

    sprite.hunger--

    console.log(sprite)
}

setInterval(getHungry, 1500)



const thirstMoodle = document.querySelector(".thirstMoodle")

function getThirsty(){
    if(sprite.thirst < 50){
        thirstMoodle.classList.add("active")
    }else{
        thirstMoodle.classList.remove("active")
    }
    sprite.thirst--
}

setInterval (getThirsty, 800)



const happinessMoodle = document.querySelector(".happinessMoodle")

function getUnhappy(){
    if (sprite.happiness < 50){
        happinessMoodle.classList.add("active")
    }else{
        happinessMoodle.classList.remove("active")
    }
    sprite.happiness--
}
setInterval (getUnhappy, 7000)



const eatSomething = document.querySelector('.food').addEventListener('click', e =>{
    if(sprite.hunger < 100)
        sprite.hunger+=2
    console.log(sprite)
})

const drinkSomething = document.querySelector(".drink").addEventListener("click", e => {
    if(sprite.thirst < 100)
        sprite.thirst+=3
})

const play = document.querySelector(".play").addEventListener("click", e => {
    if(sprite.happiness < 100)
        sprite.happiness+=8
})



