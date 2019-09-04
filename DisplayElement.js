class DisplayElement {
	constructor(game) {
		this.setMeUp();
		this.game = game;
		this.element = $(this.elementId);
	}
	setMeUp() {
		// Because javascript doesn't have class variables;

		this.elementId = '';
	}
	
	render() {
		
	}
}

class GameTierDisplay extends DisplayElement {
	setMeUp() {
		this.elementId = Elements.gameTierDisplay;
	}

	render() {
		this.element.text('You are ' + this.game.tier);
	}
}

class CounterDisplay extends DisplayElement {
	setMeUp() {
		this.elementId = '';
		this.counterName = '';
	}

	counterValue() {
		return 0;
	}

	shouldRender() {
		return this.counterValue() > 0;
	}

	render() {
		if (this.shouldRender()) {
			this.element.show();
			this.element.text(this.counterName + ': ' + this.counterValue());
		} else {
			this.element.hide();
		}

	}
}

class FoodDisplay extends CounterDisplay {
	setMeUp() {
		this.elementId = Elements.foodDisplay;
		this.counterName = 'Food';
	}

	counterValue() {
		return this.game.food;
	}

	
}


class ChopWoodDisplay extends CounterDisplay {
	setMeUp() {
		this.elementId = Elements.chopWoodDisplay;
		this.counterName = 'Wood';
	}

	counterValue() {
		return this.game.wood;
	}
	
}
