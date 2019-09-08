class DisplayElement {
    constructor(module, elementId) {
        this.module = module;
        this.element = $(elementId);
    }

    render() {

    }
}

class GameTierDisplay extends DisplayElement {
    constructor(game) {
        super(game, Elements.gameTierDisplay)
    }

    render() {
        this.element.text('You are ' + this.module.tier);
    }
}

class CounterDisplay extends DisplayElement {

    constructor(game, elementId, counterName) {
        super(game, elementId);
        this.counterName = counterName;
        this.on = false;
    }

    counterValue() {
        return 0;
    }

    shouldRender() {
        const result = this.on || this.counterValue() > 0;
        this.on = result;
        return result;
    }

    render() {
        if (this.shouldRender()) {
            this.element.show();
            this.element.text(this.counterName + ': ' + this.counterValue().toFixed(2));
        } else {
            this.element.hide();
        }

    }
}

class ResourceCounter extends CounterDisplay {
    constructor(game, elementId, resource) {
        super(game, elementId, resource.name);
        this.resourceId = resource.id;
    }

    counterValue() {
        return this.module[this.resourceId]
    }
}

class ProgressBarDisplay extends DisplayElement {
    constructor(module, elementId) {
        super(module, elementId);
        this.progressElement = $(elementId + ' .progress-bar');
    }

    // value from 0 to 1 that represents how full the bar is.
    getPercentageDecimal() {
        return 0.0;
    }

    shouldRender() {
        return true;
    }

    render() {
        if (this.shouldRender()) {
            this.element.show();
            const percent = this.getPercentageDecimal() * 100; //convert to percentage
            const style = percent + '%';
            this.progressElement.css("width", style);
        } else {
            this.element.hide();
        }

    }
}

class HungerBarDisplay extends ProgressBarDisplay {

    constructor(game) {
        super(game, Elements.hungerProgress);
    }

    getPercentageDecimal() {
        return this.module.hungerPercentage();
    }
}
