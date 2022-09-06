
export const PLAYER_BASE_STATS = {
	maxHealth: 100,
    maxCapacitor: 0,
    hps: 10, 
    GjPerSecond: this.hps,

	attackSpeed: 0,
    turning_speed: 0,
    accuracy: 0,
    kineticDamage: 0, 
    heatDamage: 0,
    electronicDamage: 0,
    DPH: 0, 

    speed: 0,
    missRate: 0,
    kineticDefense: 0, 
    electronicDefense: 0,
    heatDefence: 0,
}

export const ENEMY_BASE_STATS = {
	maxHealth: 100,
    maxCapacitor: 0,
    hps: 10, 
    GjPerSecond: this.hps,

	attackSpeed: 0,
    turning_speed: 0,
    accuracy: 0,
    kineticDamage: 0, 
    heatDamage: 0,
    electronicDamage: 0,
    DPH: 0, 

    speed: 0,
    missRate: 0,
    kineticDefense: 0, 
    electronicDefense: 0,
    heatDefence: 0,
}

// inilize player stat that require enemy attributes
export function initStat(player, enemy){
    // player and enemy must have all attribute required
    player.accuracy = player.turning_speed/(2*enemy.speed);
    enemy.accuracy = enemy.turning_speed/(2*player.speed);
    player.DPH = (player.kineticDamage - enemy.kineticDefense) + 
                    (player.electronicDamage - enemy.electronicDefense) +
                    (player.heatDamage - enemy.heatDefence); 
    enemy.DPH = (enemy.kineticDamage - player.kineticDefense) + 
                    (enemy.electronicDamage - player.electronicDefense) +
                    (enemy.heatDamage - player.heatDefence); 
    player.missRate = 1 - enemy.accuracy;
    enemy.missRate = 1 - player.accuracy;   
}

// This adds to a, so it should only be used on a fresh object
// todo
export function combineStats(a, b) {
	for (let [statId, value] of Object.entries(b)) {
		if (statId == "attackSpeed" || statId == "damageType") {
			a[statId] = value;
		} else {
			a[statId] += value;
		}
		if (statId == "maxHealth") {
			a[statId] = Math.max(1, a[statId]);
		}
	}

	return a;
}

// The stats, based off of the base stats
export function getBasedStats(stats, mobType) {
	let newStats = Object.assign({}, mobType == "player" ? PLAYER_BASE_STATS : ENEMY_BASE_STATS, stats);
	//fixProtection(newStats);
	return newStats;
}

// not sure what are those
/*
export function calcRobustness(stats, mobType) {
	stats = getBasedStats(stats, mobType);

	let robustness = 0;

	// 3 primary stats
	robustness += stats.precision / 3;
	robustness += stats.power / 3;
	robustness += stats.evasion / 3;
	
	// wtf do I do with these new stats
	robustness += stats.luck / 6
	robustness += stats.regen * 6

	// Health should matter, but only a little, protection got moved into this
	robustness += (stats.maxHealth / 35 *(1 + Math.min(stats.burnProtection, stats.bruteProtection) / 100));

	// Protection is a survivability multiplier
	//robustness *= 1 + Math.min(stats.burnProtection, stats.bruteProtection) / 100;

	return Math.round(robustness);
}

export function getRobustnessCssClass(playerRobustness, targetRobustness) {
	let diff = targetRobustness - playerRobustness;
	if (diff >= 14) return "danger-bubble";
	if (diff >= 7) return "orange-bubble";
	if (diff <= -14) return "secondary-bubble"
	if (diff <= -7) return "success-bubble"
	return "warning-bubble";
}

export function fixProtection(stats) {
	if (stats.protection) {
		if (stats.bruteProtection == undefined)
			stats.bruteProtection = 0;
		stats.bruteProtection += stats.protection;

		if (stats.burnProtection == undefined)
			stats.burnProtection = 0;
		stats.burnProtection += stats.protection;

		delete stats.protection;
	}
	return stats;
}
*/