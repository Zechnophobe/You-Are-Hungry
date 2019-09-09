function makeCost(game, costs) {
    const allCosts = [];
    if (costs.resource) {
        allCosts.push(new ResourceCost(game, costs.resource));
    }
    if (costs.callback) {
        allCosts.push(new CallbackCost(game, ...costs.callback));
    }

    return new CompositeCost(game, allCosts);

}

class Cost {
    /**
     * Represents how much sonething costs.
     */

    pay() {
        // What happens when you pay the cost
        // Return true if cost is successfully paid, otherwise return false
        return true;
    }

    canBePayed() {
        // Pre condition to pay cost
        return true;
    }

    str() {
        // Returns a string representing communication of the cost to the player.
        return '';
    }

    constructor(game, amount) {
        this.game = game;
        this.amount = amount;
    }
}

class ResourceCost extends Cost {

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

    costs() {
        return Object.entries(this.amount);
    }
}


class LimitCost extends ResourceCost {
    /**
     * A limit cost is not a true cost, in that paying it does not consume a resource. Instead it imposes a
     * limit on when something can be purchased. For example inviting friends when you don't have enough
     * housing for them.
     */

    pay() {
        return this.canBePayed();
    }
}

class CallbackCost extends Cost {

    constructor(game, amount, callback, message, payCallback = undefined) {
        super(game, amount);
        this.callback = callback;
        this.payCallBack = payCallback;
        this.message = message;
    }

    call(callback) {
        if (callback === undefined) {
            return true;
        }
        if (typeof callback === 'string') {
            return this.game[callback]()
        }
        return callback();
    }

    canBePayed() {
        return this.call(this.callback) >= this.amount;
    }

    pay() {
        if (this.canBePayed()) {
            return this.call(this.payCallBack);
        }

        return false;

    }

    str() {
        return this.message;
    }
}

class CompositeCost extends Cost {
    /**
     * A composite cost wraps a list of differing cost types so they can all be used at once.
     * From the outside, they are treated like a single cost that is all payed or required at once.
     * the 'amount' variable is instead assumed to be a list of costs
     */


    canBePayed() {
        let result = true;
        for (let cost of this.amount) {
            result &= cost.canBePayed();
        }
        return result
    }

    pay() {
        /**
         * I believe JS's monothreaded nature prevents race problems here, this code should block and all execute at once
         * If that is wrong, however, we may need to fix bugs related to partial costs being payed.
         */
        if (this.canBePayed()) {
            for (let cost of this.amount) {
                cost.pay();
            }
            return true;
        }
        return false;
    }

    str() {
        let message = '';
        for (let cost of this.amount) {
            message += cost.str();
        }
        return message;
    }
}
