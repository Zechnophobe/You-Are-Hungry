/**
 * A simple modifier class that is always a scalar to one or more values
 * This could be an upgrade, or achievement, or any of a number of other things.
 * If you want a calculation that is more than this, instead consider using a Module
 */
class Modifier {

    constructor(modifiers, name) {
        this.modifiers = modifiers;
        this.name = name;
    }

    getModifier(valueName) {
        const modifier = this.modifiers[valueName];
        if (modifier === undefined) {
            return 1;
        }
        return modifier;
    }
}

class Upgrade {
    constructor(game) {
        this.game = game;
        this.setMeUp();
    }

    setMeUp() {
        this.costs = [];
        this.requirements = [];
        this.modifier = undefined;
        this.purchased = false;
    }

    available() {
        return !this.purchased; // TODO Should actually check all requirements
    }

    purchase() {
        if (this.costs.pay()) {
            this.purchased = true;
            return true;
        }
    }


}

class BowlUpgrade extends Upgrade {
    setMeUp() {
        super.setMeUp();
        this.costs = [new WoodCost(this.game, 2)];
        this.modifer = new Modifier({biteSize: 1.5}, 'wood bowl')
    }
}
