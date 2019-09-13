class CompletedUpgradeView extends DisplayView {

    generateElement(display) {
        return new UpgradeButton(this.game, display, `#${this.generateElementId(display)}`);
    }

    generateElementId(display) {
        return  `upgrade-display-${display.id}`;
    }

    template(elementId) {
        return `<li id ="${elementId}" style="display: none;">
                </li>`;
    }
}
