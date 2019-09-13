const Resources = {
    food: {
        name: 'Food',
        id: 'food',
        verb: 'Found',
    },
    hunger: {
        name: 'Hunger',
        id: 'hunger',
    },
    wood: {
        name: 'Wood',
        id: 'wood',
        verb: 'Found',
    },
    friends: {
        name: 'Friends',
        id: 'friends',
        verb: 'Befriended',
    },
    huts: {
        name: 'Huts',
        id: 'huts',
        verb: 'Constructed',
    },
    farms: {
        name: 'Farms',
        id: 'farms',
        verb: 'Constructed',
    },
    farmers: {
        name: 'Farmers',
        id: 'farmers',
    },
    sheds: {
        name: 'Sheds',
        id: 'sheds',
        verb: 'Constructed',
    },
    woodcutters: {
        name: 'Woodcutters',
        id: 'woodcutters',
    },
    offices: {
        name: 'Construction Offices',
        id: 'offices',
        verb: 'Constructed',
    },
    constructors: {
        name: 'Constructors',
        id: 'constructors',
    },
    caravans: {
        name: 'Caravans',
        id: 'caravans',
        verb: 'Formed',
    },
    land: {
        name: 'Land',
        id: 'land',
        verb: 'Discovered',
    },
};

// All Resources on this list get a little display area
const GameResources = [
    Resources.food,
    Resources.wood,
    Resources.friends,
    Resources.huts,
    Resources.farms,
    Resources.sheds,
    Resources.farmers,
    Resources.woodcutters,
    Resources.offices,
    Resources.constructors,
    Resources.caravans,
];

const ResourceButtons = [
    {
        resource: Resources.food,
        name: 'Forage for food',
        amount: 1,
        costs: {},
        requirements: {},
    },
    {
        resource: Resources.wood,
        name: 'Chop Wood',
        amount: 1,
        costs: {
            resource: {[Resources.hunger.id]: 10},
        },
        requirement: {tier: GameTiers.cold},
    },
    {
        resource: Resources.huts,
        name: 'Build Hut',
        amount: 1,
        costs: {
            resource: {
                [Resources.hunger.id]: 50,
                [Resources.wood.id]: 10,
            },
        },
        requirement: {tier: GameTiers.cold}
    },
    {
        resource: Resources.farms,
        name: 'Build A Farm',
        amount: 1,
        costs: {
            resource: {
                [Resources.wood.id]: 100,
                [Resources.hunger.id]: 75,
            },
            callback: [1, 'freeLand', 'You need at least 1 unoccupied space.'],
        },
        requirement: {tier: GameTiers.overworked}
    },
    {
        resource: Resources.sheds,
        name: 'Build A Wood Shed',
        amount: 1,
        costs: {
            resource: {
                [Resources.wood.id]: 75,
                [Resources.hunger.id]: 25,
            },
            callback: [1, 'freeLand', 'You need at least 1 unoccupied space.'],
        },
        requirement: {tier: GameTiers.overworked}
    },
    {
        resource: Resources.offices,
        name: 'Build A construction office',
        amount: 1,
        costs: {
            resource: {
                [Resources.wood.id]: 300,
                [Resources.hunger.id]: 95,
            },
            callback: [1, 'freeLand', 'You need at least 1 unoccupied space.'],
        },
        requirement: {tier: GameTiers.overworked}
    },
    {
        resource: Resources.friends,
        name: 'Invite A Friend',
        amount: 1,
        costs: {
            resource: {
                [Resources.food.id]: 75,
            },
            callback: [1, 'housing', 'You need at least 1 free housing per friend.'],
        },
        requirement: {tier: GameTiers.lonely}
    },
    {
        resource: Resources.farmers,
        name: 'Train a Farmer',
        amount: 1,
        costs: {
            resource: {
                [Resources.friends.id]: 1,
            },
            callback: [1, 'freeFarms', 'You need at least 1 farm per farmer.'],
        },
        requirement: {tier: GameTiers.overworked}
    },
    {
        resource: Resources.woodcutters,
        name: 'Train a Woodcutter',
        amount: 1,
        costs: {
            resource: {
                [Resources.friends.id]: 1,
            },
            callback: [1, 'freeWoodcutters', 'You need at least 1 wood shed per woodcutter.'],
        },
        requirement: {tier: GameTiers.overworked}
    },
    {
        resource: Resources.constructors,
        name: 'Train a construction worker',
        amount: 1,
        costs: {
            resource: {
                [Resources.friends.id]: 1,
            },
            callback: [1, 'freeConstructors', 'You need at least 1 construction office per construction worker.'],
        },
        requirement: {tier: GameTiers.overworked}
    },
    {
        resource: Resources.caravans,
        name: 'Form a caravan of your friends!',
        amount: 1,
        costs: {
            resource: {
                [Resources.friends.id]: 5,
            },
        },
        requirement: {tier: GameTiers.explore}
    },
];
