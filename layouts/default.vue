<template>
  <div>
    <main-header />
    <main>
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
