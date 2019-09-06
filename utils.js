function payCosts(costs) {

    let canDoAction = true;
    for (let cost of costs) {
			canDoAction &= cost.canBePayed();
		}
		if (canDoAction) {
			for (let cost of costs) {
				canDoAction &= cost.pay();
			}
			return true;
		}
		return false;
}
