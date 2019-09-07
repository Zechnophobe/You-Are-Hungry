class HungerModule extends Module {
    constructor(game) {
        super(game);

        this.hungerModifiedResources = [Resources.food, Resources.wood];
        addElement(HungerBarDisplay, this);
    }

    modifyResource(amount) {
        // At starving, you gain half the normal amount of resources.
        // At completely full, you gain 150% of the normal amount of resources.
        // min plus percent of full times difference from min to max

        const maxModifier = this.game.val(Values.maxHungerModifier);
        const minModifier = this.game.val(Values.minHungerModifier);
        const modifierRange = maxModifier - minModifier;
        const modifier = minModifier + this.hungerPercentage() * modifierRange;
        return amount * modifier;
    }

    gainResource(amount) {
        for (let resource of this.hungerModifiedResources) {
            if (amount[resource] !== undefined) {
                amount[resource] = this.modifyResource(amount[resource])
            }
        }
        return amount;
    }

    hungerPercentage() {
        return this.game.hunger / this.game.val(Values.maxHunger);
    }

    tick() {
        this.eatFood();
    }

    eatFood() {
        /**
         * Consumes food from the stock to replenish your hunger bar
         * Eats at a rate that will be about 1 food consumed per second.
         */

        const nourishment = this.game.val(Values.nourishment);
        const maxHunger = this.game.val(Values.maxHunger);
        if (this.game.hunger < maxHunger) {
            const foodEaten = Math.min(.1, this.game.food);
            this.game.food -= foodEaten; // Direct modification to food because it is a cost
            this.game.hunger = Math.min(maxHunger, this.game.hunger + nourishment * foodEaten)

        }
    }
}
