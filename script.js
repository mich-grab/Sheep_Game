const sheep = document.getElementById('sheep')
const food = document.getElementById('food')
const arrowUp = document.getElementById('up')
const arrowLeft = document.getElementById('left')
const arrowDown = document.getElementById('down')
const arrowRight = document.getElementById('right')

let score = 0

let position_X = 0
let position_Y = 0

let position_X_food = 100
let position_Y_food = 200

const field_X_min = 0
const field_Y_min = 0
const field_X_max = 400
const field_y_max = 400

/*Listening keyboard arrows */

document.addEventListener('keydown', (e) => {
    const key = e.key;

    switch (key) {
        case "ArrowLeft":
            if (position_X > field_X_min) {
                moveLeft()
                checkSheepAndFood()
            }
            break;
        case "ArrowRight":
            if (position_X < field_X_max - 100) {
                moveRight()
                checkSheepAndFood()
            }
            break;
        case "ArrowUp":
            if (position_Y > field_Y_min) {
                moveUp()
                checkSheepAndFood()
            }
            break;
        case "ArrowDown":
            if (position_Y < field_y_max - 100) {
                moveDown()
                checkSheepAndFood()
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
                moveLeft()
                checkSheepAndFood()
            }
            break;
        case 'right':
            if (position_X < field_X_max - 100) {
                moveRight()
                checkSheepAndFood()
            }
            break;
        case 'up':
            if (position_Y > field_Y_min) {
                moveUp()
                checkSheepAndFood()
            }
            break;
        case 'down':
            if (position_Y < field_y_max - 100) {
                moveDown()
                checkSheepAndFood()
            }
            break;
    }
})

/*Generate food in random location*/
function generateFood() {
    food.style.left = `${position_X_food}px`
    food.style.top = `${position_Y_food}px`

    position_X_food = Math.floor(Math.random()) * 1
    position_Y_food = Math.floor(Math.random()) * 1
}

/*Generate obstacle in random location*/

/*Check if sheep is in food location*/
function checkSheepAndFood() {
    if (position_X == position_X_food && position_Y == position_Y_food) {
        generateFood()
        console.log('sheep ate food')
        return true
    }
}



/*Functions for moving */
function moveUp() {
    position_Y = position_Y - 100
    sheep.style.top = `${position_Y}px`
    printPosition()
}

function moveLeft() {
    position_X = position_X - 100
    sheep.style.left = `${position_X}px`
    printPosition()
}

function moveDown() {
    position_Y = position_Y + 100
    sheep.style.top = `${position_Y}px`
    printPosition()
}

function moveRight() {
    position_X = position_X + 100
    sheep.style.left = `${position_X}px`
    printPosition()
}

function printPosition() {
    console.log(`sheep position: X=${position_X}, Y=${position_Y}`)
    console.log(`food position: X=${position_X_food}, Y=${position_Y_food}`)
}
