<template>
  <div class="min-h-screen flex flex-col">
    <l-header />
    <main class="pt-20 flex flex-1">
      <nuxt />
    </main>
    <l-footer />
  </div>
</template>

<script>
import LFooter from '../components/navigation/LFooter.vue'
import LHeader from '../components/navigation/LHeader.vue'

export default {
  components: { LHeader, LFooter }
}
</script>
