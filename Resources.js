const Resources = {
    food: {
        name: 'Food',
        id: 'food',
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
};

const GameResources = [
    Resources.food,
    Resources.wood,
    Resources.friends,
    Resources.huts,
    Resources.farms,
];

const ResourceButtons = [
    {
        resource: Resources.food,
        name: 'Forage for food',
        element: Elements.forageButton,
        amount: 1,
        costs: {},
        requirements: {},
    },
    {
        resource: Resources.wood,
        name: 'Chop Wood',
        element: Elements.chopWoodButton,
        amount: 1,
        costs: {
            resource: {[ResourceNames.hunger]: 10},
        },
        requirement: {tier: GameTiers.cold},
    },
    {
        resource: Resources.huts,
        name: 'Build Hut',
        element: Elements.buildHutButton,
        amount: 1,
        costs: {
            resource: {
                [ResourceNames.hunger]: 50,
                [ResourceNames.wood]: 10,
            },
        },
        requirement: {tier: GameTiers.cold}
    },
    {
        resource: Resources.farms,
        name: 'Build A Farm',
        element: Elements.buildFarmButton,
        amount: 1,
        costs: {
            resource: {
                [ResourceNames.wood]: 100,
                [ResourceNames.hunger]: 75,
            },
            callback: [1, 'freeLand', 'You need at least 1 unoccupied space.'],
        },
        requirement: {tier: GameTiers.overworked}
    },
    {
        resource: Resources.friends,
        name: 'Invite A Friend',
        element: Elements.inviteFriendButton,
        amount: 1,
        costs: {
            resource: {
                [ResourceNames.food]: 75,
            },
            callback: [1, 'housing', 'You need at least 1 free housing per friend.'],
        },
        requirement: {tier: GameTiers.lonely}
    },
    {
        resource: Resources.farmers,
        name: 'Invite A Friend',
        element: Elements.inviteFriendButton,
        amount: 1,
        costs: {
            resource: {
                [ResourceNames.food]: 75,
            },
            callback: [1, 'housing', 'You need at least 1 free housing per friend.'],
        },
        requirement: {tier: GameTiers.lonely}
    },
];