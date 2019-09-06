class ControlButton {
	
	constructor(game) {
		this.game = game;
		this.config();
		this.setup()
	}
	
	config() {
		this.costs = [];
		this.name = "";
		this.isVisible = false;
		this.element = ""
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
		this.element.tooltip('hide');
		this.render();
		this.element.tooltip('show');
	}

}


class ForageButton extends ControlButton {
	config() {
		this.costs = new ResourceCost(this.game, {});
		this.name = "Forage For Food";
		this.requirement = [];
		this.isVisible = true;
		this.element = $(Elements.forageButton);
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
	config() {
		this.costs = new ResourceCost(this.game, {
			[Resources.hunger]: 10,
		});
		this.name = "Chop Wood";
		this.isVisible = false;
		this.element = $(Elements.chopWoodButton);
	}
	
	action() {
		this.game.gainResource({[Resources.wood]: 1});
	}
	
	shouldActivate() {
		return this.game.tier === GameTiers.cold;
	}
	
}

class BuildHutButton extends ControlButton {
	config() {
		this.costs = new ResourceCost(this.game,{
			[Resources.hunger]: 50,
			[Resources.wood]: 10,
		});
		this.name = "Build Hut";
		this.isVisible = false;
		this.element = $(Elements.buildHutButton);
	}

	action() {
		this.game.gainResource({[Resources.huts]: 1});
	}

	shouldActivate() {
		return this.game.tier === GameTiers.cold;
	}

}
