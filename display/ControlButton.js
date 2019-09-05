class ControlButton {
	
	constructor(game) {
		this.game = game;
		this.config();
		this.setup()
	}
	
	config() {
		this.cost = [];
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
	
	render() {
		if (this.shouldActivate()) {
			this.isVisible = true;
		}
		this.element.text(this.name);
		if (this.isVisible) {
			this.element.show();
		} else {
			this.element.hide();
		}
	}

	onPress() {
		this.render();
	}

}


class ForageButton extends ControlButton {
	config() {
		this.cost = [];
		this.name = "Forage For Food";
		this.requirement = [];
		this.isVisible = true;
		this.element = $(Elements.forageButton);
	}
	
	onPress() {
		this.game.gainFood();
		super.onPress()
	}
	
}

class ChopWoodButton extends ControlButton {
	config() {
		this.cost = [];
		this.name = "Chop Wood";
		this.requirement = ['hunger is full'];
		this.isVisible = false;
		this.element = $(Elements.chopWoodButton);
	}
	
	onPress() {
		this.game.wood += 1;
		super.onPress()
	}
	
	shouldActivate() {
		return this.game.food >= 10;
	}
	
}
