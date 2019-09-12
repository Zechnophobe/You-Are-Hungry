class Tier {
    constructor(game) {
        this.game = game;
        this.onEntry();
        this.game.set('tier', this.name());
    }

    completionRequirements() {
        //Return true if we should move to the next tier
        return false;
    }

    name() {
        // Return the GameTiers.name
        return '';
    }

    onEntry() {
        // What happens when you enter this tier.
    }

    nextTier() {
        // What class represents the next tier
        return undefined;
    }

    progress() {
        if (this.completionRequirements() && this.nextTier() !== undefined) {
            const nextTierClass = this.nextTier();
            return new nextTierClass(this.game);
        }
        return this;
    }

}

class HungryTier extends Tier {

    completionRequirements() {
        return this.game.hunger >= this.game.val(Values.maxHunger);
    }

    name() {
        return GameTiers.hungry;
    }

    nextTier() {
        return ColdTier;
    }
}

class ColdTier extends Tier {

    completionRequirements() {
        return this.game.huts >= 1;
    }

    name() {
        return GameTiers.cold;
    }

    nextTier() {
        return LonelyTier;
    }
}

class LonelyTier extends Tier {

    completionRequirements() {
        return this.game.friends >= 1;
    }

    name() {
        return GameTiers.lonely;
    }

    nextTier() {
        return OverworkedTier;
    }
}

class OverworkedTier extends Tier {

    completionRequirements() {
        return this.game.freeLand() <= 25;
    }

    name() {
        return GameTiers.overworked;
    }

    nextTier() {
        return ExploreTier;
    }

    onEntry() {
        this.game.addModule(new FriendModule(this.game));
    }
}

class ExploreTier extends Tier {

    completionRequirements() {
        return false; //TODO
    }

    name() {
        return GameTiers.explore;
    }

    nextTier() {
        return undefined;
    }

    onEntry() {
        this.game.addModule(new ExplorationModule(this.game));
    }
}
