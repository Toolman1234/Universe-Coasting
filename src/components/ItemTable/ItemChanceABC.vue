<template>
  <div
    v-if="valid"
    class="d-flex flex-row align-items-center my-1"
    :class="{simplified: simplified}"
  >
    <span v-if="chance" class="mr-1">{{cleanedChance}}</span>
    <img :src="item.icon" :id="id" class="mx--0" :class="{'mr-1': !simplified}" />
    <item-popover :itemId="itemId" :target="id" placement="right" />
    <span v-if="simplified">x</span>
    <span>{{countText}}</span>
    <span v-if="!simplified">&nbsp;{{item.name}}</span>
    <span v-if="simplified" class="ml-1">({{bankCount | aggressive}})</span>
  </div>
</template>

<script>
import ITEMS from "@/data/items";
import ItemPopover from "@/components/ItemPopover";
export default {
  props: ["chance", "data", "simplified"],
  components: { ItemPopover },
  computed: {
    id() {
      return this._uid.toString();
    },
    valid() {
      if (this.data.item) return true;
      // ID can be null
      return this.data.items.id;
    },
    itemId() {
      if (this.data.item) return this.data.item;
      return this.data.items.id;
    },
    item() {
      let item = ITEMS[this.itemId];
      if (!item) console.log("Bad item in table:", this.itemId);
      return item;
    },
    countText() {
      // A
      if (this.data.item) return "1";

      let count = this.data.items.count;

      // B
      if (typeof count == "number") return count;

      // C
      if (typeof count == "object") return `${count[0]}-${count[1]}`;
      return 1;
    },
    cleanedChance() {
      let chance = (this.chance * 100).toFixed(2).replace(/[.,]00$/, "");
      if (chance.length <= 4) chance = "  " + chance;
      return chance + "%";
    },
    bankCount() {
			let count = this.$store.getters["inventory/bank"][this.itemId];
			count = count ? count : 0;
      Object.values(this.$store.getters["inventory/equipment"]).forEach(
        equipment => {
          if (this.itemId == equipment.itemId) {
						count += equipment.count;
          }
        }
      );
      return count;
    }
  }
};
</script>

<style scoped>
span {
  white-space: pre;
}
img {
  width: 32px;
}
.simplified {
  font-size: 14px;
}
.mx--0 {
  margin-bottom: -8px;
}
</style>