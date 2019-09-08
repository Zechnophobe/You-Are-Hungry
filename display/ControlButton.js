class ControlButton {

    constructor(game, {name = '', element = "", costs = []}) {
        this.game = game;
        this.costs = [];
        this.name = name;
        this.isVisible = false;
        this.element = element;
        this.setup()
    }

    setup() {
        this.element.on('click', () => {
            this.onPress();
        })
    }

    shouldActivate() {
        return true;
    }

    tooltip() {
        return this.costs.str();
    }

    render() {
        if (this.shouldActivate()) {
            this.isVisible = true;
            this.element.show();
        }
        this.element.text(this.name);
        if (this.isVisible) {
            this.element.show();
            this.element.attr('data-original-title', this.tooltip());
            this.element.tooltip();
        } else {
            this.element.hide();
        }
    }

    action() {
        // The result of the button being pressed and costs being paid.
    }

    onPress() {
        if (this.costs.pay()) {
            this.action();
        }
        this.render();
    }

}

class UpgradeButton extends ControlButton {
    constructor(game, upgrade, element) {
        super(game, {element, name: upgrade.name});
        this.upgrade = upgrade;
        this.isVisible = false;
    }

    action() {
        this.upgrade.purchase();
        this.element.tooltip('hide');
        this.isVisible = false;
    }

    shouldActivate() {
        return this.upgrade.requirements.met() && !this.upgrade.purchased;
    }

    onPress() {
        if (this.upgrade.costs.canBePayed()) {
            this.action();
        }
        this.render();
    }


    tooltip() {
        return this.upgrade.description + '<br>' + this.upgrade.costs.str();
    }
}


class ForageButton extends ControlButton {
    constructor(game) {
        super(game, {name: "Forage For Food", element: $(Elements.forageButton)});
        this.costs = new ResourceCost(this.game, {});
        this.requirement = [];
        this.isVisible = true;
    }

    action() {
        this.game.gainResource({[Resources.food]: 1});
    }

    tooltip() {
        let message = super.tooltip();
        message = 'Gain ' + this.game.yields().food.toFixed(2) + ' food<br>' + message;
        return message;
    }

}

class ChopWoodButton extends ControlButton {
    constructor(game) {
        super(game, {name: "Chop Wood", element: $(Elements.chopWoodButton)});
        this.costs = new ResourceCost(this.game, {
            [Resources.hunger]: 10,
        });
        this.isVisible = false;
    }

    action() {
        this.game.gainResource({[Resources.wood]: 1});
    }

    shouldActivate() {
        return this.game.tier === GameTiers.cold;
    }

    tooltip() {
        let message = super.tooltip();
        message = 'Gain ' + this.game.yields().wood.toFixed(2) + ' wood<br>' + message;
        return message;
    }

}

class BuildHutButton extends ControlButton {
    constructor(game) {
        super(game, {name: "Build Hut", element: $(Elements.buildHutButton)});
        this.costs = new ResourceCost(this.game, {
            [Resources.hunger]: 50,
            [Resources.wood]: 10,
        });
        this.isVisible = false;
    }

    action() {
        this.game.gainResource({[Resources.huts]: 1});
    }

    shouldActivate() {
        return this.game.tier === GameTiers.cold;
    }

    tooltip() {
        let message = super.tooltip();
        message = 'Build ' + this.game.yields().huts.toFixed(2) + ' huts<br>' + message;
        return message;
    }

}

class BuildFarmButton extends ControlButton {
    constructor(game) {
        super(game, {name: "Build Farm", element: $(Elements.buildFarmButton)});
        this.costs = new CompositeCost(game, [
            new ResourceCost(this.game, {
                [Resources.wood]: 100,
            }),
            new CallbackCost(game, 1,  () => {
                return this.game.freeLand();
            }, 'You need at least 1 unoccupied space.'),
        ]);
        this.isVisible = false;
    }

    action() {
        this.game.gainResource({[Resources.farms]: 1});
    }

    shouldActivate() {
        return this.game.tier === GameTiers.overworked;
    }

    tooltip() {
        let message = super.tooltip();
        message = 'Build ' + this.game.yields().farms.toFixed(2) + ' farms to feed your friends<br>' + message;
        return message;
    }

}

class InviteFriendButton extends ControlButton {
    constructor(game) {
        super(game, {name: "Invite Friend", element: $(Elements.inviteFriendButton)});
        this.costs = new CompositeCost(game, [
            new ResourceCost(this.game, {
                [Resources.food]: 75,
            }),
            new CallbackCost(game, 1,  () => {
                return this.game.housing();
            }, 'You need at least 1 free housing per friend.'),
        ]);
        this.isVisible = false;
    }

    action() {
        this.game.gainResource({[Resources.friends]: 1});
    }

    shouldActivate() {
        return this.game.tier === GameTiers.lonely;
    }

    tooltip() {
        let message = super.tooltip();
        message = `Invite ${this.game.yields().friends.toFixed(0)} friends to live in spare huts<br>${message}`;
        return message;
    }

}

class TrainFarmerButton extends ControlButton {
    constructor(game) {
        super(game, {name: "Train Farmer", element: $(Elements.trainFarmerButton)});
        this.costs = new CompositeCost(game, [
            new ResourceCost(this.game, {
                [Resources.friends]: 1,
            }),
            new CallbackCost(game, 1,  () => {
                return this.game.freeFarms();
            }, 'You need at least 1 unused farm per farmer.'),
        ]);
        this.isVisible = false;
    }

    action() {
        this.game.gainResource({[Resources.farmer]: 1});
    }

    shouldActivate() {
        return this.game.tier === GameTiers.lonely;
    }

    tooltip() {
        let message = super.tooltip();
        message = `Invite ${this.game.yields().friends.toFixed(0)} friends to live in spare huts<br>${message}`;
        return message;
    }

}
