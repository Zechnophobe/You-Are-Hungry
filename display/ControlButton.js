class ControlButton {

    constructor(game, name = '', selector, requirement) {
        this.game = game;
        this.name = name;
        this.isVisible = false;
        this.element = $(selector);
        this.requirement = requirement || new Requirement(this.game);
        this.setup()
    }

    setup() {
        this.element.text(this.name);
        this.element.on('click', () => {
            this.onPress();
        })
    }

    shouldActivate() {
        return (this.requirement === undefined) || this.requirement.met();
    }

    tooltip() {
        return '';
    }

    render() {
        if (this.shouldActivate()) {
            this.isVisible = true;
        }
        if (this.isVisible) {
            this.element.show();
            this.element.attr('data-original-title', this.tooltip());
            this.element.tooltip();
        } else {
            this.element.hide();
        }
    }

    action() {
        // The result of the button being pressed
    }

    onPress() {
		this.action();
        this.render();
    }

}

class CostedButton extends ControlButton {
	
	constructor(game, name = '', selector, costs, requirement) {
		super(game, name, selector, requirement);
		this.costs = costs || new Cost();
	}

	costsCanBePayed() {
		return this.costs.canBePayed();
	}
	
    tooltip() {
        return this.costs.str();
    }
	
	render() {
		super.render();
		if (this.costsCanBePayed()) {
			this.element.addClass('btn-primary');
			this.element.removeClass('btn-warning');
		} else {
			this.element.addClass('btn-warning');
			this.element.removeClass('btn-primary');
		}
	}
	
	onPress() {
        if (this.costs.pay()) {
			super.onPress();
        }
	}
}

class UpgradeButton extends CostedButton {
    constructor(game, upgrade, selector) {
        super(game, upgrade.name, `${selector} .btn`, upgrade.costs);
        this.listElement = $(selector);
        this.upgrade = upgrade;
    }

    action() {
        this.upgrade.purchase();
        this.element.tooltip('hide');
        this.isVisible = false;
    }
	
    onPress() {
        if (this.costsCanBePayed()) {
            this.action();
        }
        this.render();
    }


    tooltip() {
        const tip = super.tooltip();
        return `${this.upgrade.description}<br>${tip}`;
    }

    render() {
        super.render();
        if (this.upgrade.purchased) {
            this.listElement.hide();
        } else {
            if (this.upgrade.available()) {
                this.listElement.show();
            }
        }
    }
}

class ResourceButton extends CostedButton {
    constructor(game, name, selector, costs, resourceId, amount = 1, requirement) {
        super(game, name, selector, costs, requirement);
        this.resourceId = resourceId;
        this.modifierName = `${this.resourceId}Modifier`;
        this.amount = amount;
    }

    action() {
        const gained = this.game.gainResource(this.resourceId, this.amount, this.modifierName);
        this.game.getRandomBonusLoot(gained, this.resourceId);
    }
}