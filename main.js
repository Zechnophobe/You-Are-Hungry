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
    addElement(ForageButton);
    addElement(ChopWoodButton);
    addElement(FoodDisplay);
    addElement(ChopWoodDisplay);
    addElement(GameTierDisplay);
    addElement(BuildHutButton);
    addElement(HutsDisplay);
    addElement(InviteFriendButton);
    addElement(FriendsDisplay);

    displayElements.push(new UpgradeView(game, Elements.upgradeList, GlobalUpgrades));
    render(); // Do a single initial render without waiting for the play loop
    playSpeed = defaultPlaySpeed;
}

function addElement(elementClass, module = game) {
    displayElements.push(new elementClass(module))
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
