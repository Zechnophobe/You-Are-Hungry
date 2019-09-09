const Resources = {
    food: {
        name: 'Food',
        id: 'food',
    },
    hunger: {
        name: 'Hunger',
        id: 'hunger',
    },
    wood: {
        name: 'Wood',
        id: 'wood',
    },
    friends: {
        name: 'Friends',
        id: 'friends',
    },
    huts: {
        name: 'Huts',
        id: 'huts',
    },
    farms: {
        name: 'Farms',
        id: 'farms',
    },
    farmers: {
        name: 'Farmers',
        id: 'farmers',
    },
    sheds: {
        name: 'Sheds',
        id: 'sheds',
    },
    woodcutters: {
        name: 'Woodcutters',
        id: 'woodcutters',
    },
    offices: {
        name: 'Construction Offices',
        id: 'offices',
    },
    constructors: {
        name: 'Constructors',
        id: 'constructors',
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
];