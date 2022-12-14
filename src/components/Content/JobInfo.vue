<template>
  <div v-if="!dismissed" class="row my-2">
    <div class="col-12 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
      <div class="content-block d-flex flex-column flex-md-row">
        <div class="d-flex flex-row flex-md-column justify-content-center">
          <img class="avatar" :src="icon" />
        </div>
        <div class="d-flex flex-column justify-content-center w-100">
          <p class="info-title">{{title}}</p>
          <div class="slot w-100 d-flex flex-column">
            <slot :name="current" />
          </div>
          <div
            v-if="options"
            class="d-flex flex-row align-items-center justify-content-center mt-1 flex-wrap"
          >
            <button
              v-for="option in filteredOptions"
              :key="option.name"
              class="btn mt-1 mx-1"
              :class="option.name == current ? 'btn-primary' : 'btn-outline-primary'"
              @click="current=option.name"
            >
              <img
                v-if="option.icon"
                :src="option.icon"
                class="option-icon"
                :class="option.iconClass"
              />
              <span>{{option.name}}</span>
            </button>
          </div>

          <div class="d-flex flex-column align-items-end w-100">
            <span class="dismiss" @click="dismiss">DISMISS</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["infoId", "icon", "title", "options"],
  data() {
    return {
      current: this.options[0].name
    };
  },
  computed: {
    filteredOptions() {
      return this.options.filter(option => {
        if (option.name == this.current && option.name == "Back") return false;
        return true;
      });
    },
    dismissed() {
      return this.$store.getters["info/dismissed"](this.infoId);
    }
  },
  methods: {
    dismiss() {
      this.$store.commit("info/dismiss", this.infoId);
    }
  }
};
</script>

<style scoped>
.avatar {
  width: 64px;
}
@media (min-width: 1200px) {
  .avatar {
    width: 128px;
  }
}
.info-title {
  font-weight: bold;
}
.dismiss {
  color: gray;
  font-size: 12px;
  margin-bottom: -10px;
  cursor: pointer;
}
.option-icon {
  width: 32px;
}
.slot span,
.slot div * {
  margin-top: 0.5rem;
}
.slot span img,
.slot div * img {
  width: 32px;
}
</style>