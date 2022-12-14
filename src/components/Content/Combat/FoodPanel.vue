<template>
  <div class="w-100 d-flex flex-column align-items-center">
    <div class="w-100 d-flex flex-row align-items-center justify-content-center">
      <div class="btn-group">
        <button
          :id="id"
          type="button"
          class="btn btn-outline-secondary food-group"
          :class="{'no-eat': !canEat || isFullHealth}"
          @click="eat"
        >
          <div v-if="food">
            <span>({{foodCount}})</span>
            <img class="food-icon" :src="food.icon" />
            <span>+{{food.healAmount}} HP</span>
          </div>
          <span v-else>No food</span>
        </button>

        <item-popover v-if="food" :target="id" placement="left" :itemId="foodId" />
        <button
          :id="id + 'food-dropdown-button'"
          type="button"
          class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
        ></button>
        <equipment-dropdown :target="id + 'food-dropdown-button'" equipmentSlot="food" />
      </div>
      <div v-if="hasAutoEat" class="ml-3 custom-control custom-switch">
        <input
          v-model="autoEatEnabled"
          type="checkbox"
          class="custom-control-input"
          id="autoEatEnabled"
        />
        <label class="custom-control-label" for="autoEatEnabled">Auto-Eat</label>
      </div>
    </div>

    <progress-bar
      v-if="food"
      class="mb-2 mt-2 food-cooldown black-background"
      :progress="foodCooldownProgress"
      :text="'Food Cooldown: '+foodCooldown +'s'"
      :customClass="'bg-warning'"
    />
  </div>
</template>


<script>
import ITEMS from "@/data/items";
import ItemPopover from "@/components/ItemPopover";
import EquipmentDropdown from "@/components/Content/Combat/EquipmentDropdown";
import ProgressBar from "@/components/ProgressBar";
export default {
  components: { ItemPopover, EquipmentDropdown, ProgressBar },
  computed: {
    id() {
      return this._uid.toString();
    },
    foodId() {
      return this.$store.getters["inventory/equipment"].food.itemId;
    },
    food() {
      if (!this.foodId) return;
      return ITEMS[this.foodId];
    },
    foodCount() {
      return this.$store.getters["inventory/equipment"].food.count;
    },
    isFullHealth() {
      if (
        this.$store.getters["playerMob/health"] >=
        this.$store.getters["playerMob/stats"].maxHealth
      )
        return true;
      return false;
    },
    canEat() {
      if (!this.food) return false;
      if (this.$store.getters["combat/foodCoroutine/isActive"]) return false;
      return true;
    },
    foodCooldownProgress() {
      if (this.canEat) return 1;
      return this.$store.getters["combat/foodCoroutine/percent"];
    },
    foodCooldown() {
      return this.$store.getters["combat/foodCooldown"];
    },
    hasAutoEat() {
      return this.$store.getters["upgrades/get"]("autoeat");
    },
    autoEatEnabled: {
      get() {
        return this.$store.getters["settings/autoEatEnabled"];
      },
      set(value) {
        this.$store.commit("settings/setAutoEatEnabled", value);
      }
    }
  },
  methods: {
    eat() {
      if (!this.canEat) return;
      this.$store.dispatch("combat/eat");
    }
  }
};
</script>

<style scoped>
.food-group {
  font-size: 16px;
  padding: 0.12rem 0.55rem;
}

.food-cooldown {
  max-width: 200px;
}
.no-eat {
  cursor: not-allowed !important;
}
</style>