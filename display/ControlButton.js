class ControlButton {

    constructor(game, name = '', selector) {
        this.game = game;
        this.name = name;
        this.isVisible = false;
        this.element = $(selector);
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
        return '';
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
        // The result of the button being pressed
    }

    onPress() {
		this.action();
        this.render();
    }

}

class CostedButton extends ControlButton {
	
	constructor(game, name = '', selector, costs) {
		super(game, name, selector);
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
        super(game, upgrade.name, selector, upgrade.costs);
        this.upgrade = upgrade;
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
        if (this.costsCanBePayed()) {
            this.action();
        }
        this.render();
    }


    tooltip() {
        const tip = super.tooltip();
        return `${this.upgrade.description}<br>${tip}`;
    }
}

class ResourceButton extends CostedButton {
    constructor(game, name, selector, costs, resourceId, amount = 1, requirement) {
        super(game, name, selector, costs);
        this.requirement = requirement || new Requirement();
        this.resourceId = resourceId;
        this.amount = amount;
    }

    shouldActivate() {
        return (this.requirement === undefined) || this.requirement.met();
    }

    action() {
        this.game.gainResource({[this.resourceId]: this.amount});
    }

    tooltip() {
        let message = super.tooltip();
        message = `Gain ${(this.amount * this.game.yields()[this.resourceId]).toFixed(2)} ${this.resourceId}<br>${message}`;
        return message;
    }
}