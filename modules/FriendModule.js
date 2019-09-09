class FriendModule extends Module {

    tick() {
        // Farmer grow food.
        this.growFood();
        this.eatFood();
    }

    growFood() {
        const howMuch = this.game.farmers * this.game.val('growFoodModifier');
        this.game.gainResource(Resources.food.id, howMuch, 'farm');
    }
}
