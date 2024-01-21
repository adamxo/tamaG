const hungerMoodle = document.querySelector(".moodle")

let sprite = {
    hunger: 100,
    thirst: 100,
    happiness: 100
}

function getHungry() {
    if (sprite.hunger < 50) {
        hungerMoodle.classList.add("active")
    }

    sprite.hunger--

    console.log(sprite.hunger)
}

setInterval(getHungry, 100)