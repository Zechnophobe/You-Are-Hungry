class DisplayElement {
	constructor(game) {
		this.game = game;
	}
	
	render() {
		
	}
}

class FoodDisplay extends DisplayElement {
	constructor(game) {
		super(game);
		this.element = $('#food-display');
	}
	render() {
		if (this.game.food <= 0) {
			this.element.hide();
		} else {
			this.element.show();
			this.element.text('Food: ' + this.game.food);
		}
		
	}
	
}


class ChopWoodDisplay extends DisplayElement {
	constructor(game) {
		super(game);
		this.element = $('#chop-wood-display');
	}
	render() {
		if (this.game.wood <= 0) {
			this.element.hide();
		} else {
			this.element.show();
			this.element.text('Wood: ' + this.game.wood);
		}
		
	}
	
}