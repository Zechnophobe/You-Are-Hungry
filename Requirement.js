class Requirement {
    /**
     * A requirement can be a number of resources owned, it can be an existing upgrade or achievement or a game tier,
     * or all of the above.
     * This is an abstract data type that represents a set of such requirements.
     */

    constructor(game, requirements) {
        this.game = game;
        this.requirements = requirements;
    }

    met() {
        return this.hasTier() && this.hasResources() && this.hasUpgrades();
    }

    hasTier() {
        if (this.requirements.tier === undefined) {
            return true;
        }
        return TierOrder[this.game.tier] >= TierOrder[this.requirements.tier]
    }

    hasResources() {
        if (this.requirements.resources === undefined) {
            return true;
        }

        let hasAllResources = true;
        for (let [name, amount] of Object.entries(this.requirements.resources)) {
            hasAllResources &= this.game[name] >= amount;
        }

        return hasAllResources;
    }

    hasUpgrades() {
        if (this.requirements.upgrades === undefined) {
            return true;
        }
        let hasAllupgrades = true;
        for (let upgrade of this.requirements.upgrades) {
            hasAllupgrades &= this.game.hasUpgrade(upgrade);
        }
        return hasAllupgrades;
    }
}
