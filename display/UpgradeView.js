class UpgradeView {
    constructor(game, element, upgrades) {
        this.game = game;
        this.element = $(element);
        this.upgrades = upgrades;
        this.upgradeElements = {};
        this.init();
    }

    init() {
        /**
         * Initial render that adds the list items to the DOM. We have to iterate over the upgrades list twice - the
         * first time creates a single html string to build (it is inefficient to keep adding html over and over again)
         * the second time caches the elements. You cannot cache a jquery before the element exists on the DOM!
         */
        let html = '';
        const upgradeElementIds = {};
        for (let upgrade of this.upgrades) {
            const upgradeElementId = `upgrade-display-${upgrade.id}`;
            html += this.upgradeTemplate(upgradeElementId, upgrade.name);
            upgradeElementIds[upgrade.id] = `#${upgradeElementId}`;
        }
        this.element.html(html);

        // Now cache the upgrade elements
        for (let upgrade of this.upgrades) {
            this.upgradeElements[upgrade.id] = $(upgradeElementIds[upgrade.id]);
            displayElements.push(new UpgradeButton(game, upgrade, `${upgradeElementIds[upgrade.id]} .btn`));
        }

    }

    render() {
        for (let upgrade of this.upgrades) {
            if (upgrade.purchased) {
                this.upgradeElements[upgrade.id].hide();
            } else {
                if (upgrade.available()) {
                    this.upgradeElements[upgrade.id].show();
                }
            }
        }
    }

    upgradeTemplate(elementId, name) {
        return `<li id ="${elementId}" style="display: none;">
                    <button type="button" class="btn btn-info" data-toggle="tooltip" data-html="true">${name}</button>
                </li>`;
    }
}
