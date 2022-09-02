import { _ } from "core-js";

const SLIMES = {
	slimeGray: {
		name: "Gray Slime",
		sellPrice: 3,
		icon: require("@/assets/art/xenobio/SlimeGrey.gif"),
		tier: 1,
		stats: {
			regen: .5
		}
	},
	slimeOrange: {
		name: "Orange Slime",
		sellPrice: 8,
		icon: require("@/assets/art/xenobio/SlimeOrange.gif"),
		tier: 2
	},
	slimePurple: {
		name: "Purple Slime",
		sellPrice: 8,
		icon: require("@/assets/art/xenobio/SlimePurple.gif"),
		tier: 2
	},
	slimeBlue: {
		name: "Blue Slime",
		sellPrice: 8,
		icon: require("@/assets/art/xenobio/SlimeBlue.gif"),
		tier: 2
	},
	slimeMetal: {
		name: "Metal Slime",
		sellPrice: 8,
		icon: require("@/assets/art/xenobio/SlimeMetal.gif"),
		tier: 2
	},
	slimeYellow: {
		name: "Yellow Slime",
		sellPrice: 20,
		icon: require("@/assets/art/xenobio/SlimeYellow.gif"),
		tier: 3
	},
	slimeDarkPurple: {
		name: "Dark Purple Slime",
		sellPrice: 20,
		icon: require("@/assets/art/xenobio/SlimeDarkPurple.gif"),
		tier: 3
	},
	slimeDarkBlue: {
		name: "Dark Blue Slime",
		sellPrice: 20,
		icon: require("@/assets/art/xenobio/SlimeDarkBlue.gif"),
		tier: 3
	},
	slimeSilver: {
		name: "Silver Slime",
		sellPrice: 20,
		icon: require("@/assets/art/xenobio/SlimeSilver.gif"),
		tier: 3
	},
	slimeBluespace: {
		name: "Bluespace Slime",
		sellPrice: 45,
		icon: require("@/assets/art/xenobio/SlimeBluespace.gif"),
		tier: 4
	},
	slimeSepia: {
		name: "Sepia Slime",
		sellPrice: 45,
		icon: require("@/assets/art/xenobio/SlimeSepia.gif"),
		tier: 4
	},
	slimeCerulean: {
		name: "Cerulean Slime",
		sellPrice: 45,
		icon: require("@/assets/art/xenobio/SlimeCerulean.gif"),
		tier: 4
	},
	slimePyrite: {
		name: "Pyrite Slime",
		sellPrice: 45,
		icon: require("@/assets/art/xenobio/SlimePyrite.gif"),
		tier: 4
	},
	slimeRed: {
		name: "Red Slime",
		sellPrice: 100,
		icon: require("@/assets/art/xenobio/SlimeRed.gif"),
		tier: 5
	},
	slimeGreen: {
		name: "Green Slime",
		sellPrice: 100,
		icon: require("@/assets/art/xenobio/SlimeGreen.gif"),
		tier: 5
	},
	slimePink: {
		name: "Pink Slime",
		sellPrice: 100,
		icon: require("@/assets/art/xenobio/SlimePink.gif"),
		tier: 5
	},
	slimeGold: {
		name: "Gold Slime",
		sellPrice: 100,
		icon: require("@/assets/art/xenobio/SlimeGold.gif"),
		tier: 5
	},
	slimeOil: {
		name: "Oil Slime",
		sellPrice: 250,
		icon: require("@/assets/art/xenobio/SlimeOil.gif"),
		tier: 6
	},
	slimeBlack: {
		name: "Black Slime",
		sellPrice: 250,
		icon: require("@/assets/art/xenobio/SlimeBlack.gif"),
		tier: 6
	},
	slimeLightPink: {
		name: "Light Pink Slime",
		sellPrice: 250,
		icon: require("@/assets/art/xenobio/SlimeLightPink.gif"),
		tier: 6
	},
	slimeAddy: {
		name: "Adamantite Slime",
		sellPrice: 250,
		icon: require("@/assets/art/xenobio/SlimeAddy.gif"),
		tier: 6
	},
	slimeRainbow: {
		name: "Rainbow Slime",
		sellPrice: 2000,
		icon: require("@/assets/art/xenobio/SlimeRainbow.gif"),
		tier: 7,
		stats: {
			precision: 10,
			power: 10,
			protection: 10,
			evasion: 10,
			maxHealth: 100,
			luck: 20
		}
	},
}

