/**
 * A Game object represents the game state state
 * It is responsible for interactions with that state
 */
class Game {
	constructor(){
		this.tier = GameTiers.hungry;
		this.food = 0;
		this.wood = 0;
		this.friends = 0;
		this.modules = [];
	}

	// What computes every game increment
	tick() {
		for (let module of this.modules) {
			module.tick();
		}
	}

	gainFood(amount = 1) {
		let total = amount;
		for (let module of this.modules) {
			total = module.foodModifier(total);
		}
		this.food += total;
	}

	//TODO Serialization process needs to know how to save/load modules
	load(saveObject) {
		this.tier = saveObject.tier;
		this.food = saveObject.food;
		this.wood = saveObject.wood;
		this.friends = saveObject.friends;
	}

	save() {
		return {
			...this,
		}
	}

	addModule(module) {
		this.modules.push(module);
	}
}

/**
 * A module is a game concept that may only be pertinent during certain portions of the game
 * it can be added or removed from the game state
 * it acts very similarly to the game class.
 */
class Module {

	foodModifier(input) {
		return input;
	}

	woodModifier(input) {
		return input;
	}

	friendModifier(input) {
		return input;
	}

	tick() {}

}

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

	foodModifier(foodAmount) {
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
