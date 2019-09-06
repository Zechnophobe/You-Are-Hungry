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
		const modifierRange = this.game.maxModifier - this.game.minModifier;
		const modifier = this.game.minModifier + this.hungerPercentage() * modifierRange;
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
		return this.game.hunger / this.game.maxHunger;
	}

	tick() {
	    this.eatFood();
    }

    eatFood() {
        /**
         * Consumes food from the stock to replenish your hunger bar
         * Eats at a rate that will be about 1 food consumed per second.
         */

	    if (this.game.hunger < this.game.maxHunger) {
	        const foodEaten = Math.min(.1, this.game.food);
            this.game.food -= foodEaten; // Direct modification to food because it is a cost
            this.game.hunger = Math.min(this.game.maxHunger, this.game.hunger + 2*foodEaten)

        }
    }
}