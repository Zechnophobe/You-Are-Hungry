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

        // Max hunger means you are completely full. 0 hunger means you are starving.
        this.vals = {
            [Values.maxHunger]: 100,
            [Values.maxHungerModifier]: 1.5,
            [Values.minHungerModifier]: 0.5,
            [Values.nourishment]: 2.0,
        };
        this.addModule(new HungerModule(this))
    }

    // What computes every game increment
    tick() {
        for (let module of this.modules) {
            module.tick();
        }
        if (this.hunger >= this.val(Values.maxHunger) && this.tier === GameTiers.hungry) {
            this.tier = GameTiers.cold;
        }
    }

    gainResource(amount) {
        for (let module of this.modules) {
            amount = module.gainResource(amount);
        }
        for (let [name, quantity] of Object.entries(amount)) {
            this[name] += quantity;
        }
    }

    val(valName) {
        let finalModifier = 1;
        for (let modifier of this.modifiers) {
            finalModifier *= modifier.getModifier(valName)
        }

        for (let upgrade of Object.values(this.upgrades)) {
            finalModifier *= upgrade.modifiers.getModifier(valName)
        }
        return this.vals[valName] * finalModifier;
    }

    yields() {
        let result = {};

        // Default all modifiers to 1
        for (let resource of Object.values(Resources)) {
            result[resource] = 1;
        }

        // Apply all modules to modifiers
        for (let module of this.modules) {
            result = module.gainResource(result);
        }

        //TODO apply other simple modifiers
        return result;
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
