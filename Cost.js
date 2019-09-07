class Cost {
    /**
     * Represents how much sonething costs.
     */

    pay() {
        // What happens when you pay the cost
        // Return true if cost is successfully paid, otherwise return false
    }

    canBePayed() {
        // Pre condition to pay cost
    }

    str() {
        // Returns a string representing communication of the cost to the player.
    }

    constructor(game, amount) {
        this.game = game;
        this.amount = amount;
    }
}

class ResourceCost extends Cost {

    costs() {
        return Object.entries(this.amount);
    }

    canBePayed() {
        let result = true;
        for (let [name, amount] of this.costs()) {
            result &= this.game[name] >= amount;
        }
        return result
    }

    pay() {
        if (this.canBePayed()) {
            for (let [name, amount] of this.costs()) {
                this.game[name] -= amount;
            }
            return true;
        }
        return false;
    }

    str() {
        let message = '';
        for (let [name, amount] of this.costs()) {
            message += 'requires <b>' + amount + '</b> ' + name + '<br>';
        }
        return message;
    }
}
