let game;
let playSpeed;
const defaultPlaySpeed = 100;
let playLoopStatus = PlayLoopStatus.playing;
const displayElements = [];

 $(document).ready( function () {
    init();
    startPlayLoop();
 });

 function init() {
    game = new Game();
    addElement(ForageButton);
    addElement(ChopWoodButton);
    addElement(FoodDisplay);
    addElement(ChopWoodDisplay);
    addElement(GameTierDisplay);
    addElement(BuildHutButton);
    addElement(HutsDisplay);
    render(); // Do a single initial render without waiting for the play loop
    playSpeed = defaultPlaySpeed;
 }

 function addElement(elementClass, module = game) {
    displayElements.push(new elementClass(module))
 }

 function startPlayLoop() {

    setInterval(function() {
        onLoop();
    }, playSpeed);
 }

 function onLoop() {
    if (playLoopStatus === PlayLoopStatus.playing) {
        render();
        game.tick();
    }
 }

 function render() {
    for (let element of displayElements) {
        element.render();
    }
 }