const COMPANIONS = {
	companionMouse: {
		name: "Pet Mouse",
		sellPrice: 1000,
		icon: require("@/assets/art/combat/enemies/mouse.png"),
		tier: 0,
		stats: {
			evasion: 5,
			maxHealth: 0
		}
	},
	companionDog: {
		name: "Pet Corgi",
		sellPrice: 1000,
		icon: require("@/assets/art/combat/enemies/Ian.png"),
		tier: 0,
		stats: {
			bruteProtection: 7,
			maxHealth: 0
		}
	},
	companionCat: {
		name: "Pet Cat",
		sellPrice: 1000,
		icon: require("@/assets/art/combat/enemies/runtime.png"),
		tier: 0,
		stats: {
			burnProtection: 7,
			maxHealth: 0
		}
	},
	companionFox: {
		name: "Pet Fox",
		sellPrice: 1000,
		icon: require("@/assets/art/combat/enemies/renault.png"),
		tier: 0,
		stats: {
			precision: 5,
			maxHealth: 0
		}
	},
	companionGoat: {
		name: "Pet Goat",
		sellPrice: 1000,
		icon: require("@/assets/art/combat/enemies/pete.png"),
		tier: 0,
		stats: {
			power: 5,
			maxHealth: 0
		}
	},
	companionBee: {
		name: "Pet Bee",
		sellPrice: 1000,
		icon: require("@/assets/art/combat/enemies/bee_anim.gif"),
		tier: 0,
		stats: {
			protection: 1,
			precision: 1,
			evasion: 1,
			power: 1,
			maxHealth: 0
		}
	},
	
	companionMining: {
		name: "Mine Bot",
		sellPrice: 300,
		icon: require("@/assets/art/xenobio/CompanionMining.png"),
		tier: 0,
		stats: {
			protection: 5,
			maxHealth: 0
		}
	},
	companionKillerTomato: {
		name: "Killer Tomato",
		sellPrice: 83,
		icon: require("@/assets/art/botany/PlantTomatokiller.png"),
		tier: 11,
		stats: {
			maxHealth: -90,
			evasion: 5,
			precision: 5,
			power: 5,
		},
	},
	companionParasite: {
		name: "Holoparasite",
		sellPrice: 10000,
		icon: require("@/assets/art/combat/enemies/boss/wiz-stand_anim.gif"),
		tier: 0,
		description: "Is your fighting spirit strong enough?",
		stats: {
			precision: 15,
			power: 15,
			protection: 15,
			evasion: 15,
			maxHealth: -1000
		}
	},
	companionLava: {
		name: "Dwarf Legion",
		sellPrice: 83,
		icon: require("@/assets/art/xenobio/CompanionLava.png"),
		tier: 4.5,
		stats: {
			maxHealth: 100,
			evasion: 8,
			precision: -1,
			power: 3,
		},
	},
	companionSkub: {
		name: "Skub",
		sellPrice: 0,
		icon: require("@/assets/art/shitposting/skub.png"),
		tier: 0,
		description: "Are you pro-skub or anti-skub?",
		nocomplete: true,
		stats: {
			maxHealth: 0,
			evasion: 0,
			precision: 0,
			power: 0,
			protection: 0,
			luck: 0,
			regen: 0,
		},
	},
	companionPai: {
		name: "Personal AI",
		sellPrice: 1500,
		icon: require("@/assets/art/combat/items/CompanionPai.png"),
		tier: 2,
		stats: {
			maxHealth: 20,
			precision: 2,
			evasion: 2,
			power: 2,
		}
	},
	companionAicard: {
		name: "Carded AI",
		sellPrice: 2500,
		icon: require("@/assets/art/combat/items/aicard_anim.gif"),
		tier: 5,
		stats: {
			maxHealth: 0,
			protection: -5,
			precision: 20,
			evasion: -5,
		}
	},
	companionPositronic: {
		name: "Elusive Positronic Upgrade",
		restrictions: ["mech"],
		sellPrice: 5757,
		icon: require("@/assets/art/combat/items/positronic_anim.gif"),
		tier: 1,
		stats: {
			maxHealth: 0,
			protection: 0,
			precision: 0,
			evasion: 25,
		}
	},
	companionBoH: {
		name: "Bag of Holding",
		description: "WARNING: DO NOT PLACE INTO ANOTHER BAG OF HOLDING.",
		sellPrice: 150,
		icon: require("@/assets/art/combat/items/boh.gif"),
		tier: 0,
		forceFleeChance: true,
		fleeChance: 0,
		stats: {
			regen: -0.2,
			luck: -5,
			precision: 1,
			evasion: 1,
			power: 1,
			moveTime: -3
		}
	},
	companionMousecult: {
		name: "Proteon",
		sellPrice: 1000,
		icon: require("@/assets/art/cult/proteon_anim.gif"),
		tier: 1,
		stats: {
			evasion: 25,
			regen: -1
		}
	},
	companionDogcult: {
		name: "Narsian",
		sellPrice: 1000,
		icon: require("@/assets/art/cult/narsian.png"),
		tier: 1,
		stats: {
			bruteProtection: 28,
			regen: -1
		}
	},
	companionCatcult: {
		name: "Wraith",
		sellPrice: 1000,
		icon: require("@/assets/art/cult/floating_anim.gif"),
		tier: 1,
		stats: {
			burnProtection: 28,
			regen: -1
		}
	},
	companionFoxcult: {
		name: "Artificer",
		sellPrice: 1000,
		icon: require("@/assets/art/cult/artificer_anim.gif"),
		tier: 1,
		stats: {
			precision: 25,
			regen: -1
		} 
	},
	companionGoatcult: {
		name: "Behemoth",
		sellPrice: 1000,
		icon: require("@/assets/art/cult/behemoth_anim.gif"),
		tier: 1,
		stats: {
			power: 25,
			regen: -1
		}
	},
	companionBeecult: {
		name: "Harvester",
		sellPrice: 1000,
		icon: require("@/assets/art/cult/harvester_anim.gif"),
		tier: 1,
		stats: {
			protection: 5,
			precision: 5,
			evasion: 5,
			power: 5,
			regen: -1
		}
	},
}
Object.values(SLIMES).forEach((slime, index) => {
	slime.equipmentSlot = "companion";
	slime.fleeChance = 10 + slime.tier * 10;

	// Some slimes have custom stats set
	if (slime.stats) return;

	let mod = (index - 1) % 8;

	if (mod == 0) {
		slime.stats = {
			regen: (slime.tier) * 1.5 / 10,
			burnProtection: (slime.tier - 1) * 4
		}
	}
	else if (mod == 1) {
		slime.stats = {
			regen: (slime.tier) * 1.5 / 10,
			moveTime: -1,
		}
	}
	else if (mod == 2) {
		slime.stats = {
			regen: (slime.tier) * 2 / 10,
			moveTime: 3,
		}
	}
	else if (mod == 3) {
		slime.stats = {
			regen: (slime.tier) * 1.5 / 10,
			bruteProtection: (slime.tier - 1) * 4
		}
	}
	else if (mod == 4) {
		slime.description = "Changes your weapon's damage type"
		slime.stats = {
			regen: (slime.tier) * 1.5 / 10,
			luck: (slime.tier) * 4,
			damageType: "burn"
		}
	}
	else if (mod == 5) {
		slime.description = "Changes your weapon's attack speed"
		slime.stats = {
			regen: (slime.tier) * 1.5 / 10,
			luck: (slime.tier) * 4,
			attackSpeed: 2 - (slime.tier / 5)
		}
	}
	else if (mod == 6) {
		slime.description = "Changes your weapon's attack speed"
		slime.stats = {
			regen: (slime.tier) * 1.5 / 10,
			luck: (slime.tier) * 4,
			attackSpeed: 3 + (slime.tier / 5)
		}
	}
	else if (mod == 7) {
		slime.description = "Changes your weapon's damage type"
		slime.stats = {
			regen: (slime.tier) * 1.5 / 10,
			luck: (slime.tier) * 4,
			damageType: "brute"
		}
	}

});

Object.values(COMPANIONS).forEach((companion) => {
	companion.noCore = true; // Prevents companion pets from having a slime core generated for them, see resourceXenobiology.js
	companion.equipmentSlot = "companion";
	if(!companion.forceFleeChance) companion.fleeChance = 10 + companion.tier * 10;
});

export default {
	...SLIMES,
	...COMPANIONS,
}