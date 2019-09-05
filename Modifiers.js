/**
 * A simple modifier class that is always a scalar to one or more values
 * This could be an upgrade, or achievement, or any of a number of other things.
 * If you want a calculation that is more than this, instead consider using a Module
 */
class Modifier {
    setMeUp() {
        this.modifiers = {};
    }

    constructor() {
        this.setMeUp();
    }

    getModifier(valueName) {
        const modifier = this.modifiers[valueName];
        if (modifier === undefined) {
            return 1;
        }
        return modifier;
    }
}


class Achievement extends Upgrade {

    constructor() {
        super();
        this.has = false;
    }

    tryToClaimAchievement() {
        /**
         * Concrete achievements will define how they are acquired.
         */
    }
}

class Upgrade extends Modifier {
    setMeUp() {
        this.costs = [];
        this.requirements = [];
    }

}
