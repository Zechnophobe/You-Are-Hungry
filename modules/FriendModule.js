class FriendModule extends Module {

    tick() {
        // Farmer grow food.
        this.growFood();
    }

    growFood() {
        const howMuch = .1 * this.game.farmers;
        this.game.gainResource(Resources.food.id, howMuch, Values.farmFoodModifier);
    }
}
