class UpgradeView extends DisplayView {

    generateElement(display) {
        return new UpgradeButton(this.game, display, `#${this.generateElementId(display)}`);
    }

    generateElementId(display) {
        return  `upgrade-display-${display.id}`;
    }

    template(elementId) {
        return `<li id ="${elementId}" style="display: none;">
                    <button type="button" class="btn btn-info" data-toggle="tooltip" data-html="true"></button>
                </li>`;
    }
}
