const Elements = {
    forageButton: "#forage-button",
    chopWoodButton: "#chop-wood-button",
    buildHutButton: "#build-hut-button",
    foodDisplay: '#food-display',
    chopWoodDisplay: '#chop-wood-display',
    hutsDisplay: '#huts-display',
    gameTierDisplay: '#game-tier-display',
    hungerProgress: '#hunger-progress',
    upgradeList: '#upgrade-list',
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

const TierOrder = {
    [GameTiers.hungry]: 1,
    [GameTiers.cold]: 2,
    [GameTiers.lonely]: 3,
    [GameTiers.sad]: 4,
};

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
    nourishment: 'nourishment',

    // All resource modifiers must follow this naming convention.
    woodModifier: 'woodModifier',
    foodModifier: 'foodModifier',
    hungerModifier: 'hungerModifier',
    hutsModifier: 'hutsModifier',
};

const DefaultValues = {
    [Values.maxHunger]: 100,
    [Values.maxHungerModifier]: 1.5,
    [Values.minHungerModifier]: 0.5,
    [Values.nourishment]: 2.0,
    [Values.foodModifier]: 1.0,
    [Values.woodModifier]: 1.0,
    [Values.hutsModifier]: 1.0,
    [Values.hungerModifier]: 1.0,
};
