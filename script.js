const sheep = document.getElementById('sheep')
const food = document.getElementById('food')
const fence = document.getElementById('fence')
const farmer = document.getElementById('farmer')
const arrowUp = document.getElementById('up')
const arrowLeft = document.getElementById('left')
const arrowDown = document.getElementById('down')
const arrowRight = document.getElementById('right')
const sheepScore = document.getElementById('display_score')
const sheepTime = document.getElementById('display_time')
const startBtn = document.getElementById('start_Btn')
const containerFieldScore = document.querySelector('.container_field__score')
const containerFieldScoreCongratulations = document.querySelector('.container_field__score_congratulations')

let gameOn = false

let score = 0
let timer = 60
let timerId

let position_X = 0
let position_Y = 0

let position_X_food = 100
let position_Y_food = 200

let position_X_fence = 200
let position_Y_fence = 300

let position_X_farmer = 100
let position_Y_farmer = 200

const field_X_min = 0
const field_Y_min = 0
const field_X_max = 400
const field_y_max = 400

/*Functions pre-run */

generateFood()
generateFence()
generateFarmer()


/*Start Game */




startBtn.addEventListener('click', () => {
    if (gameOn == false) {

        startGame(true)
        gameOn = true
        startBtn.innerText = 'Stop'
        score = 0
        sheepScore.innerText = `Score: ${score}`
        timer = 60
        sheepTime.innerText = `Time left: ${timer} s`
        generateFood()
        generateFence()
        generateFarmer()
        containerFieldScore.classList.remove('active')
    }
    else {

        startGame(false)
        gameOn = false
        startBtn.innerText = 'Start'


    }
})



function startGame(status) {
    console.log(timerId)

    if (status == true) {
        timerId = setInterval(timeCounter, 1000)
    } else {
        clearInterval(timerId)
    }


}



/*Starting a timer */

function timeCounter() {

    if (timer > 0) {
        timer -= 1
        sheepTime.innerText = `Time left: ${timer} s`

    } else {
        clearInterval(timerId)
        gameOn = false
        startBtn.innerText = 'Start'
        containerFieldScore.classList.add('active')
        containerFieldScoreCongratulations.innerText = `Congratulations, your score is: ${score}`
    }

}


/*Listening keyboard arrows */

document.addEventListener('keydown', (e) => {
    const key = e.key;

    switch (key) {
        case "ArrowLeft":
            if (position_X > field_X_min) {
                if (checkFence(1) == false) {
                    moveLeft()
                    checkSheepAndFood()
                    checkSheepAndFarmer()
                }
            }
            break;
        case "ArrowRight":
            if (position_X < field_X_max - 100) {
                if (checkFence(2) == false) {
                    moveRight()
                    checkSheepAndFood()
                    checkSheepAndFarmer()
                }
            }
            break;
        case "ArrowUp":
            if (position_Y > field_Y_min) {
                if (checkFence(3) == false) {
                    moveUp()
                    checkSheepAndFood()
                    checkSheepAndFarmer()
                }
            }
            break;
        case "ArrowDown":
            if (position_Y < field_y_max - 100) {
                if (checkFence(4) == false) {
                    moveDown()
                    checkSheepAndFood()
                    checkSheepAndFarmer()
                }
            }
            break;
    }
})

/*Listening screen arrows */

document.addEventListener('click', (e) => {
    const key = e.target.id
    switch (key) {
        case 'left':
            if (position_X > field_X_min) {
                if (checkFence(1) == false) {
                    moveLeft()
                    checkSheepAndFood()
                    checkSheepAndFarmer()
                }
            }
            break;
        case 'right':
            if (position_X < field_X_max - 100) {
                if (checkFence(2) == false) {
                    moveRight()
                    checkSheepAndFood()
                    checkSheepAndFarmer()
                }
            }
            break;
        case 'up':
            if (position_Y > field_Y_min) {
                if (checkFence(3) == false) {
                    moveUp()
                    checkSheepAndFood()
                    checkSheepAndFarmer()
                }
            }
            break;
        case 'down':
            if (position_Y < field_y_max - 100) {
                if (checkFence(4) == false) {
                    moveDown()
                    checkSheepAndFood()
                    checkSheepAndFarmer()
                }
            }
            break;
    }
})

/*Generate food in random location*/

function generateFood() {
    position_X_food = Math.floor(Math.random() * 4) * 100
    position_Y_food = Math.floor(Math.random() * 4) * 100

    if (position_X_food == position_X && position_Y_food == position_Y) {
        generateFood()
    } else {
        food.style.left = `${position_X_food}px`
        food.style.top = `${position_Y_food}px`
    }
}

/*Generate farmer in random location*/

function generateFarmer() {
    position_X_farmer = Math.floor(Math.random() * 4) * 100
    position_Y_farmer = Math.floor(Math.random() * 4) * 100

    if (position_X_farmer == position_X && position_Y_farmer == position_Y ||
        position_X_farmer == position_X_food && position_Y_farmer == position_Y_food ||
        position_X_farmer == position_X_fence && position_Y_farmer == position_Y_fence) {
        generateFarmer()
    } else {
        farmer.style.left = `${position_X_farmer}px`
        farmer.style.top = `${position_Y_farmer}px`
    }
}

/*Generate fence in random location*/

function generateFence() {
    position_X_fence = Math.floor(Math.random() * 4) * 100
    position_Y_fence = Math.floor(Math.random() * 4) * 100

    if (position_X_fence == position_X && position_Y_fence == position_Y || position_X_fence == position_X_food && position_Y_fence == position_Y_food) {
        generateFence()
    } else {
        fence.style.left = `${position_X_fence}px`
        fence.style.top = `${position_Y_fence}px`
    }
}

/*Check if sheep is in food location*/

function checkSheepAndFood() {
    if (position_X == position_X_food && position_Y == position_Y_food) {
        generateFood()
        generateFence()
        generateFarmer()
        addPoint()
    }
}

/*Check if sheep is in farmer location*/

function checkSheepAndFarmer() {
    if (position_X == position_X_farmer && position_Y == position_Y_farmer) {
        generateFood()
        generateFence()
        generateFarmer()
        removePoint()
    }
}

/*Check if next move is illegal */

function checkFence(direction) {
    let key = direction
    switch (key) {
        case 1:

            if (position_X - 100 == position_X_fence && position_Y == position_Y_fence) {
                return true
            } else {
                return false
            }
            break;
        case 2:
            if (position_X + 100 == position_X_fence && position_Y == position_Y_fence) {
                return true
            } else {
                return false
            }
            break;
        case 3:
            if (position_Y - 100 == position_Y_fence && position_X == position_X_fence) {
                return true
            } else {
                return false
            }
            break;
        case 4:
            if (position_Y + 100 == position_Y_fence && position_X == position_X_fence) {
                return true
            } else {
                return false
            }
            break;

    }

}

/*AddScore*/

function addPoint() {
    score += 1
    sheepScore.innerText = `Score: ${score}`

}

/*AddScore*/

function removePoint() {
    score -= 1
    sheepScore.innerText = `Score: ${score}`

}


/*Functions for moving */

function moveUp() {
    position_Y = position_Y - 100
    sheep.style.top = `${position_Y}px`
}

function moveLeft() {
    position_X = position_X - 100
    sheep.style.left = `${position_X}px`
}

function moveDown() {
    position_Y = position_Y + 100
    sheep.style.top = `${position_Y}px`
}

function moveRight() {
    position_X = position_X + 100
    sheep.style.left = `${position_X}px`
}
