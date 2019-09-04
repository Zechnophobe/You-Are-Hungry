let game;
let forageButton;
let chopWoodButton;
let foodDisplay;
let chopWoodDisplay;
let playSpeed;
const defaultPlaySpeed = 100;

 $(document).ready( function () {
    init();
    startPlayLoop()
 });

 function init() {
    game = new Game();
    forageButton = new ForageButton(game);
    chopWoodButton = new ChopWoodButton(game);
    foodDisplay = new FoodDisplay(game);
    chopWoodDisplay = new ChopWoodDisplay(game);
    playSpeed = defaultPlaySpeed;
 }

 function startPlayLoop() {

    setInterval(function() {
        onLoop();
    }, playSpeed);
 }

 function onLoop() {
    render()
 }

 function render() {
    forageButton.render();
    chopWoodButton.render();
    foodDisplay.render();
    chopWoodDisplay.render();
 }
