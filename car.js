export default class Car {
    constructor(game) {
        this.game = game;
        this.context = this.game.context;
        this.positionX = 225;
        this.positionY = 650;
        this.speed = 0;
        this.maxSpeed = 120;
        this.init();
    }

    init() {
        this.car = new Image;
        this.car.src = "img/car1.png"
    }

    get positionX() {
        return this._positionX;
    }
    set positionX(positionX){
        return this._positionX= positionX;
    }
    get positionY() {
        return this._positionY;
    }
    set positionY(positionY){
        return this._positionY= positionY;
    }

    resetPosition(){
        this._positionX = 240;
        this._positionY = 600;
    }

    moveLeft() {
        this._positionX -= 70;
        if (this._positionX <= 150) {
            this._positionX = 150;
        }
    }

    moveRight() {
        this._positionX += 80;
        if (this._positionX >= 300) {
            this._positionX = 300;
        }
    }

    // set speed(speed){
    //     if(speed >= this.maxSpeed){
    //         this.speed = this.maxSpeed;
    //     }else if( speed <= 0){
    //         this.speed = 0;
    //     }else {
    //         this.speed = speed;
    //     }
    // }
    // get speed(){
    //     return this.speed;
    // }

    update() {
        this.context.drawImage(this.car, this._positionX, this._positionY, 50, 80);
    }
}