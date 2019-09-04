class HungerModule extends Module {
	constructor() {
		super();
		//TODO Add an element with this module as the parent.
		//addElement(null, this);

		// Max hunger means you are completely full. 0 hunger means you are starving.
		this.maxHunger = 100.0;
		this.currentHunger = 25.0;
		this.maxModifier = 1.5;
		this.minModifier = 0.5;
	}

	gainFood(foodAmount) {
		// At starving, you gain half the normal amount of food when you gain it.
		// At completely full, you gain 150% of the normal amount of food when you gain it.
		// min plus percent of full times difference from min to max
		const modifierRange = this.maxModifier - this.minModifier;
		const modifier = this.minModifier + this.hungerPercentage() * modifierRange;
		const modified_amount = foodAmount * modifier;
		console.log('Modified food amount: ' + foodAmount + ' to ' + modified_amount);
		return modified_amount;
	}

	hungerPercentage() {
		return this.currentHunger / this.maxHunger;
	}
}
