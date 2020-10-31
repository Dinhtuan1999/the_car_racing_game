
export function vehicleHit(myCar, traffic) {

    for (let i = 0; i < traffic.length; i++) {

        let randomCar = traffic[i];

        if (randomCar.positionY > 560 && randomCar.positionY < 600) {
            if (Math.abs(myCar.positionX - randomCar.positionX) <= 15) {
                return true;
            }
            console.log(randomCar.positionY)


        }
    }

    return false;
}