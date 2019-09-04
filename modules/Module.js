/**
 * A module is a game concept that may only be pertinent during certain portions of the game
 * it can be added or removed from the game state
 * it acts very similarly to the game class.
 */
class Module {

	gainFood(input) {
		return input;
	}

	woodModifier(input) {
		return input;
	}

	friendModifier(input) {
		return input;
	}

	tick() {}

	load(saveObject) {}

	save() {
		return {
			...this,
		}
	}

}
