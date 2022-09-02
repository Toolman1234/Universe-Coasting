export default {
	securitybot: {
		name: "Security Bot",
		desc: "Criminal detected.",
		icon: require("@/assets/art/combat/enemies/secbot.png"),
		stats: {
			maxHealth: 380,
			attackSpeed: 2.1,
			precision: 84,
			power: 80,
			evasion: 72,
			damageType: "brute",
			bruteProtection: 50
		},
		itemTables: [
			{
				chance: .99,
				itemTable: [
					{
						id: 'titanium',
						weight: 40
					},
					{
						id: 'meleeSharp1',
						weight: 37
					},
					{
						id: 'criminal',
						weight: 13
					},
					{
						id: 'criminal',
						count: [1, 2],
						weight: 12
					},
					{
						id: 'criminal',
						count: [1, 3],
						weight: 11
					},
					{
						id: 'criminal',
						count: [1, 4],
						weight: 10
					},

					{
						id: 'criminal',
						count: [1, 99],
						weight: 9
					},
				]
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'diamond',
						weight: 14
					},
					{
						id: 'armorJunk',
						weight: 5
					},
					{
						id: 'bluespace',
						weight: 1
					}
				]
			}
		]
	},
	drone: {
		name: "Unsynced Maintenance Drone",
		desc: "Free drone!",
		verb: "exclaims",
		icon: require("@/assets/art/combat/enemies/drone.png"),
		stats: {
			maxHealth: 370,
			attackSpeed: 2.1,
			precision: 83,
			power: 61,
			evasion: 118,
			damageType: "brute",
			bruteProtection: 20,
			burnProtection: -20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'criminal',
						weight: 8
					},
					{
						id: 'drinkAtomicBomb',
						weight: 6
					},
					{
						id: 'titanium',
						weight: 4
					},
					{
						id: 'gunEnergy5',
						weight: 2
					},
					{
						id: 'slimeGold',
						weight: 1
					},
				]
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'spaceJunk',
						weight: 14
					},
					{
						id: 'armorJunk',
						weight: 5
					},
					{
						id: 'junk',
						weight: 1
					}
				]
			}
		]
	},
	turrets: {
		name: "Defense Turret",
		icon: require("@/assets/art/combat/enemies/turret.png"),
		stats: {
			maxHealth: 390,
			attackSpeed: 1,
			precision: 103,
			power: 93,
			evasion: 52,
			damageType: "burn",
			bruteProtection: 50
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'ammoEnergy4',
						count: [1, 3],
						weight: 9
					},
					{
						id: 'ammoEnergy3',
						count: [1, 3],
						weight: 8
					},
					{
						id: 'ammoEnergy2',
						count: [1, 3],
						weight: 7
					},
					{
						id: 'ammoEnergy1',
						count: [4, 8],
						weight: 6
					},
					{
						id: 'ammoEnergy4',
						count: [8, 12],
						weight: 2
					},
				]
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'plasma',
						weight: 14
					},
					{
						id: 'junk',
						weight: 5
					},
					{
						id: 'uranium',
						weight: 1
					}
				]
			}
		]
	},
	AI: {
		name: "AI",
		desc: "Everybody get up, it's time to slam now...",
		verb: "sings",
		icon: require("@/assets/art/combat/enemies/ai_anim.gif"),
		stats: {
			maxHealth: 1337,
			attackSpeed: 1.9,
			precision: 94,
			power: 74,
			evasion: 10,
			damageType: "burn",
			burnProtection: 50,
			bruteProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'glass',
						count: [1,7],
						weight: 80
					},
					{
						id: 'gold',
						count: [1,3],
						weight: 32
					},
					{
						id: 'power',
						count: [50,250],
						weight: 28
					},
					{
						id: 'potionShitposting',
						weight: 4
					},
					{
						id: 'boss1Parts',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'mechPlating4',
						weight: 14
					},
					{
						id: 'spaceJunk',
						weight: 5
					},
				]
			}
		]
	},
}