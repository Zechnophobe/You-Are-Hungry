class HungerModule extends Module {
	constructor(game) {
		super(game);

		addElement(HungerBarDisplay, this);
	}

	gainFood(foodAmount) {
		// At starving, you gain half the normal amount of food when you gain it.
		// At completely full, you gain 150% of the normal amount of food when you gain it.
		// min plus percent of full times difference from min to max
		const modifierRange = this.game.maxModifier - this.game.minModifier;
		const modifier = this.game.minModifier + this.hungerPercentage() * modifierRange;
		return foodAmount * modifier;
	}

	hungerPercentage() {
		return this.game.currentHunger / this.game.maxHunger;
	}

	tick() {
	    this.eatFood();
    }

    eatFood() {
        /**
         * Consumes food from the stock to replenish your hunger bar
         * Eats at a rate that will be about 1 food consumed per second.
         */
	    if (this.game.currentHunger < this.game.maxHunger && this.game.food >= .1) {
            this.game.food -= .1; // Direct modification to food because it is a cost
            this.game.currentHunger = Math.min(this.game.maxHunger, this.game.currentHunger + .2)

        }
    }
}
