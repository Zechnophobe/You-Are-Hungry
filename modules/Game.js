/**
 * A Game object represents the game state state
 * It is responsible for interactions with that state
 */
class Game extends Module {
	constructor(){
		super();
		this.tier = GameTiers.hungry;
		this.food = 0;
		this.wood = 0;
		this.friends = 0;
		this.modules = [];
		this.addModule(new HungerModule())
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
