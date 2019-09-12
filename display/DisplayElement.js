class GameTierDisplay extends View {

    template() {
        return `You are ${this.model.get(this.event)}`;
    }
}

class CounterDisplay extends View {

    constructor(model, elementId, event) {
        super(model, elementId, event);
        this.on = false;
    }

    shouldRender() {
        const result = this.on || this.model.get(this.event) > 0;
        this.on = result;
        return result;
    }

    template() {
        return `${this.event}: ${this.model.get(this.event).toFixed(2)}`;
    }
}

class ProgressBarDisplay extends View {
    constructor(model, elementId, current, max) {
        super(model, elementId, [current, max]);
        this.progressElement = $(`${this.elementId} .progress-bar`);
        this.current = current;
        this.max = max;
    }

    // value from 0 to 1 that represents how full the bar is.
    getPercentageDecimal() {
        return this.model.get(this.current) / this.model.get(this.max);
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

    getPercentageDecimal() {
        return this.model.hungerPercentage();
    }
}
