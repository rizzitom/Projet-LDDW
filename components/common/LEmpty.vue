<template>
  <div class="text-2xl flex flex-col items-center">
    <span class="material-icons icon">
      air
    </span>
    <span class="mt-4">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'LEmpty',

  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.icon {
  font-size: 52px;
}
</style>
