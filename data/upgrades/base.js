//[name, description, costs, requirements, modifiers, icon]
const simpleUpgrades = [
    ['Foraging Apron', 'foraging-apron', 'Helps you forage better. Made of Food. You don\'t want to know how that works. +25% Food Foraged', {[Resources.food.id]: 20}, {resources: {[Resources.food.id]: 10}}, {[Values.foodModifier]: 1.25}, undefined],
    ['Reinforced Apron', 'reinforced-apron', 'An apron, now with the power of TREE CORPSES. +75% Food Foraged', {[Resources.food.id]: 45, [Resources.wood.id]: 20 }, {resources: {[Resources.food.id]: 30}, tier: GameTiers.cold, upgrades: ['foraging-apron']}, {[Values.foodModifier]: 1.75}, undefined],
    ['Wooden Bowl', 'wood-bowl', 'A nice bowl to eat from. Food is 50% more nourishing', {[Resources.wood.id]: 4}, {tier: GameTiers.cold}, {[Values.nourishment]: 1.5}, undefined],
    ['HardWood Bowl', 'hard-wood-bowl', 'An even better bowl. Food is 50% more nourishing', {[Resources.wood.id]: 40}, {tier: GameTiers.cold, upgrades: ['wood-bowl']}, {[Values.nourishment]: 1.5}, undefined],
    ['Ebonwood Bowl', 'ebon-wood-bowl', 'An even betterer bowl. Food is 100% more nourishing', {[Resources.wood.id]: 100}, {tier: GameTiers.cold, upgrades: ['hard-wood-bowl']}, {[Values.nourishment]: 2.0}, undefined],
    ['Basic Axe', 'basic-axe', 'Use wood to make an axe to chop even MORE wood! +50% wood chopped', {[Resources.wood.id]: 8}, {tier: GameTiers.cold}, {[Values.woodModifier]: 1.5}, undefined],
    ['Advanced Axe', 'advanced-axe', 'Like the basic one, but more choppy. +50% wood chopped!', {[Resources.wood.id]: 65}, {tier: GameTiers.cold, upgrades: ['basic-axe']}, {[Values.woodModifier]: 1.5}, undefined],
];
