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
        Vous avez déjà un compte?
        <l-button variant anchor to="login" class="inline ml-1">
          Se connecter
        </l-button>
      </span>
    </div>
    <div class="flex flex-1 justify-center items-center py-8">
      <div class="grid grid-cols-12 w-full">
        <div
          class="col-start-2 col-end-12 sm:col-start-4 sm:col-end-10 lg:col-start-5 lg:col-end-9 2xl:col-start-6 2xl:col-end-8 flex flex-col"
        >
          <h1 class="text-5xl text-center font-semibold">
            Créer un compte
          </h1>

          <form
            class="mt-12 sm:mt-24 mb-6"
            novalidate
            @submit.prevent="checkCredentials"
          >
            <div class="w-full flex flex-col mb-4">
              <label for="register-username" class="ml-3 mb-2 font-medium">
                Nom d'utilisateur
              </label>
              <l-input id="register-username" v-model="newUser.username" />
            </div>

            <div class="w-full flex flex-col mb-4">
              <label for="register-email" class="ml-3 mb-2 font-medium">
                Email
              </label>
              <l-input
                id="register-email"
                v-model="newUser.email"
                type="email"
              />
            </div>

            <div class="w-full flex flex-col mb-4">
              <label for="register-password" class="ml-3 mb-2 font-medium">
                Mot de passe
              </label>
              <l-input
                id="register-password"
                v-model="newUser.password"
                type="password"
              />
            </div>

            <div class="w-full flex flex-col mb-8">
              <label
                for="register-confirmpassword"
                class="ml-3 mb-2 font-medium"
              >
                Confirmez le mot de passe
              </label>
              <l-input
                id="register-confirmpassword"
                v-model="newUser.repeatPassword"
                type="password"
              />
            </div>

            <div :class="{ 'bg-yellow-200': error, 'rounded-xl': error }">
              <l-button type="submit" class="grid" large>
                S'enregistrer
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
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
import LButton from '../components/common/LButton.vue'
import LInput from '../components/common/LInput.vue'

export default {
  components: { LButton, LInput },
  layout: 'default',

  data () {
    return {
      newUser: {
        username: '',
        email: '',
        password: '',
        repeatPassword: ''
      },
      error: '',
      loading: false
    }
  },

  validations: {
    newUser: {
      username: {
        required,
        minLength: minLength(5)
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8)
      },
      repeatPassword: {
        sameAsPassword: sameAs('password')
      }
    }
  },

  methods: {
    checkCredentials () {
      this.resetError()
      this.loading = true
      this.$nuxt.$loading.start()

      setTimeout(() => {
        const newUser = this.$v.newUser
        if (!newUser.username.required) {
          this.error = "Veuillez entrer un nom d'utilisateur"
          this.$nuxt.$loading.finish()
          this.resetLoading()
        } else if (!newUser.username.minLength) {
          this.error = `Le nom d'utilisateur doit contenir au moins ${this.$v.newUser.username.$params.minLength.min} caractères`
          this.$nuxt.$loading.finish()
          this.resetLoading()
        } else if (!newUser.email.required) {
          this.error = 'Veuillez saisir votre email'
          this.$nuxt.$loading.finish()
          this.resetLoading()
        } else if (!newUser.email.email) {
          this.error = 'Veuillez saisir un email valide'
          this.$nuxt.$loading.finish()
          this.resetLoading()
        } else if (!newUser.password.required) {
          this.error = 'Veuillez saisir votre mot de passe'
          this.$nuxt.$loading.finish()
          this.resetLoading()
        } else if (!newUser.password.minLength) {
          this.error = `Le mot de passe doit contenir au moins ${this.$v.newUser.password.$params.minLength.min} caractères`
          this.$nuxt.$loading.finish()
          this.resetLoading()
        } else if (!newUser.repeatPassword.sameAsPassword) {
          this.error = 'Les mots de passe ne correspondent pas'
          this.$nuxt.$loading.finish()
          this.resetLoading()
        } else {
          this.register()
        }
      }, 500)
    },

    register () {
      this.$fire.auth
        .createUserWithEmailAndPassword(
          this.newUser.email,
          this.newUser.password
        )
        .then((userObject) => {
          userObject.user.sendEmailVerification()
          userObject.user.updateProfile({
            displayName: this.newUser.username
          })
        })
        .then(() => {
          this.$router.push('/')
        })
        .catch((error) => {
          this.$nuxt.$loading.finish()
          throw new Error(error)
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
      title: 'Le design du web - Créer un compte',
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
