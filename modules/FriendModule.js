class FriendModule extends Module {

    tick() {
        // Farmer grow food.
        this.growFood();
        this.chopWood();
    }

    growFood() {
        const howMuch = .1 * this.game.farmers;
        this.game.gainResource(Resources.food.id, howMuch, Values.farmFoodModifier);
    }

    chopWood() {
        const howMuch = .1 * this.game.woodcutters;
        const hungerCost = this.game.woodcutters / (this.game.allFriends() + 1);
        if (this.game.hunger >= hungerCost) {
            this.game.hunger -= hungerCost;
            this.game.gainResource(Resources.wood.id, howMuch, Values.chopWoodModifier);
        }


    }
}
