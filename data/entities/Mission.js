class Mission {
    /**
     * A mission is a thing you send friends on.
     * They take a certain number of game ticks
     * And have an outcome.
     * The effect that a friend has on the outcome of the mission depends on the friend type.
     * Since we will have friends still occupying huts while away (can't sell their space while they are busy) we
     * will need to be able to account for a friend no matter their location.
     */
    // Represents a type of mission a friend can go on.
    constructor(game, name, description, friendMatrix, length, callback, basePower=0) {
        this.game = game;
        this.name = name;
        this.description = description;
        this.friendMatrix = friendMatrix;
        this.length = length;
        this.callback = callback;
        this.basePower = basePower
        // Requirements? costs?
    }
}


class ActiveMission {
    /**
     * Represents an instance of a mission that the friends are on.
     */
    constructor(game, mission, assignment) {
        this.game = game;
        this.mission = mission;
        this.assignment = assignment;
        this.progress = 0;
    }

    power() {
        let totalPower = this.mission.basePower;
        for (let [friend, count] of this.assignment) {
            totalPower += this.mission.friendMatrix[friend] * count;
        }
        return totalPower;
    }

    tick() {
        /**
         * Return true if the mission is completed, otherwise false
         * @type {number}
         */
        this.progress += 1;
        if (this.progress >= this.mission.length) {
            this.complete();
            return true;
        }
        return false;
    }

    complete() {
        this.mission.callback(this.power, this.assignment);
    }
}
