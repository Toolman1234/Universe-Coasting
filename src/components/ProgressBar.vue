<template>
  <div class="progress w-100" :style="text ? 'height: 26px !important': ''">
    <div
      class="progress-bar progress-bar-striped font-weight-bold"
      :class="[customClass]"
      :style="`width: ${progress*100}%;`"
    >
      <div
        v-if="text"
        class="progress-text d-flex flex-row align-items-center justify-content-center"
      >
        <span>{{text}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    customClass: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    progress: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style scoped>
.progress {
  position: relative;
}
.progress-bar {
  transition: none !important;
}
.progress-text {
  font-size: 14px;
  padding: 0.2rem;
  width: 100%;
  position: absolute;
}
</style>