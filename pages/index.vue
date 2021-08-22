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

  data () {
    return {
      title:
        "Le design du web - Création de sites internet dans les règles de l'art",
      description:
        'Nous sommes une équipe de développeurs prêts à vous accompagner dans la réalisation de votre projet web. Nous étudions chaque cas avec la plus grande attention.',
      image: 'https://i.ibb.co/PWdGCDn/Foresight-Engine-Blog-2x.png'
    }
  },

  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.image
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.title
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.image
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.image
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.title
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
