<template>
  <div>
    <span :id="id" class="robustness" :class="[robustnessClass]">ROBUSTNESS: {{robustness}}</span>
    <b-popover
      :target="id"
      triggers="hover"
      placement="top"
      delay="50"
      :customClass="`${$store.getters['settings/darkModeClass']} no-pointer-events`"
    >
      <div class="d-flex flex-column align-items-center">
        <span class="mb-1 description">Attack Speed: {{getBasedStats.attackSpeed}}</span>
        <stats-panel :stats="getBasedStats" />
      </div>
    </b-popover>
  </div>
</template>

<script>
import StatsPanel from "@/components/Content/Combat/StatsPanel";
import {
  getBasedStats,
  calcRobustness,
  getRobustnessCssClass,
} from "@/utils/combatUtils";
export default {
  components: { StatsPanel },
  props: ["stats", "mobType", "overrideRobustness"],
  computed: {
    id() {
      return this._uid.toString();
    },
    getBasedStats() {
      return getBasedStats(this.stats, this.mobType);
    },
    robustness() {
      if (this.overrideRobustness) return this.overrideRobustness;
      return calcRobustness(this.stats, this.mobType);
    },
    robustnessClass() {
      return getRobustnessCssClass(
        calcRobustness(this.$store.getters["playerMob/stats"], "player"),
        this.robustness
      );
    },
  },
};
</script>


<style scoped>
.robustness {
  font-size: 13px;
  border-radius: 6px;
  padding: 4px 7px;
}
</style>
