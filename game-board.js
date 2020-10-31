import Game from './game.js'


    let canvas = document.querySelector("canvas");
    let context = canvas.getContext("2d");

    let game = new Game(context);

    requestAnimationFrame(roadLoop);

    function roadLoop() {
        game.update();
        requestAnimationFrame(roadLoop);
    }


