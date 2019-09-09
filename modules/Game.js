/**
 * A Game object represents the game state state
 * It is responsible for interactions with that state
 */
class Game extends Module {
    constructor() {
        super(null);
        this.tier = GameTiers.hungry;
        this.food = 0;
        this.wood = 0;
        this.huts = 0;
        this.hunger = 95.0;
        this.friends = 0;
        this.modules = [];
        this.modifiers = [];
        this.upgrades = {};
        this.land = 50;
        this.farms = 0;
        this.farmers = 0;


        this.vals = DefaultValues;
        this.addModule(new HungerModule(this))
    }

    housing() {
        return this.huts * this.val(Values.housingModifier) - this.friends - this.farmers;
    }

    freeLand() {
        return this.land - this.huts;
    }

    freeFarms() {
        return this.farms - this.farmers;
    }

    // What computes every game increment
    tick() {
        for (let module of this.modules) {
            module.tick();
        }
        if (this.hunger >= this.val(Values.maxHunger) && this.tier === GameTiers.hungry) {
            this.tier = GameTiers.cold;
        }
        if (this.huts >= 1 && this.tier === GameTiers.cold) {
            this.tier = GameTiers.lonely;
        }
        if (this.friends >= 1 && this.tier === GameTiers.lonely) {
            this.tier = GameTiers.overworked;
        }
    }


    gainResource(resourceId, amount, modifierType) {
        this[resourceId] += amount * this.val(modifierType);
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


function doTheThing() {
    // Get upgrades related to `thing`
}