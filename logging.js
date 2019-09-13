class MessageLog {
    constructor(elementId, maxLength=10) {
        this.elementId = elementId;
        this.element = $(this.elementId);
        this.maxLength = maxLength;
        this.messages = new Array(this.maxLength).fill({});
        this.messageElements = new Array(this.maxLength);
        this.init();
    }

    init() {
        let html = '';
        for (let i = 0; i < this.messages.length; i++) {
            const displayElementId = this.generateElementId(i);
            html += this.template(displayElementId);
        }
        this.element.html(html);
        for (let i = 0; i < this.messages.length; i++) {
            this.messageElements[i] = $(`#${this.generateElementId(i)}`);
        }
        this.render();
    }

    generateElementId(index) {
        return `message-${index}`;
    }

    log(message, model, icon) {
        const messageObject = new Message(message, model, icon);
        this.messages.push(messageObject);
        while (this.messages.length > this.maxLength) {
            this.messages.shift();
        }
        this.render();
    }

    render() {
        for (let i = 0; i < this.messages.length; i++) {
            let message = this.messages[i].message;
            let element = this.messageElements[i];
            element.text(message);
        }
    }

    template(elementId) {
        return `<div id='${elementId}' class="log-message"></div>`;
    }
}

class Message {
    constructor(message, model, icon) {
        this.message = message;
        this.model = model;
        this.icon = icon;
    }
}
