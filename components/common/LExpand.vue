<template>
  <div class="border border-gray-100 p-12 rounded-xl">
    <div
      class="flex justify-between cursor-pointer"
      @click="expanded = !expanded"
    >
      <h2 class="font-medium text-3xl">
        <slot name="title" />
      </h2>
      <div class="flex ml-5">
        <span v-if="!expanded" class="material-icons">
          expand_more
        </span>
        <span v-else class="material-icons">
          expand_less
        </span>
      </div>
    </div>

    <transition name="fade">
      <div v-show="expanded">
        <hr class="border-gray-100 h-0 my-6">
        <p>
          <slot name="description" />
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'LExpand',

  data () {
    return {
      expanded: false
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 150ms;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
