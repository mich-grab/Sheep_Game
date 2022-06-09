const sheep = document.getElementById('sheep')
const arrowUp = document.getElementById('up')
const arrowLeft = document.getElementById('left')
const arrowDown = document.getElementById('down')
const arrowRight = document.getElementById('right')
let str = 'hello'

let position_X = 0
let position_Y = 0

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
            }
            break;
        case "ArrowRight":
            if (position_X < field_X_max - 100) {
                moveRight()
            }
            break;
        case "ArrowUp":
            if (position_Y > field_Y_min) {
                moveUp()
            }
            break;
        case "ArrowDown":
            if (position_Y < field_y_max - 100) {
                moveDown()
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
            }
            break;
        case 'right':
            if (position_X < field_X_max - 100) {
                moveRight()
            }
            break;
        case 'up':
            if (position_Y > field_Y_min) {
                moveUp()
            }
            break;
        case 'down':
            if (position_Y < field_y_max - 100) {
                moveDown()
            }
            break;
    }
})


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
