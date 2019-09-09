/**
 * A module is a game concept that may only be pertinent during certain portions of the game
 * it can be added or removed from the game state
 * it acts very similarly to the game class.
 */
class Module {
    constructor(game) {
        this.game = game;
    }

    // Get a value from this module
    // Defaults to 1 since most val's are modifiers.
    val(valueName) {
        return 1;
    }

    tick() {}

    load(saveObject) {}

    save() {
        return {
            ...this,
        }
    }

}
