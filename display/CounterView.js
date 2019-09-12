class CounterView extends DisplayView {

    generateElement(display) {
        return new CounterDisplay(this.game, `#${this.generateElementId(display)}`, display.id);
    }

    generateElementId(display) {
        return  `counter-${display.id}`;
    }

    template(elementId) {
        return `<li id='${elementId}' style='display: none;'></li>`;
    }

    render() {
        // Do nothing outside initial render
    }
}
