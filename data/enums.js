const Elements = {
    gameTierDisplay: '#game-tier-display',
    hungerProgress: '#hunger-progress',
    upgradeList: '#upgrade-list',
    displayList: '#display-list',
    buttonDisplay: '#button-display',
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
    overworked: 'Overworked',
};

const TierOrder = {
    [GameTiers.hungry]: 1,
    [GameTiers.cold]: 2,
    [GameTiers.lonely]: 3,
    [GameTiers.overworked]: 4,
};

const Values = {
    maxHunger: 'maxHunger',
    maxHungerModifier: 'maxHungerModifier',
    minHungerModifier: 'minHungerModifier',
    nourishment: 'nourishment',
    biteSize: 'biteSize',

    // All resource modifiers must follow this naming convention.
    woodModifier: 'woodModifier',
    foodModifier: 'foodModifier',
    hungerModifier: 'hungerModifier',
    hutsModifier: 'hutsModifier',
    farmsModifier: 'farmsModifier',
    friendsModifier: 'friendsModifier',
    housingModifier: 'housingModifier',
    farmerModifier: 'farmerModifier',

    //Friend modifiers
    farmFoodModifier: 'farmFoodModifier',
    chopWoodModifier: 'chopWoodModifier',
};

const DefaultValues = {
    [Values.maxHunger]: 100,
    [Values.maxHungerModifier]: 1.5,
    [Values.minHungerModifier]: 0.5,
    [Values.nourishment]: 2.0,
    [Values.foodModifier]: 1.0,
    [Values.woodModifier]: 1.0,
    [Values.hutsModifier]: 1.0,
    [Values.farmsModifier]: 1.0,
    [Values.hungerModifier]: 1.0,
    [Values.friendsModifier]: 1.0,
    [Values.biteSize]: 0.1,
    [Values.housingModifier]: 1,
    [Values.farmerModifier]: 1,
};
