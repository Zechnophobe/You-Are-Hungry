class ButtonDisplay extends DisplayView {

    generateElementId(display) {
        return `button-display-${display.resource.id}`;
    }

    generateElement(display) {
        return new ResourceButton(this.game, display.name, `#${this.generateElementId(display)}`, makeCost(this.game, display.costs), display.resource.id, display.amount, new Requirement(this.game, display.requirement));
    }

    template(elementId) {
        return `<button id="${elementId}" type="button" class="btn" style='display: none;' data-toggle="tooltip"
            data-html="true"></button>`;
    }
}
