<template>
  <div class="min-h-screen flex flex-col">
    <l-header />
    <main class="pt-20 grid flex-1">
      <nuxt />
    </main>
    <l-footer />
  </div>
</template>

<script>
import LFooter from '../components/navigation/LFooter.vue'
import LHeader from '../components/navigation/LHeader.vue'

export default {
  components: { LHeader, LFooter },

  data () {
    return {
      title: 'Le design du web',
      description:
        'Nous sommes une équipe de développeurs prêts à vous accompagner dans la réalisation de votre projet web. Nous étudions chaque cas avec la plus grande attention.',
      image: 'https://i.ibb.co/PWdGCDn/Foresight-Engine-Blog-2x.png'
    }
  },

  head () {
    return {
      meta: [
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
      ]
    }
  }
}
</script>
