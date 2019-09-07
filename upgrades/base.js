//[name, description, costs, requirements, modifiers, icon]
const simpleUpgrades = [
    ['Wooden Bowl', 'wood-bowl', 'A nice bowl to eat from. Food is 50% more nourishing', {[Resources.wood]: 4}, {tier: GameTiers.cold}, {[Values.nourishment]: 1.5}, undefined],
    ['HardWood Bowl', 'hard-wood-bowl', 'An even better bowl. Food is 50% more nourishing', {[Resources.wood]: 40}, {tier: GameTiers.cold, upgrades: ['wood-bowl']}, {[Values.nourishment]: 1.5}, undefined],
    ['Ebonwood Bowl', 'ebon-wood-bowl', 'An even better bowl. Food is 100% more nourishing', {[Resources.wood]: 100}, {tier: GameTiers.cold, upgrades: ['hard-wood-bowl']}, {[Values.nourishment]: 2.0}, undefined],
];


