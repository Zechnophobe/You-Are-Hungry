/**
 * A Game object represents the game state
 * It is responsible for interactions with that state
 */
class Game extends Module {
    constructor() {
        super(null);

        this.modules = [];
        this.modifiers = [];
        this.upgrades = {};
        new GameTierDisplay(this, Elements.gameTierDisplay, 'tier');
        new CounterView(this, Elements.displayList, GameResources);
        this.addModule(new HungerModule(this));
        this.food = 0;
        this.wood = 0;
        this.huts = 0;
        this.friends = 0;
        this.land = 50;
        this.farms = 0;
        this.farmers = 0;
        this.woodcutters = 0;
        this.sheds = 0;
        this.offices = 0;
        this.constructors = 0;


        this.vals = DefaultValues;

        this.set('tier', GameTiers.hungry);
        this.set(Resources.hunger.id, 15.0);
    }

    housing() {
        return this.huts * this.val(Values.housingModifier) - this.allFriends();
    }

    sizeOfAllBuildings() {
        return this.huts * this.val(Values.hutSpaceModifier) + this.farms + this.offices;
    }

    freeLand() {
        return this.land - this.sizeOfAllBuildings();
    }

    freeFarms() {
        return this.farms - this.farmers;
    }

    freeWoodcutters() {
        return this.sheds - this.woodcutters;
    }

    freeConstructors() {
        return this.offices - this.constructors;
    }

    allFriends() {
        return this.friends + this.farmers + this.woodcutters + this.constructors;
    }

    hungerPercentage() {
        return this.hunger / this.val(Values.maxHunger);
    }

    // What computes every game increment
    tick() {
        for (let module of this.modules) {
            module.tick();
        }
        if (this.hunger >= this.val(Values.maxHunger) && this.tier === GameTiers.hungry) {
            this.set('tier', GameTiers.cold);
        }
        if (this.huts >= 1 && this.tier === GameTiers.cold) {
            this.set('tier', GameTiers.lonely);
        }
        if (this.friends >= 1 && this.tier === GameTiers.lonely) {
            this.set('tier', GameTiers.overworked);
            this.addModule(new FriendModule(this));
        }
    }


    gainResource(resourceId, amount, modifierType) {
        const totalGained = amount * this.val(modifierType);
        this.modify(resourceId, totalGained);
        return totalGained;
    }

    getRarity() {
        const val = Math.random();
        const legendary = Math.max(1 - this.val(Values.legendaryModifier), 0);
        const rare = legendary - Math.max(this.val(Values.rareModifier), 0);
        const uncommon = rare - Math.max(this.val(Values.uncommonModifier), 0);
        if (val >= legendary) {
            return LootLevels.legendary;
        } else if (val >= rare) {
            return LootLevels.rare;
        } else if (val >= uncommon) {
            return LootLevels.uncommon;
        } else {
            return LootLevels.common;
        }
    }

    getRandomLoot(lootLevel, resourceId) {
        const resourceLoot = Loot[resourceId];
        if (resourceLoot === undefined) {
            return;
        }
        return resourceLoot[lootLevel];
    }


    getRandomBonusLoot(gained, resourceId) {
        /**
         * Should be called after a manual action is taken to give the player some bonus loot
         */
        const lootLevel = this.getRarity();
        let bonusMessage = '';
        let upgradeMessage = '';
        let lootName = resourceId;
        let loot = this.getRandomLoot(lootLevel, resourceId);
        if (loot) {
            loot = getRandomValue(loot);
            lootName = loot.name;

            //Most loot has a list of possible names. If so, choose one.
            if (Array.isArray(lootName)) {
                lootName = getRandomValue(loot.name);
            }
            if (loot.bonus) {
                for (let [resourceId, amount] of Object.entries(loot.bonus)) {
                    const bonusGained = this.gainResource(resourceId, amount, Values.bonusModifier);
                    bonusMessage += `Bonus ${bonusGained} ${resourceId}`;
                }
            }
            if (loot.upgrade) {
                const upgrade = new Upgrade(this, lootUpgrades[loot.upgrade]);
                if (!this.hasUpgrade(upgrade.id)) {
                    upgradeMessage += `Free Upgrade: ${upgrade.name}`;
                    this.gainUpgrade(upgrade);
                }
            }
        }
        const message = `Got ${lootName} - worth ${gained.toFixed(2)} ${resourceId} ${bonusMessage} ${upgradeMessage}`;
        this.set('lastMessage', message)
    }

    val(valName) {
        let finalModifier = 1;
        for (let modifier of this.modifiers) {
            finalModifier *= modifier.getModifier(valName);
        }

        // Apply all modules to modifiers
        for (let module of this.modules) {
            finalModifier *= module.val(valName);
        }

        for (let upgrade of Object.values(this.upgrades)) {
            finalModifier *= upgrade.modifiers.getModifier(valName);
        }
        return (this.vals[valName] || 1) * finalModifier;
    }

    load(saveObject) {
        this.tier = saveObject.tier;
        this.food = saveObject.food;
        this.wood = saveObject.wood;
        this.huts = saveObject.huts;
        this.friends = saveObject.friends;
    }

    addModule(module) {
        this.modules.push(module);
    }

    hasUpgrade(upgradeId) {
        return this.upgrades[upgradeId] !== undefined;
    }

    gainUpgrade(upgrade) {
        if (this.hasUpgrade(upgrade.id)) {
            return;
        }

        this.upgrades[upgrade.id] = upgrade;
    }
}
