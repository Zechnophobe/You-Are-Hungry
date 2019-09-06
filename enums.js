const Elements = {
    forageButton: "#forage-button",
    chopWoodButton: "#chop-wood-button",
    buildHutButton: "#build-hut-button",
    foodDisplay: '#food-display',
    chopWoodDisplay: '#chop-wood-display',
    hutsDisplay: '#huts-display',
    gameTierDisplay: '#game-tier-display',
    hungerProgress: '#hunger-progress',
};

const PlayLoopStatus = {
    playing: 'playing',
    stopped: 'stopped',
};

const GameTiers = {
    hungry: 'Hungry',
    sad: 'Sad',
    lonely: 'Lonely',
    cold: 'Cold',
};

const TierOrder = [
    GameTiers.hungry,
    GameTiers.cold,
    GameTiers.lonely,
    GameTiers.sad,
];

const Resources = {
    hunger: 'hunger',
    food: 'food',
    wood: 'wood',
    huts: 'huts',
};

const Values = {
  maxHunger: 'maxHunger',
  maxHungerModifier: 'maxHungerModifier',
  minHungerModifier: 'minHungerModifier',
};
