export default {
	bee: {
		name: "Bee",
		desc: "Bzzzz...",
		verb: "buzzes",
		icon: require("@/assets/art/combat/enemies/bee_anim.gif"),
		stats: {
			maxHealth: 50,
			attackSpeed: .5,
			precision: 25,
			power: 10,
			evasion: 76,
			damageType: "brute",
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "oxygen",
				}
			},
			{
				chance: 1,
				itemTable: [
					{
						id: "foodMeatA",
						weight: 3
					},
					{
						id: "companionBee",
						weight: 1
					},
				]
			}
		]
	},
	mime: {
		name: ".....",
		desc: "...",
		verb: "points a finger gun at you and says",
		icon: require("@/assets/art/combat/enemies/mime.png"),
		stats: {
			maxHealth: 160,
			attackSpeed: 2.0,
			precision: 34,
			power: 45,
			evasion: 25,
			damageType: "brute",
			bruteProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'bananaMime',
						count: [4,20],
						weight: 8
					},
					{
						id: 'spaceJunk',
						weight: 6
					},
					{
						id: 'drinkSilencer',
						weight: 6
					},
					{
						id: 'foodHuman2',
						weight: 4
					},
					{
						id: 'faceMime',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatH"
			}
		]
	},
	badclown: {
		name: "Shoeless Clown",
		desc: "Banana peels primed. Let's hunt some valids.",
		icon: require("@/assets/art/combat/enemies/badclown.png"),
		stats: {
			maxHealth: 170,
			attackSpeed: 2.1,
			precision: 37,
			power: 44,
			evasion: 40,
			damageType: "brute",
			bruteProtection: 20
		},
		itemTables: [
			{
				chance: 0.1,
				itemTable: [
					{
						id: 'banana',
						weight: 49
					},
					{
						id: 'honk',
						weight: 1
					},
				]
			},
			{
				chance: 1,
				item: "foodMeatZ"
			}
		]
	},
	goodclown: {
		name: "Actually Funny Clown",
		desc: "A man walks into a bar. CLANG!",//immovable rod joke
		verb: "exclaims",
		icon: require("@/assets/art/combat/enemies/goodclown.png"),
		stats: {
			maxHealth: 180,
			attackSpeed: 2.4,
			precision: 57,
			power: 40,
			evasion: 26,
			damageType: "burn",
			bruteProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'banana',
						weight: 38
					},
					{
						id: 'innocent',
						weight: 22
					},
					{
						id: 'bananium',
						weight: 20
					},
					{
						id: 'faceClown',
						weight: 15
					},
					{
						id: 'meleeBlunt4',
						weight: 5
					}
				]
			},
			{
				chance: 1,
				item: "foodMeatH"
			}
		]
	},
}