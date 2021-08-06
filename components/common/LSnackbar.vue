<template>
  <div class="fixed bottom-5 right-5">
    <div
      :class="
        `bg-${color} text-white px-6 py-4 rounded-xl text-2xl relative overflow-hidden`
      "
    >
      <slot />

      <div class="progress-bar" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LSnackbar',
  props: {
    color: {
      type: String,
      default: 'purple-600'
    }
  }
}
</script>

<style scoped>
.progress-bar {
  position: absolute;
  display: block;
  bottom: 0;
  right: 0;
  content: ' ';
  width: 100%;
  height: 4px;
  background-color: #a7f3d0;
  animation: timeout 3s linear;
}

@keyframes timeout {
  0% {
    right: 0;
  }

  100% {
    right: 100%;
  }
}
</style>
