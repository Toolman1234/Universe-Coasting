import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';
import jobSingleAction from '@/state/jobSingleAction';

import { ACTIONS } from "@/data/chemistry"
import { CHEMISTRY_UPGRADE_PERCENT } from "@/data/upgrades";

const chemistry = merge(cloneDeep(jobBase), cloneDeep(jobSingleAction), {
	getters: {
		jobId() {
			return "chemistry";
		},
		baseActions(state, getters, rootState, rootGetters) {
			let actions = cloneDeep(ACTIONS);

			let upgradeCount = rootGetters["upgrades/get"]("chemDispenser");
			let potion = rootGetters["potions/get"]("chemistry");
			let potionItemId = potion ? potion.itemId : null;

			for (let action of Object.values(actions)) {
				if (action.type == "bases") {
					action.time *= (1 - CHEMISTRY_UPGRADE_PERCENT * upgradeCount);
				}

				if (potionItemId == "potionChemistry") {
					if (getters["level"] < action.requiredLevel) {
						action.requiredLevel = 1;
					} else {
						action.preservePotion = true;
					}
				} else if(potionItemId == "toolChemistry"){
					if(action.items){
						action.items.count *= 2;	
					} else {
						action.preservePotion = true;
					}
				}
			}

			return actions;
		},
		locked(state, getters, rootState, rootGetters) {
			return !rootGetters["upgrades/get"]("chemistryUnlocked");
		}
	}
});

export default chemistry;