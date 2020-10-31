export default class RandomCar{
    constructor(game){
        this.game = game;
        this.context = this.game.context;
        this.car2 = new Image;
        this.car2.src = "img/car3.png";
        this._positionY = (Math.random() * 280) * -1;
        this.lane = Math.floor(Math.random() * 4);
        this.lanePosX = [150,225,300];
        this.car2Width = 70;
        this.car2Length = 100;
    }

    get width(){
        return this.car2Width;
    }

    get length(){
        return this.car2Length;
    }

    get positionX(){
        return this.lanePosX[this.lane];
    }

    get positionY(){
        return this._positionY;
    }

    update(){
        this._positionY += 7;
        this.context.drawImage(this.car2,
            this.lanePosX[this.lane],
            this._positionY,
            70,
            100
        );
    }
}
