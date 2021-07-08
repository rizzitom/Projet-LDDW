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
  components: { FirstSection, StrenghtsSection, StepsSection },
  layout: 'MainLayout',

  head () {
    return {
      title:
        "Le design du web - Création de sites internet dans les règles de l'art",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Nous sommes une équipe de développeurs prêts à vous accompagner dans la réalisation de votre projet web. Nous étudions chaque cas avec la plus grande attention.'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://ledesignduweb.fr' + this.$route.path
        }
      ]
    }
  }
}
</script>

<style>
@import 'https://fonts.googleapis.com/icon?family=Material+Icons';
</style>
