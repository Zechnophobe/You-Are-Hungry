class ControlButton {

    constructor(game, name = '', selector, requirement, callback=undefined) {
        this.game = game;
        this.name = name;
        this.isVisible = false;
        this.element = $(selector);
        this.requirement = requirement || new Requirement(this.game);
        this.callback = callback || function(){};
        this.setup()
    }

    setup() {
        this.element.text(this.name);
        this.element.on('click', () => {
            this.onPress();
        });
    }

    shouldActivate() {
        return this.requirement.met();
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
        this.callback();
    }

    onPress() {
		this.action();
        this.render();
    }

}


class CostedButton extends ControlButton {
	
	constructor(game, name = '', selector, costs, requirement, callback, classCan, classCannot) {
		super(game, name, selector, requirement, callback);
		this.costs = costs || new Cost();
		this.classCan = classCan;
		this.classCannot = classCannot;
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
			this.element.addClass(this.classCan);
			this.element.removeClass(this.classCannot);
		} else {
			this.element.addClass(this.classCannot);
			this.element.removeClass(this.classCan);
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
        super(game, upgrade.name, `${selector} .btn`, upgrade.costs, undefined, undefined, 'btn-primary', 'btn-warning');
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
    constructor(game, name, selector, costs, resource, amount = 1, requirement) {
        super(game, name, selector, costs, requirement, undefined, 'btn-primary', 'btn-warning');
        this.resource = resource;
        this.modifierName = `${this.resource.id}Modifier`;
        this.amount = amount;
    }

    action() {
        const gained = this.game.gainResource(this.resource.id, this.amount, this.modifierName);
        this.game.getRandomBonusLoot(gained, this.resource);
    }
}
