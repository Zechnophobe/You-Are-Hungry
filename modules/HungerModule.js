class HungerModule extends Module {
    constructor(game) {
        super(game);

        this.hungerModifiers = [Values.foodModifier, Values.woodModifier];
        addElement(new HungerBarDisplay(this));
    }

    modifyResource() {
        // At starving, you gain half the normal amount of resources.
        // At completely full, you gain 150% of the normal amount of resources.
        // min plus percent of full times difference from min to max

        const maxModifier = this.game.val(Values.maxHungerModifier);
        const minModifier = this.game.val(Values.minHungerModifier);
        const modifierRange = maxModifier - minModifier;
        return minModifier + this.hungerPercentage() * modifierRange;
    }

    val(valueName) {
        if (this.hungerModifiers.indexOf(valueName) >= 0) {
            return this.modifyResource();
        }
        return 1;
    }

    hungerPercentage() {
        return this.game.hunger / this.game.val(Values.maxHunger);
    }

    tick() {
        this.eatFood();
    }

    eatFood() {
        /**
         * Consumes food from the stock to replenish your hunger bar
         * Eats at a rate that will be about 1 food consumed per second.
         */
        if (this.game.food <= 0) {
            return;
        }

        const nourishment = this.game.val(Values.nourishment);
        const maxHunger = this.game.val(Values.maxHunger);
        const biteSize = this.game.val(Values.biteSize);
        const peopleToFeed = You + this.game.allFriends();
        const fullMeal = biteSize * peopleToFeed;
        if (this.game.hunger < maxHunger) {
            const totalFoodEaten = Math.min(fullMeal, this.game.food);
            const fullMealRatio = totalFoodEaten / fullMeal;
            const nourishmentGain = nourishment * biteSize * fullMealRatio;
            const nourishmentNeeded = maxHunger - this.game.hunger;
            const nourishNeededRatio = Math.min(nourishmentNeeded / nourishmentGain, 1);
            this.game.food -= totalFoodEaten * nourishNeededRatio; // Only eat as much food as would fill you
            this.game.hunger = Math.min(maxHunger, this.game.hunger + nourishmentGain);

        }
    }
}
