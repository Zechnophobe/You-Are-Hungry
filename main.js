let game;
let playSpeed;
const GlobalUpgrades = [];
const defaultPlaySpeed = 100;
let playLoopStatus = PlayLoopStatus.playing;
const displayElements = [];

$(document).ready(function () {
    init();
    startPlayLoop();
});

function init() {
    game = new Game();
    loadUpgrades(game);
    for (let button of ResourceButtons) {
        addElement(new ResourceButton(game, button.name, button.element, makeCost(game, button.costs), button.resource.id, button.amount, new Requirement(game, button.requirement)));
    }
    addElement(new GameTierDisplay(game));

    addElement(new DisplayView(game, Elements.displayList, GameResources));
    addElement(new UpgradeView(game, Elements.upgradeList, GlobalUpgrades));
    render(); // Do a single initial render without waiting for the play loop
    playSpeed = defaultPlaySpeed;
}

function addElement(element) {
    displayElements.push(element)
}

function startPlayLoop() {

    setInterval(function () {
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

function loadUpgrades(game) {
    for (let upgradeParams of simpleUpgrades) {
        GlobalUpgrades.push(new Upgrade(game, upgradeParams));
    }
}
