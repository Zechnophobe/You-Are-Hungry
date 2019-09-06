class Cost {
    /**
     * Represents how much sonething costs.
     */

    pay(){
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

    setMeUp() {
        this.resourceName = '';
    }

    constructor(game, amount) {
        super(game, amount);
        this.setMeUp();
    }

    canBePayed() {
        return this.game[this.resourceName] >= this.amount;
    }

    pay() {
        if (this.canBePayed()) {
            this.game[this.resourceName] -= this.amount;
            return true;
        } else {
            return false;
        }
    }

    str() {
        return 'requires <b>' + this.amount + '</b> ' + this.resourceName;
    }
}

class FoodCost extends ResourceCost {

    setMeUp() {
        this.resourceName = 'food';
    }

}

class WoodCost extends ResourceCost {

    setMeUp() {
        this.resourceName = 'wood';
    }

}

class HutsCost extends ResourceCost {

    setMeUp() {
        this.resourceName = 'huts';
    }

}

class HungerCost extends ResourceCost {

    setMeUp() {
        this.resourceName = 'currentHunger';
    }

    str() {
        return 'requires <b>' + this.amount + '</b> hunger';
    }

}
