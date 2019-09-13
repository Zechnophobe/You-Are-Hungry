class View {
    constructor(model, elementId, event) {
        this.model = model;
        this.elementId = elementId;
        this.element = $(this.elementId);
        this.event = event;
        this.bindListener(event);
    }

    bindListener() {
        this.model.listen(this.event, () => {
           this.modelChanged();
        });
    }

    shouldRender() {
        return true;
    }

    render() {
        if (this.shouldRender()) {
            this.element.show();
            this.element.text(this.template());
        } else {
            this.element.hide();
        }
    }

    modelChanged() {
        this.render();
    }

    template() {
        return this.model.get(this.event);
    }
}
