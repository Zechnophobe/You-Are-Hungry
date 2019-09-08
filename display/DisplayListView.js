class DisplayView {
    constructor(game, element, displays) {
        this.game = game;
        this.element = $(element);
        this.displays = displays;
        this.subDisplays = [];
        this.init();
    }

    init() {
        /**
         * Initial render that adds the list items to the DOM.
         */
        let html = '';
        for (let display of this.displays) {
            const displayElementId = this.generateElementId(display);
            html += this.template(displayElementId);
        }
        this.element.html(html);

        // Now create the per resource displays
        for (let display of this.displays) {
            this.subDisplays.push(new ResourceCounter(this.game, `#${this.generateElementId(display)}`, display));
        }

    }

    generateElementId(display) {
        return  `display-${display.id}`;
    }

    render() {
        for (let display of this.subDisplays) {
            display.render();
        }
    }

    template(elementId) {
        return `<li id='${elementId}' style='display: none;'></li>`;
    }
}
