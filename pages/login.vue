<template>
  <div class="h-screen flex flex-col">
    <div class="grid grid-cols-12 mt-6 mb-12 sm:mb-6 h-36 sm:h-20 items-center">
      <div class="col-start-2 col-end-12 sm:col-end-5 flex">
        <NuxtLink to="/">
          <img src="/logo.svg" alt="logo du studio" class="h-10">
        </NuxtLink>
      </div>
      <span
        class="col-start-2 col-end-12 sm:col-start-5 sm:col-end-12 sm:text-right"
      >
        Vous n'avez pas de compte?
        <l-anchor variant to="/register" class="inline ml-1">
          S'enregistrer
        </l-anchor>
      </span>
    </div>
    <div class="flex flex-1 justify-center items-center py-8">
      <div class="grid grid-cols-12 w-full">
        <div
          class="col-start-2 col-end-12 sm:col-start-4 sm:col-end-10 lg:col-start-5 lg:col-end-9 2xl:col-start-6 2xl:col-end-8 flex flex-col"
        >
          <h1 class="text-5xl text-center font-semibold">
            Accéder à son compte
          </h1>

          <form
            class="mt-12 sm:mt-24 mb-6"
            novalidate
            @submit.prevent="checkCredentials"
          >
            <div class="w-full flex flex-col mb-4">
              <label for="login-email" class="ml-3 mb-2 font-medium">
                Email
              </label>
              <l-input id="login-email" v-model="email" type="email" />
            </div>

            <div class="w-full flex flex-col mb-8">
              <label for="login-password" class="ml-3 mb-2 font-medium">
                Mot de passe
              </label>
              <l-input id="login-password" v-model="password" type="password" />
            </div>

            <div :class="{ 'bg-yellow-200': error, 'rounded-xl': error }">
              <l-button
                type="submit"
                class="w-full flex items-center justify-center"
                :disabled="loading"
                :loading="loading"
                :class="{ 'opacity-80': loading }"
              >
                Se connecter
              </l-button>
              <p v-if="error" class="py-3 px-4 text-xl text-center">
                {{ error }}
              </p>
            </div>
          </form>
          <l-anchor
            variant
            :disabled="loading"
            :default-cursor="loading"
            class="w-full text-center"
            to="/"
          >
            Annuler et retourner à l'accueil
          </l-anchor>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import LAnchor from '../components/common/LAnchor.vue'
import LButton from '../components/common/LButton.vue'
import LInput from '../components/common/LInput.vue'

export default {
  components: { LAnchor, LButton, LInput },
  layout: 'default',

  data () {
    return {
      email: '',
      password: '',
      error: '',
      loading: false,

      title: 'Le design du web - Accéder à son compte',
      image: 'https://i.ibb.co/PWdGCDn/Foresight-Engine-Blog-2x.png'
    }
  },

  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    }
  },

  methods: {
    checkCredentials () {
      this.loading = true
      setTimeout(() => {
        this.resetError()
        this.loading = true
        if (!this.$v.email.email || !this.$v.email.required) {
          this.resetLoading()
          this.error = 'Entrez un email valide'
        } else if (!this.$v.password.required) {
          this.resetLoading()
          this.error = 'Entrez votre mot de passe'
        } else {
          this.login()
        }
      }, 250)
    },

    login () {
      this.$fire.auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push('/')
        })
        .catch(() => {
          this.resetLoading()
          this.error = 'Connexion échouée: vérifiez vos identifiants'
        })
    },

    resetError () {
      this.error = ''
    },

    resetLoading () {
      this.loading = false
    }
  },

  head () {
    return {
      title: this.title,
      link: [
        {
          rel: 'canonical',
          href: 'https://ledesignduweb.fr' + this.$route.path
        }
      ],
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title
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
