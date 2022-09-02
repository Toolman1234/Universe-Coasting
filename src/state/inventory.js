import Vue from 'vue'
import { EventBus } from "@/utils/eventBus.js";
import ModalDeath from "@/components/Modals/ModalDeath";
import ITEMS from "@/data/items";
import ZONES from "@/data/zones";

import { getEquipmentSlot, getEquipmentStackable } from '@/utils/equipmentUtils';
import { acquireItemFrom } from "@/utils/itemChanceUtils";
import { BASE_INVENTORY_SIZE } from '@/data/upgrades'
import { without } from "lodash";

const inventory = {
	namespaced: true,
	state: {
		bank: {
			"money": 100
		},
		equipment: {
			// Order here matters, later items will be displayed on top
			// The last item on this list takes top priority for binary values like damage type/attack speed
			food: {
				itemId: null,
				count: 0
			},
			jumpsuit: {
				itemId: null,
				count: 0
			},
			chest: {
				itemId: null,
				count: 0
			},
			neck: {
				itemId: null,
				count: 0
			},
			face: {
				itemId: null,
				count: 0
			},
			head: {
				itemId: null,
				count: 0
			},
			limb: {
				itemId: null,
				count: 0
			},
			hand: {
				itemId: null,
				count: 0
			},
			pocket: {
				itemId: null,
				count: 0
			},
			companion: {
				itemId: null,
				count: 0
			}
		}
	},
	getters: {
		bank(state) {
			return state.bank;
		},
		bankSlots(state, getters, rootState, rootGetters) {
			return BASE_INVENTORY_SIZE + rootGetters["upgrades/get"]("inventorySize");
		},
		bankItemIds(state) {
			return Object.keys(state.bank).filter(
				itemId => itemId != "money"
			);
		},
		money(state) {
			return state.bank.money
		},
		equipment(state) {
			return state.equipment;
		},
		canEquip(state, getters, rootState, rootGetters) {
			return (itemId) => {
				let item = ITEMS[itemId];
				let slot = getEquipmentSlot(itemId);
				if (!slot) return false;
				if (!item.requires) return true;
				for (let [jobId, requiredLevel] of Object.entries(item.requires)) {
					let jobLevel = rootGetters[jobId + "/level"];
					if (jobLevel < requiredLevel) return false;
				}
				if (state.equipment[slot].itemId == itemId) return false;
				return true;
			};
		},
		isEquipped(state, getters, rootState, rootGetters) {
			return (itemId) => {
				let slot = getEquipmentSlot(itemId);
				if (!slot) return false;
				return state.equipment[slot].itemId == itemId;
			};
		},
		hasItem(state, getters) {
			return (itemId) => {
				// Check equipped
				if (getters["isEquipped"](itemId)) return true;
				// Check bank
				if (state.bank[itemId]) return true;
				return false
			}
		},
		checkRestricted(state, getters) {
			return (itemId) => {
				if (!itemId) return false;
				let item = ITEMS[itemId];
				if (item.restrictions) {
					for (let restriction of item.restrictions) {
						if (!getters.liftedRestrictions.includes(restriction)) return true;
					}
				}
				if (item.ammoType) {
					let equipmentSlot = getEquipmentSlot(itemId);
					let inverseSlot = equipmentSlot == "hand" ? "pocket" : "hand";
					let inverseItemId = state.equipment[inverseSlot].itemId;
					if (!inverseItemId) return true;
					let inverseItem = ITEMS[inverseItemId];
					if (item.ammoType != inverseItem.ammoType) return true;
					if (equipmentSlot == "pocket" && getters["checkRestricted"](inverseItemId)) return true;
				}
				return false;
			};
		},
		liftedRestrictions(state) {
			let lifted = [];
			for (let [equipmentSlot, equipment] of Object.entries(state.equipment)) {
				if (!equipment.itemId) continue;
				let item = ITEMS[equipment.itemId];
				if (!item.liftsRestrictions) continue;
				lifted = lifted.concat(item.liftsRestrictions);
			}
			return lifted;
		},
		shouldShowPurchase(state, getters, rootState, rootGetters) {
			return (purchase) => {
				if (purchase.hideIfXP) {
					if (rootGetters[`${purchase.hideIfXP}/xp`]) return false;
				}
				if (purchase.requiredUpgrades) {
					for (let [upgradeId, count] of Object.entries(purchase.requiredUpgrades)) {
						if (rootGetters["upgrades/getNoEquipment"](upgradeId) != count) return false;
					}
				}
				return true;
			}
		},
		canPurchase(state, getters, rootState, rootGetters) {
			return (purchase) => {
				if (purchase.requiredItems) {
					for (let [itemId, count] of Object.entries(purchase.requiredItems)) {
						if (!state.bank[itemId] || state.bank[itemId] < count) return false;
					}
				}
				if (purchase.requiredLevels) {
					for (let [jobId, level] of Object.entries(purchase.requiredLevels)) {
						if (rootGetters[jobId + "/level"] < level) return false;
					}
				}
				if (purchase.requiredUpgrades) {
					for (let [upgradeId, count] of Object.entries(purchase.requiredUpgrades)) {
						if (rootGetters["upgrades/getNoEquipment"](upgradeId) != count) return false;
					}
				}
				if(purchase.requiredResearchPoints) {
					if(rootGetters["research/rndPoints"] < purchase.requiredResearchPoints) return false;
				}
				return true;
			}
		},
		canUnequip(state, getters) {
			return (itemId) => {
				if (!itemId) return false;
				if (state.bank[itemId]) return true;

				if (getters.bankFull) return false;

				return true;
			}
		},
		bankFull(state, getters) {
			return getters.bankItemIds.length >= getters.bankSlots;
		}
	},
	mutations: {
		changeItemCount(state, { itemId, count }) {
			let item = ITEMS[itemId];

			// Check if we can just stack this with what's equipped
			let equipmentSlot = getEquipmentSlot(itemId);
			if (getEquipmentStackable(itemId) && state.equipment[equipmentSlot].itemId == itemId) {
				state.equipment[equipmentSlot].count += count;
				if (state.equipment[equipmentSlot].count <= 0) {
					state.equipment[equipmentSlot].count = 0;
					state.equipment[equipmentSlot].itemId = null;
				}
			}

			else if (!state.bank[itemId]) { // Not in the bank

				// Is using this.getters here supported?
				// Hell no, but I've used this as a mutation for too long to go and update it to an action now
				if (this.getters["inventory/bankItemIds"].length >= this.getters["inventory/bankSlots"]) { // No space
					EventBus.$emit("toast", { icon: require('@/assets/art/sidebar/backpack.png'), text: "Your inventory is full!", duration: 4000 });
					return;
				}

				Vue.set(state.bank, itemId, count)
			} else if (state.bank[itemId] + count == 0) {
				Vue.delete(state.bank, itemId);
			} else {
				state.bank[itemId] += count;
			}
			this.commit("completion/trackItem", { itemId, count })
			if (count > 0) {
				EventBus.$emit("toast", { icon: item.icon, text: "+" + count });
			}
		},
		loseEquipment(state, { slot }) {
			state.equipment[slot].itemId = null;
			state.equipment[slot].count = 0;
		},
		moveEquipmentToBank(state, { slot }) {
			if (!state.bank[state.equipment[slot].itemId]) {
				Vue.set(state.bank, state.equipment[slot].itemId, state.equipment[slot].count);
			} else {
				state.bank[state.equipment[slot].itemId] += state.equipment[slot].count;
			}
			state.equipment[slot].itemId = null;
			state.equipment[slot].count = 0;
		},
		moveBankToEquipment(state, { slot, itemId, count }) {
			state.equipment[slot].itemId = itemId;
			state.equipment[slot].count = count;
			state.bank[itemId] -= count;
			if (state.bank[itemId] == 0) {
				Vue.delete(state.bank, itemId);
			}
		},
		quickSort(state) {
			let allSortedKeys = Object.keys(ITEMS);
			let newBank = {};
			allSortedKeys.forEach(itemId => {
				let val = state.bank[itemId];
				if (val) {
					newBank[itemId] = val;
				}
			});
			Vue.set(state, "bank", newBank);
		},
		orderItem(state, { itemId, index }) {
			let keys = this.getters["inventory/bankItemIds"];
			keys = without(keys, itemId);
			keys.splice(index, 0, itemId);

			let newBank = {};
			if (state.bank.money)
				newBank.money = state.bank.money;
			keys.forEach(itemId => {
				let val = state.bank[itemId];
				if (val) {
					newBank[itemId] = val;
				}
			});
			Vue.set(state, "bank", newBank);
		}
	},
	actions: {
		unequip({ state, commit }, itemId) {
			let slot = getEquipmentSlot(itemId);
			let equippedItemId = state.equipment[slot].itemId;

			let count = state.equipment[slot].count;
			commit("moveEquipmentToBank", { slot });
		},
		equip({ state, commit, dispatch }, itemId) {
			let slot = getEquipmentSlot(itemId);

			let prevItemId = state.equipment[slot].itemId;
			let prevCount = state.equipment[slot].count;

			let count = getEquipmentStackable(itemId) ? state.bank[itemId] : 1;

			//if an item is equipped, make sure you can unequip it while equippng a new one
			if (prevItemId) {
				if (this.getters["inventory/canUnequip"](prevItemId) ||
					getEquipmentStackable(itemId) || state.bank[itemId] == 1) {
					;
				} else {
					EventBus.$emit("toast", { icon: require('@/assets/art/sidebar/backpack.png'), text: "Your inventory is full!", duration: 4000 });
					return;
				}
			}

			commit("moveBankToEquipment", { slot: slot, itemId, count });
			dispatch("playerMob/clampHealth", {}, { root: true })

			if (prevCount) {
				commit("changeItemCount", { itemId: prevItemId, count: prevCount });
			}
		},
		purchase({ commit, dispatch, rootGetters }, purchase) {
			if(purchase.requiredItems){
				for (let [itemId, count] of Object.entries(purchase.requiredItems)) {
					commit("changeItemCount", { itemId, count: -count });
				}
			}
			if(purchase.requiredResearchPoints){
				dispatch("research/addToPoints", purchase.requiredResearchPoints*-1, { root: true });
			}

			if (purchase.upgrade) {
				commit("upgrades/set", purchase.upgrade, { root: true });
			}
			let yieldedItems = acquireItemFrom(purchase);
			for (let [itemId, count] of Object.entries(yieldedItems)) {
				commit("changeItemCount", { itemId, count });
			}

			if (purchase.onPurchase) {
				purchase.onPurchase({ commit, dispatch, rootGetters });
			}

			if (purchase.fightZone) {
				let zone = ZONES.find(z => z.name == purchase.fightZone);
				let enemyId = zone.enemies[Math.floor(Math.random() * zone.enemies.length)];
				let keepLoot = rootGetters["combat/targetEnemy"] != null; // We were fighting a boss
				dispatch("combat/startCombat", { enemyId, keepLoot }, { root: true });
			}
		},
		loseEquipmentPiece({ getters, commit }) {
			let equipment = getters["equipment"];

			// Try to pick from non-stackable things first
			let loseableEquipment = Object.keys(equipment).filter(slot => {
				return equipment[slot].itemId && !getEquipmentStackable(equipment[slot].itemId);
			});

			// No luck? Well, guess you're losing something stackable
			if (loseableEquipment.length == 0) {
				loseableEquipment = Object.keys(equipment).filter(slot => {
					return equipment[slot].itemId;
				});
			}

			let lostItemId = null;
			if (loseableEquipment.length) {
				let slotToLose = loseableEquipment[Math.floor(Math.random() * loseableEquipment.length)];
				lostItemId = equipment[slotToLose].itemId;
				commit("loseEquipment", { slot: slotToLose });
			}
			this._vm.$modal.show(ModalDeath, { lostItemId }, { height: "auto", width: "320px" });
		}
	}
}

export default inventory;