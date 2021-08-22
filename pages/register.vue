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
        <l-anchor variant to="/login" class="inline ml-1">
          Se connecter
        </l-anchor>
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
              <l-button
                type="submit"
                class="w-full flex items-center justify-center"
                :disabled="loading"
                :loading="loading"
              >
                S'enregistrer
              </l-button>
              <p v-if="error" class="py-3 px-4 text-xl text-center">
                {{ error }}
              </p>
            </div>
          </form>
          <l-anchor variant class="w-full text-center" to="/">
            Annuler et retourner à l'accueil
          </l-anchor>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  required,
  email,
  minLength,
  maxLength,
  sameAs
} from 'vuelidate/lib/validators'
import LButton from '../components/common/LButton.vue'
import LAnchor from '../components/common/LAnchor.vue'
import LInput from '../components/common/LInput.vue'

export default {
  components: { LButton, LAnchor, LInput },
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
      loading: false,

      title: 'Le design du web - Créer un compte',
      image: 'https://i.ibb.co/PWdGCDn/Foresight-Engine-Blog-2x.png'
    }
  },

  validations: {
    newUser: {
      username: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(10)
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

      setTimeout(() => {
        const newUser = this.$v.newUser
        if (!newUser.username.required) {
          this.error = "Veuillez entrer un nom d'utilisateur"
          this.resetLoading()
        } else if (!newUser.username.minLength || !newUser.username.maxLength) {
          this.error = `Le nom d'utilisateur doit contenir entre ${this.$v.newUser.username.$params.minLength.min} et ${this.$v.newUser.username.$params.maxLength.max} caractères`
          this.resetLoading()
        } else if (!newUser.email.required) {
          this.error = 'Veuillez saisir votre email'
          this.resetLoading()
        } else if (!newUser.email.email) {
          this.error = 'Veuillez saisir un email valide'
          this.resetLoading()
        } else if (!newUser.password.required) {
          this.error = 'Veuillez saisir votre mot de passe'
          this.resetLoading()
        } else if (!newUser.password.minLength) {
          this.error = `Le mot de passe doit contenir au moins ${this.$v.newUser.password.$params.minLength.min} caractères`
          this.resetLoading()
        } else if (!newUser.repeatPassword.sameAsPassword) {
          this.error = 'Les mots de passe ne correspondent pas'
          this.resetLoading()
        } else {
          this.register()
        }
      }, 250)
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
