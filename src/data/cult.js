const ACTIONS_CULTBASE = {
	blood1: {
		time: 800,
		actionName: "WORSHIP",
		item: "unholyfavor",
		icon: require("@/assets/art/cult/blood.png"),
		xp: 864,
		requiredLevel: 1,
		requiredItems: { startCult: 1 }
	},
	blood2: {
		time: 10,
		items: {
			id: 'unholyfavor',
			count: 2
		},
		healthCost: 10,
		icon: require("@/assets/art/cult/blood.png"),
		xp: 5,
		requiredLevel: 10,
	},
	blood3: {
		time: 10,
		items: {
			id: 'unholyfavor',
			count: 4
		},
		healthCost: 25,
		icon: require("@/assets/art/cult/blood.png"),
		xp: 12,
		requiredLevel: 20,
	},
	blood4: {
		time: 10,
		items: {
			id: 'unholyfavor',
			count: 6
		},
		healthCost: 40,
		icon: require("@/assets/art/cult/blood.png"),
		xp: 20,
		requiredLevel: 30,
	},
	blood5: {
		time: 10,
		items: {
			id: 'unholyfavor',
			count: 8
		},
		healthCost: 50,
		icon: require("@/assets/art/cult/blood.png"),
		xp: 25,
		requiredLevel: 40,
	},
}

const ACTIONS_NRUNE = {
	runeN1: {
		time: 10,
		item: "runeN1",
		xp: 12,
		requiredLevel: 11,
		requiredItems: { unholyfavor: 1 }
	},
	runeN2: {
		time: 10,
		item: "runeN2",
		xp: 22,
		requiredLevel: 21,
		requiredItems: { unholyfavor: 2 }
	},
	runeN3: {
		time: 10,
		item: "runeN3",
		xp: 32,
		requiredLevel: 31,
		requiredItems: { unholyfavor: 4 }
	},
	runeN4: {
		time: 10,
		item: "runeN4",
		xp: 42,
		requiredLevel: 41,
		requiredItems: { unholyfavor: 8 }
	},
	runeN5: {
		time: 10,
		item: "runeN5",
		xp: 50,
		requiredLevel: 50,
		requiredItems: { unholyfavor: 16 }
	},
}
const ACTIONS_BRUNE = {
	runeB1: {
		time: 10,
		item: "runeB1",
		xp: 12,
		requiredLevel: 12,
		requiredItems: { unholyfavor: 1 }
	},
	runeB2: {
		time: 10,
		item: "runeB2",
		xp: 22,
		requiredLevel: 22,
		requiredItems: { unholyfavor: 2 }
	},
	runeB3: {
		time: 10,
		item: "runeB3",
		xp: 32,
		requiredLevel: 32,
		requiredItems: { unholyfavor: 4 }
	},
	runeB4: {
		time: 10,
		item: "runeB4",
		xp: 42,
		requiredLevel: 42,
		requiredItems: { unholyfavor: 8 }
	},
	runeB5: {
		time: 10,
		item: "runeB5",
		xp: 50,
		requiredLevel: 50,
		requiredItems: { unholyfavor: 16 }
	},
}
const ACTIONS_CULTPANION = {
	sac1: {
		time: 200,
		item: "companionMousecult",
		xp: 390,
		requiredLevel: 13,
		requiredItems: { unholyfavor: 12 , companionMouse: 1 }
	},
	cultblade1: {
		time: 200,
		item: "cultWeapon1",
		xp: 540,
		requiredLevel: 18,
		requiredItems: { unholyfavor: 18, foodMeatH: 10 },
		requiredUpgrade: "cultblade",
		requiredUpgradeTier: 1
	},
	sac2: {
		time: 200,
		item: "companionDogcult",
		xp: 690,
		requiredLevel: 23,
		requiredItems: { unholyfavor: 24 , companionDog: 1 }
	},
	sac3: {
		time: 200,
		item: "companionCatcult",
		xp: 690,
		requiredLevel: 23,
		requiredItems: { unholyfavor: 36 , companionCat: 1 }
	},
	cultblade2: {
		time: 200,
		item: "cultWeapon2",
		xp: 840,
		requiredLevel: 28,
		requiredItems: { unholyfavor: 42 , foodMeatH: 50 },
		requiredUpgrade: "cultblade",
		requiredUpgradeTier: 2
	},
	sac4: {
		time: 200,
		item: "companionFoxcult",
		xp: 990,
		requiredLevel: 33,
		requiredItems: { unholyfavor: 48 , companionFox: 1 }
	},
	sac5: {
		time: 200,
		item: "companionGoatcult",
		xp: 1290,
		requiredLevel: 43,
		requiredItems: { unholyfavor: 56, companionGoat: 1  }
	},
	cultblade3: {
		time: 200,
		item: "cultBlade",
		xp: 1395,
		requiredLevel: 46,
		requiredItems: { unholyfavor: 60 , meleeBlunt3: 1, foodMeatH: 100 },
		requiredUpgrade: "cultblade",
		requiredUpgradeTier: 3
	},
	sac6: {
		time: 200,
		item: "companionBeecult",
		xp: 1500,
		requiredLevel: 50,
		requiredItems: { unholyfavor: 64, companionBee: 1  }
	},
}

Object.values(ACTIONS_CULTBASE).forEach(action => action.type = "RITUALS");
Object.values(ACTIONS_BRUNE).forEach(action => action.type = "MATERIAL RUNES");
Object.values(ACTIONS_NRUNE).forEach(action => action.type = "BLOOD RUNES");
Object.values(ACTIONS_CULTPANION).forEach(action => action.type = "SACRIFICES");

export const ACTIONS = {
	...ACTIONS_CULTBASE,
	...ACTIONS_BRUNE,
	...ACTIONS_NRUNE,
	...ACTIONS_CULTPANION,
}

export const JOB = {
	id: "cult",
	name: "Cult",
	icon: require("@/assets/art/cult/Sacrifice_rune.png"),
	color: "#220000",
	noJobBlitz: true
}