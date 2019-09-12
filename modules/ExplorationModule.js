class ExplorationModule extends Module {

    constructor(game) {
        super(game);
        new CostedButton(this.game, 'Explore new lands', Elements.exploreButton, new ResourceCost(this.game, {[Resources.caravans.id]: 1}), undefined, () => {
            this.onClickExploreLand();
        });
    }

    tick() {

    }

    val(valName) {
        return 1;
    }

    onClickExploreLand() {
        const gained = this.exploreLand();
        this.game.getRandomBonusLoot(gained, Resources.land);
    }

    exploreLand() {
        return this.game.gainResource(Resources.land.id, 1, Values.landModifier);
    }
}
