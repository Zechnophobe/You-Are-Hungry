class DisplayElement {
    constructor(module) {
        this.setMeUp();
        this.module = module;
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
        this.element.text('You are ' + this.module.tier);
    }
}

class CounterDisplay extends DisplayElement {
    setMeUp() {
        this.elementId = '';
        this.counterName = '';
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

class FoodDisplay extends CounterDisplay {
    setMeUp() {
        this.elementId = Elements.foodDisplay;
        this.counterName = 'Food';
    }

    counterValue() {
        return this.module.food;
    }


}


class ChopWoodDisplay extends CounterDisplay {
    setMeUp() {
        this.elementId = Elements.chopWoodDisplay;
        this.counterName = 'Wood';
    }

    counterValue() {
        return this.module.wood;
    }

}


class HutsDisplay extends CounterDisplay {
    setMeUp() {
        this.elementId = Elements.hutsDisplay;
        this.counterName = 'Hut';
    }

    counterValue() {
        return this.module.huts;
    }

}

class ProgressBarDisplay extends DisplayElement {
    constructor(module) {
        super(module);
        this.progressElement = $(this.elementId + ' .progress-bar');
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

    setMeUp() {
        this.elementId = Elements.hungerProgress;
    }

    getPercentageDecimal() {
        return this.module.hungerPercentage();
    }
}
