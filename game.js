class game{
    constructor() {
        this.canvas = null;
        this.context = null;
        this.init();
        this.loop();
    }
    init() {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = 1000;
        this.canvas.height = 500;
        document.body.appendChild(this.canvas);
        this.snake = new snake(this);
        this.food = new food(this);
    }
    loop() {
        this.update();
        this.draw();
        setTimeout(() => this.loop(), 90);
    }
    update() {
        this.snake.update();
        if(this.snake.eat(this.food.x, this.food.y)){
            this.food.update();
        }
    }
    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.snake.draw();
        this.food.draw();
    }
}
let game1 = new game();
