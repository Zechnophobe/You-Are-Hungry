const Elements = {
    gameTierDisplay: '#game-tier-display',
    hungerProgress: '#hunger-progress',
    upgradeList: '#upgrade-list',
    displayList: '#display-list',
    buttonDisplay: '#button-display',
    actionDisplay: '#action-display',
    exploreButton: '#explore-lands',

    messageLog: '#message-log',
};

const You = 1;

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
    explore: 'Claustrophobic',
    unobtainable: 'unobtainable',
};

const LootLevels = {
    legendary: 'legendary',
    common: 'common',
    rare: 'rare',
    uncommon: 'uncommon',
};

const TierOrder = {
    [GameTiers.hungry]: 1,
    [GameTiers.cold]: 2,
    [GameTiers.lonely]: 3,
    [GameTiers.overworked]: 4,
    [GameTiers.explore]: 5,



    [GameTiers.unobtainable]: 999,
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
    landModifier: 'landModifier',

    //Friend modifiers
    farmFoodModifier: 'farmFoodModifier',
    chopWoodModifier: 'chopWoodModifier',

    //Rarity Values
    legendaryModifier: 'legendaryModifier',
    rareModifier: 'rareModifier',
    uncommonModifier: 'uncommonModifier',

    bonusModifier: 'bonusModifier',

    //Cost Modifiers
    hungerCostModifier: 'hungerCostModifier',

    //Hut Modifiers
    hutSpaceModifier: 'hutSpaceModifier',
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
    [Values.hutSpaceModifier]: 1,

    [Values.legendaryModifier]: .002,
    [Values.rareModifier]: .01,
    [Values.uncommonModifier]: .04,

};
