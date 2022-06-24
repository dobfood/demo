class Ball {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.flag = 'RIGHT';
        this.canvas = document.getElementById('mycanvas');
        this.ctx = this.canvas.getContext('2d');
    }

    draw() {

        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        this.ctx.fillStyle = this.color
        this.ctx.fill();
        this.ctx.closePath();
    }

    move() {
        if (this.y <= this.radius) {
            this.flag = 'RIGHT';
        } else if (this.y + this.radius >= this.canvas.height) {
            this.flag = 'LEFT';
        }

        switch (this.flag) {
            case 'LEFT':
                this.moveLeft();
                break;
            case 'RIGHT':
                this.moveRight();
                break;
            default:
                this.moveLeft();
        }

    }

    moveLeft() {

        this.x += 10;

    }

    moveRight() {
        this.x -= 10;
    }

    collision(bar) {
        if (this.x + this.radius >= bar.x
            && this.y >= bar.y
            && this.y <= bar.y + bar.height) {
            this.flag = 'RIGHT';
        }
    }
}