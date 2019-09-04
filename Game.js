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
	}

	// What computes every game increment
	tick() {

	}

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
}
