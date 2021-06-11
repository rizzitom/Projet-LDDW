<template>
  <div>
    <first-section />
    <strenghts-section />
  </div>
</template>

<script>
import FirstSection from '../components/landing/sections/FirstSection.vue'
import StrenghtsSection from '../components/landing/sections/StrenghtsSection.vue'

export default {
  components: { FirstSection, StrenghtsSection }
}
</script>

<style>
@import 'https://fonts.googleapis.com/icon?family=Material+Icons';
</style>
