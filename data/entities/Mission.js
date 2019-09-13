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
    constructor(game, name, description, friendMatrix, length) {
        this.game = game;
        this.name = name;
        this.description = description;
        this.friendMatrix = friendMatrix;
        this.length = length;
    }
}


class ActiveMission {
    /**
     * Represents an instance of a mission that the friends are on.
     */

    power() {
        //TODO iterates of friend list and friend matrix to derive total power of mission
    }
}