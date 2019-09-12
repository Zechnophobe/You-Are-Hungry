class DisplayView {
    constructor(game, element, displays) {
        this.game = game;
        this.element = $(element);
        this.displays = displays;
        this.subDisplays = [];
        this.init();
    }

    generateHtml() {
        let html = '';
        for (let display of this.displays) {
            const displayElementId = this.generateElementId(display);
            html += this.template(displayElementId);
        }
        this.element.html(html);
    }

    init() {
        /**
         * Initial render that adds the list items to the DOM.
         */
        this.generateHtml();

        // Now create the per resource displays
        for (let display of this.displays) {
            this.subDisplays.push(this.generateElement(display));
        }

    }

    generateElement(display) {
        return new View(this.game, `#${this.generateElementId(display)}`, display);
    }

    generateElementId(display) {
        return  `display-${display.id}`;
    }

    render() {
        for (let subDisplay of this.subDisplays) {
            subDisplay.render();
        }
    }

    template(elementId) {
        return `<div id='${elementId}' style='display: none;'></div>`;
    }
}
