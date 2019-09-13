class Model {
    constructor() {
        this.listeners = {};
    }

    listen(eventName, callback) {
        let events = eventName;
        if (!Array.isArray(events)) {
            events = [eventName];
        }
        for (let event of events) {
            const existingListeners = this.listeners[event] || [];
            existingListeners.push(callback);
            this.listeners[event] = existingListeners;
        }
    }

    notifyListeners(event, value) {
        const callbacks = this.listeners[event] || [];
        for (let callback of callbacks) {
            callback(event, value);
        }
    }

    set(name, value) {
        this[name] = value;
        this.notifyListeners(name, value);
    }

    get(name) {
        return this[name]
    }

    modify(name, value) {
        this[name] = (this[name] || 0) + value;
        this.notifyListeners(name, this[name])
    }
}
