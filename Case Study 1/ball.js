//-----vi tri trai bong
let ball = new Ball(100, 400, 20, 'red')
ball.draw();
//-----vi tri thanh doc 1
let rect = new Rectangle(1450, 330, 20, 130,'blue');
//-----vi tri thanh doc 2
let rect2 = new Rectangle(30, 330, 20, 130, 'pink')

//rect.draw();
function clearCanvas() {
    let canvas = document.getElementById('mycanvas');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
//------
function play() {
    clearCanvas();
    ball.move();
    ball.draw();
    rect.draw();
    ball.collision(rect)
    rect2.draw()
    ball.collision(rect2)
}
///----toc do trai bong
setInterval(play, 15)
//------nut di chuyen thanh 1
window.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
        case 38:
            rect.moveTop();
            break;
        case 40:
            rect.moveDown();
            break;
        case 87:
            rect2.moveTop();
            break;
        case 83:
            rect2.moveDown();
            break;
    }
})
/*
//--------nut di chuyen thanh 2
window.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
        case 87:
            rect2.moveTop();
            break;
        case 83:
            rect2.moveDown();
            break;
    }
})

 */
