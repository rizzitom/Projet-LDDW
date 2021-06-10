<template>
  <div>
    <main-header />
    <main class="pt-20">
      <nuxt />
    </main>
  </div>
</template>

<script>
import MainHeader from '../components/navigation/MainHeader.vue'

export default {
  components: { MainHeader }
}
</script>
