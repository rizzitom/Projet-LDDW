<template>
  <div class="h-screen flex flex-col">
    <div class="grid grid-cols-12 mt-6 mb-12 sm:mb-6 h-36 sm:h-20 items-center">
      <div class="col-start-2 col-end-12 sm:col-end-5">
        LOGO HERE
      </div>
      <span
        class="col-start-2 col-end-12 sm:col-start-5 sm:col-end-12 sm:text-right"
      >
        Vous n'avez pas de compte?
        <l-button variant anchor to="register" class="inline ml-1">
          S'enregistrer
        </l-button>
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
              <l-button type="submit" class="grid" large>
                Se connecter
              </l-button>
              <p v-if="error" class="py-3 px-4 text-xl text-center">
                {{ error }}
              </p>
            </div>
          </form>
          <l-button
            type="submit"
            variant
            class="w-full text-center"
            anchor
            to="/"
          >
            Annuler et retourner à l'accueil
          </l-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import LButton from '../components/common/LButton.vue'
import LInput from '../components/common/LInput.vue'

export default {
  components: { LButton, LInput },
  layout: 'default',

  data () {
    return {
      email: '',
      password: '',
      error: ''
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
      this.$nuxt.$loading.start()
      setTimeout(() => {
        this.resetError()
        this.loading = true
        if (!this.$v.email.email || !this.$v.email.required) {
          this.$nuxt.$loading.finish()
          this.error = 'Entrez un email valide'
        } else if (!this.$v.password.required) {
          this.$nuxt.$loading.finish()
          this.error = 'Entrez votre mot de passe'
        } else {
          this.login()
        }
      }, 500)
    },

    login () {
      this.$fire.auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push('/')
        })
        .catch(() => {
          this.error = 'Connexion échouée: vérifiez vos identifiants'
        })
    },

    resetError () {
      this.error = ''
    }
  },

  head () {
    return {
      title: 'Le design du web - Accéder à son compte'
    }
  }
}
</script>
