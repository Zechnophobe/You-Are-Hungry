class Upgrade {
    constructor(game, [name, id, description, costs, requirements, modifiers, icon]) {
        this.game = game;
        this.name = name;
        this.id = id;
        this.description = description;
        this.costs = new ResourceCost(game, costs);
        this.requirements = new Requirement(this.game, requirements);
        this.modifiers = new Modifier(modifiers, 'upgrade-' + this.name);
        this.icon = icon;
        this.purchased = false;
    }

    available() {
        return this.requirements.met() && !this.purchased;
    }

    purchase() {
        if (this.costs.pay()) {
            this.game.gainUpgrade(this);
            this.purchased = true;
            messageLog.log(`Researched Upgrade ${this.name}`);
            return true;
        }
        return false;
    }


}
