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
		let message = '';
		for (let cost of this.costs) {
			message += cost.str() + '<br>';
		}
		return message;
	}
	
	render() {
		if (this.shouldActivate()) {
			this.isVisible = true;
		}
		this.element.text(this.name);
		if (this.isVisible) {
			this.element.show();
			this.element.attr('title', this.tooltip());
			this.element.tooltip();
		} else {
			this.element.hide();
		}
	}

	action() {
		// The result of the button being pressed and costs being paid.
	}

	onPress() {
		if (payCosts(this.costs)) {
			this.action();
		}
		this.render();
	}

}


class ForageButton extends ControlButton {
	config() {
		this.costs = [];
		this.name = "Forage For Food";
		this.requirement = [];
		this.isVisible = true;
		this.element = $(Elements.forageButton);
	}
	
	action() {
		this.game.gainFood();
	}
	
}

class ChopWoodButton extends ControlButton {
	config() {
		this.costs = [new HungerCost(this.game, 20)];
		this.name = "Chop Wood";
		this.isVisible = false;
		this.element = $(Elements.chopWoodButton);
	}
	
	action() {
		this.game.wood += 1;
	}
	
	shouldActivate() {
		return this.game.tier === GameTiers.cold;
	}
	
}

class BuildHutButton extends ControlButton {
	config() {
		this.costs = [new HungerCost(this.game, 50), new WoodCost(this.game,10)];
		this.name = "Build Hut";
		this.isVisible = false;
		this.element = $(Elements.buildHutButton);
	}

	action() {
		this.game.huts += 1;
	}

	shouldActivate() {
		return this.game.tier === GameTiers.cold;
	}

}
