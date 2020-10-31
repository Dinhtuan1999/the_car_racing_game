import CarController from "./CarController.js";
import Car from './car.js';
import RandomCar from "./RandomCar.js";
import Road from "./road.js";
import {vehicleHit} from './VehicleHit.js';

export default class Game {
    constructor(context) {
        this.context =context;
        this.car =new Car(this);
        this.road= new Road(this);
        this.traffic =[];
        this.randomCar = new RandomCar(this);
        this.scroe =0;
        new CarController({road:this.road,car:this.car})
        setInterval(() => this.populateTraffic(),1000);
        this._paused =false;
    }
    populateTraffic() {
        if (this._paused) return;
        let randomCar = new RandomCar(this);
        this.traffic.push(randomCar);
        this.scroe++;
        document.getElementById('score').innerHTML = this.scroe;
    }
    set pause(pause){
        this._paused =pause;
    }
    get pause(){
        return this._paused ;
    }

    update(){
        if (this._paused) return ;
        this.road.update();
        this.car.update();
        this.randomCar.update();
        this.traffic.forEach(car =>{
            car.update();
        });
        if (vehicleHit(this.car,this.traffic)){
            let message = "Game Over !!! Your scores is : " + this.scroe + ".Do you want to try again"
            this._paused = true;
            window.confirm(message);
            if (message){
                window.location.reload();
            }
            this.car.resetPosition();
            this.randomCar.update();
            this.traffic = [];
            this._paused = false;
            clearInterval();
        }
    }


}

