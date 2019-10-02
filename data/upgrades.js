//[name, id, description, costs, requirements, modifiers, icon]
const simpleUpgrades = [
    ['Foraging Apron', 'foraging-apron', 'Helps you forage better. Made of Food. You don\'t want to know how that works. +25% Food Foraged', {[Resources.food.id]: 20}, {resources: {[Resources.food.id]: 10}}, {[Values.foodModifier]: 1.25}, undefined],
    ['Reinforced Apron', 'reinforced-apron', 'An apron, now with the power of TREE CORPSES. +75% Food Foraged', {[Resources.food.id]: 45, [Resources.wood.id]: 20 }, {resources: {[Resources.food.id]: 30}, tier: GameTiers.cold, upgrades: ['foraging-apron']}, {[Values.foodModifier]: 1.75}, undefined],
    ['Wooden Bowl', 'wood-bowl', 'A nice bowl to eat from. Food is 50% more nourishing', {[Resources.wood.id]: 4}, {tier: GameTiers.cold}, {[Values.nourishment]: 1.5}, undefined],
    ['HardWood Bowl', 'hard-wood-bowl', 'An even better bowl. Food is 50% more nourishing', {[Resources.wood.id]: 20}, {tier: GameTiers.cold, upgrades: ['wood-bowl']}, {[Values.nourishment]: 1.5}, undefined],
    ['Ebonwood Bowl', 'ebon-wood-bowl', 'An even betterer bowl. Food is 100% more nourishing', {[Resources.wood.id]: 50}, {tier: GameTiers.cold, upgrades: ['hard-wood-bowl']}, {[Values.nourishment]: 2.0}, undefined],
    ['Basic Axe', 'basic-axe', 'Use wood to make an axe to chop even MORE wood! +50% wood chopped', {[Resources.wood.id]: 8}, {tier: GameTiers.cold}, {[Values.woodModifier]: 1.5}, undefined],
    ['Advanced Axe', 'advanced-axe', 'Like the basic one, but more choppy. +50% wood chopped!', {[Resources.wood.id]: 65}, {tier: GameTiers.cold, upgrades: ['basic-axe']}, {[Values.woodModifier]: 1.5}, undefined],
    ['N-leaf clover', 'lucky-clover', 'A clover with an unusual number of leaves. Will bring good luck!', {[Resources.wood.id]: 50, [Resources.food.id]: 100}, {tier: GameTiers.overworked, upgrades: ['lucky-devil']}, {[Values.legendaryModifier]: 1.5, [Values.rareModifier]: 1.5, [Values.uncommonModifier]: 1.5}, undefined],
    ['Nice Apartments', 'nice-apartments', 'Upgrade your huts to nice apartments that take up 50% less space', {[Resources.wood.id]: 500, [Resources.food.id]: 250}, {tier: GameTiers.explore}, {[Values.hutSpaceModifier]: 0.5}, undefined],
];

const lootUpgrades = {
    ['lucky-devil']: ['Tasty fries make everything better', 'lucky-devil', 'You\'ll never forget your luck. +15% more uncommon drops', {}, {tier: GameTiers.unobtainable}, {[Values.uncommonModifier]: 1.15}, undefined],
    ['doozer-power']: ['Rasa is a real doozer', 'doozer-power', 'Impresses all your woodcutters to cut 25% faster', {}, {tier: GameTiers.unobtainable}, {[Values.chopWoodModifier]: 1.25}, undefined],
    ['always-watching']: ['A super creeeeeepy doll. Like dude. Seriously', 'always-watching','You keep finding this creepy puppet on your bed, no matter how many times you put it away. Maybe it\'s lucky?', {}, {tier: GameTiers.unobtainable}, {[Values.rareModifier]: 1.25}, undefined],
};
