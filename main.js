let game;
let playSpeed;
const GlobalUpgrades = [];
const GlobalMissions = [];
const defaultPlaySpeed = 100;
let playLoopStatus = PlayLoopStatus.playing;
const displayElements = [];
let messageLog;

$(document).ready(function () {
    init();
    startPlayLoop();
});

function init() {
    messageLog = new MessageLog(Elements.messageLog);
    game = new Game();
    loadUpgrades(game);

    addElement(new ButtonDisplay(game, Elements.buttonDisplay, ResourceButtons));
    addElement(new UpgradeView(game, Elements.upgradeList, GlobalUpgrades));

    new View(game, Elements.actionDisplay, 'lastMessage');
    new GameTierDisplay(game, Elements.gameTierDisplay, 'tier');
    new CounterView(game, Elements.displayList, GameResources);
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

function loadMissions(game) {
    for (let missionParams of Missions) {
        GlobalMissions.push(new Mission(game, ...missionParams));
    }
}
