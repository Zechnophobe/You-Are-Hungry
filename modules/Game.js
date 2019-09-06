/**
 * A Game object represents the game state state
 * It is responsible for interactions with that state
 */
class Game extends Module {
	constructor(){
		super(null);
		this.tier = GameTiers.hungry;
		this.food = 0;
		this.wood = 0;
		this.huts = 0;
		this.friends = 0;
		this.modules = [];

		// Max hunger means you are completely full. 0 hunger means you are starving.
		this.maxHunger = 100.0;
		this.hunger = 25.0;
		this.maxModifier = 1.5;
		this.minModifier = 0.5;
		this.addModule(new HungerModule(this))
	}

	// What computes every game increment
	tick() {
		for (let module of this.modules) {
			module.tick();
		}
	    if (this.hunger >= this.maxHunger && this.tier === GameTiers.hungry) {
	        this.tier = GameTiers.cold;
        }
	}

	gainFood(amount = 1) {
		let total = amount;
		for (let module of this.modules) {
			total = module.gainFood(total);
		}
		this.food += total;
	}

	load(saveObject) {
		this.tier = saveObject.tier;
		this.food = saveObject.food;
		this.wood = saveObject.wood;
		this.friends = saveObject.friends;
	}

	addModule(module) {
		this.modules.push(module);
	}
}
