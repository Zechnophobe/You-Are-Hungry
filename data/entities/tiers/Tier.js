class Tier {
    constructor(game) {
        this.game = game;
        this.onEntry();
        this.game.set('tier', this.name());
        messageLog.log(this.entryMessage());
    }

    entryMessage() {
        return `Entering tier ${this.name()}`;
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

    entryMessage() {
        return `You are hungry.`;
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

    entryMessage() {
        return `You filled your stomach with this and that.`;
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

    entryMessage() {
        return `A hut will provide some insulation, and a place for a person to live.`;
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

    entryMessage() {
        return `Friends are nice, but all they do is eat your food.`;
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

    entryMessage() {
        return `Your friends have been put to the grindstone, but the boundaries are closing in.`;
    }
}
