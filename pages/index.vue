<template>
  <div>
    <first-section />
    <steps-section />
    <strenghts-section />
  </div>
</template>

<script>
import FirstSection from '../components/landing/sections/FirstSection.vue'
import StepsSection from '../components/landing/sections/StepsSection.vue'
import StrenghtsSection from '../components/landing/sections/StrenghtsSection.vue'

export default {
  components: { FirstSection, StrenghtsSection, StepsSection }
}
</script>

<style>
@import 'https://fonts.googleapis.com/icon?family=Material+Icons';
</style>
