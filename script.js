const sheep = document.getElementById('sheep')
let str = 'hello'

let position_X = 0
let position_Y = 0

const field_X_min = 0
const field_Y_min = 0
const field_X_max = 400
const field_y_max = 400


document.addEventListener('keydown', (e) => {
    const key = e.key;

    switch (key) {
        case "ArrowLeft":
            if (position_X > field_X_min) {
                position_X = position_X - 100
                sheep.style.left = `${position_X}px`
                console.log(position_X)
            }
            break;
        case "ArrowRight":
            if (position_X < field_X_max - 100) {
                position_X = position_X + 100
                sheep.style.left = `${position_X}px`
                console.log(position_X)
            }
            break;
        case "ArrowUp":
            if (position_Y > field_Y_min) {
                position_Y = position_Y - 100
                sheep.style.top = `${position_Y}px`
                console.log(position_Y)
            }
            break;
        case "ArrowDown":
            if (position_Y < field_y_max - 100) {
                position_Y = position_Y + 100
                sheep.style.top = `${position_Y}px`
                console.log(position_Y)
            }
            break;
    }

});


/* console.log(position_X)
console.log(position_Y)
if (position_X > 0) {
    position_X = position_X - 100
    sheep.style.left = `${position_X}px`
    console.log(position_X)
    console.log(position_Y)
}
 */
