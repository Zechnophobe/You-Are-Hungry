const commonFoodLootNames = ['a few beans. Non magical', 'shoe leather', 'half a cookie', 'something sweet you hope was food', 'unmentionable leftovers', 'an unlabeled bag in the back of the fridge', 'some gum from the underside of your desk'];
const uncommonFoodLootNames = ['a stale sandwich', 'an apple', 'a decent cup of joe', 'the last bit of a tasty milkshake'];
const rareFoodLootNames = ['an unopened bag of pretzels', 'a slice of apple pie'];
const foodLoot = {
    [LootLevels.common]: [
        {
            name: commonFoodLootNames,
            bonus: {},
        },
    ],
    [LootLevels.uncommon]: [
        {
            name: uncommonFoodLootNames,
            bonus: {[Resources.food.id]: 2},
        },
    ],
    [LootLevels.rare]: [
        {
            name: rareFoodLootNames,
            bonus: {[Resources.food.id]: 20},
        },
    ],
    [LootLevels.legendary]: [
        {
            name: 'a ... holy heck, is that a warm, freshly salted, bag of french fries?!',
            bonus: {[Resources.food.id]: 100},
            upgrade: 'lucky-devil',
        },
    ],
};

const commonWoodLootNames = ['a rocking horse no one was using.', 'a canoe washed up on shore, no oars', 'a wardrobe that may have led to a magical realm, but is now kindling', 'a tidy pile of driftwood.'];
const uncommonWoodLootNames = ['a previously felled tree', 'a piano that was too out of tune to use', 'someone\'s front door. Say Hi!', 'a baby crib. A little baby prison.'];
const rareWoodLootNames = ['A dog house. The dog had moved on to better places. Nicer places.', 'an intricately carved totem'];

const woodLoot = {
    [LootLevels.common]: [
        {
            name: commonWoodLootNames,
            bonus: {}
        }
    ],
    [LootLevels.uncommon]: [
        {
            name: uncommonWoodLootNames,
            bonus: {[Resources.wood.id]: 3},
        }
    ],
    [LootLevels.rare]: [
        {
            name: rareWoodLootNames,
            bonus: {[Resources.wood.id]: 20},
        }
    ],
    [LootLevels.legendary]: [
        {
            name: 'a Creepy Wooden puppet. Its eyes follow you wherever you go.',
            bonus: {[Resources.wood.id]: 50},
            upgrade: 'always-watching'
        }
    ]
};

const commonFriendLootNames = ['a friend from high school', 'that one guy who maintains too much eye contact', 'some random person off the street', 'an old acquaintance', 'that girl who always posts MLM scams online', 'a shadowy figure with no name'];
const uncommonFriendLootNames = ['Eustace, you remember him right?', 'Cecelia, she always liked to build things', 'Gregor, everyone used to like him', 'Mary-Sue, annoyingly good at everything'];
const rareFriendLootNames = ['Tiffany, or was it Brittany?', 'Sancho. Why? Because he is Sancho!', 'Patrick, destroyer of gallons of ice cream'];

const friendLoot = {
    [LootLevels.common]: [
        {
            name: commonFriendLootNames,
            bonus: {},
        },
    ],
    [LootLevels.uncommon]: [
        {
            name: uncommonFriendLootNames,
            bonus: {[Resources.wood.id]: 5},
        },
    ],
    [LootLevels.rare]: [
        {
            name: rareFriendLootNames,
            bonus: {
                [Resources.wood.id]: 10,
                [Resources.food.id]: 20,
            },
        },
    ],
    [LootLevels.legendary]: [
        {
            name: 'Rasa, the hard worker! Now you can finally get some stuff done around here. ',
            bonus: {[Resources.food.id]: 100},
            upgrade: 'doozer-power',
        },
    ],
};
const Loot = {
    [Resources.food.id]: foodLoot,
    [Resources.friends.id]: friendLoot,
    [Resources.wood.id]: woodLoot,
};