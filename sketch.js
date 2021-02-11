var canvas, backgroundImg, gameState = 0;
var playerCount, database, form, player, game;
var allPlayers;

function setup(){
    canvas = createCanvas(400, 400);
    database = firebase.database();
    game = new Game();
    game.gameState();
    game.start();
    
}

function draw(){
    background("white");
    if(playerCount === 4) {
        game.update(1);
    }
    if(gameState === 1) {
        clear();
        game.play();
    }
    drawSprites();
}   
