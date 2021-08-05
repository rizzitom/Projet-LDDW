<template>
  <div class="flex-1 py-36 grid grid-cols-12">
    <div
      class="col-start-2 col-end-12 sm:col-end-9 md:col-end-8 xl:col-end-6 2xl:col-end-4"
    >
      <div class="mb-24">
        <h1 class="text-6xl font-semibold">
          Nous contacter
        </h1>
        <p class="mt-6">
          Vous avez besoin d'un renseignement ? Vous souhaitez commander chez
          nous ?
          <br>Contactez-nous dès maintenant !
        </p>
      </div>

      <form @submit.prevent="submitContactForm()">
        <div class="mb-8 flex">
          <button
            class="w-1/2 rounded-xl py-2 px-5 text-2xl transition duration-150"
            :class="
              mode === 'contact'
                ? 'bg-purple-600 text-white font-medium'
                : 'text-purple-600'
            "
            @click="mode = 'contact'"
          >
            Contact
          </button>
          <button
            class="w-1/2 rounded-xl py-2 px-5 text-2xl transition duration-150"
            :class="
              mode === 'order'
                ? 'bg-purple-600 text-white font-medium'
                : 'text-purple-600'
            "
            @click="mode = 'order'"
          >
            Devis
          </button>
        </div>

        <div class="mb-6">
          <label for="contact-firstname" class="flex mb-2">
            Prénom
          </label>
          <l-input id="contact-firstname" class="w-full" placeholder="John" />
        </div>
        <div class="mb-6">
          <label for="contact-lastname" class="flex mb-2">
            Nom
          </label>
          <l-input id="contact-lastname" class="w-full" placeholder="Doe" />
        </div>
        <div class="mb-6">
          <label for="contact-email" class="flex mb-2">
            Email
          </label>
          <l-input
            id="contact-email"
            class="w-full"
            placeholder="john.doe@domaine.com"
          />
        </div>
        <div class="mb-6">
          <label for="contact-phone" class="flex mb-2">
            Numéro de téléphone (optionnel)
          </label>
          <l-input id="contact-phone" class="w-full" placeholder="0123456789" />
        </div>
        <div v-if="mode === 'order'" class="mb-6">
          <label for="contact-formula" class="flex mb-2">
            Formule
          </label>
          <l-select
            v-model="contact.formula"
            class="w-full"
            placeholder="Selectionnez une formule"
          >
            <option value="standard">
              Standard
            </option>
            <option value="flexible">
              Flexible
            </option>
          </l-select>
        </div>
        <div class="mb-6">
          <label for="contact-message" class="flex mb-2">
            Message
          </label>
          <l-text-area
            id="contact-message"
            v-model="contact.message"
            maxlength="160"
            class="w-full"
            :placeholder="
              mode === 'order'
                ? 'Détaillez au maximum vos besoins ou téléchargez votre cahier des charges'
                : null
            "
          />
        </div>
        <div v-if="mode === 'order'" class="mb-6">
          <label for="contact-phone" class="flex mb-2">
            Votre budget (optionnel)
          </label>
          <l-input
            id="contact-phone"
            min="0"
            type="number"
            class="w-full"
            placeholder="Indiquez le montant maximum"
          />
        </div>
        <div v-if="mode === 'order'" class="mb-6">
          <label for="contact-file" class="flex mb-2">
            Télécharger un cahier des charges
          </label>
          <l-file-input id="contact-file" class="w-full" />
        </div>

        <l-button type="submit">
          Envoyer
        </l-button>
      </form>
    </div>
    <div
      class="hidden md:flex 2xl:hidden md:col-span-4 xl:col-span-6 justify-center items-center"
    >
      <div
        class="bg-contact-illustration bg-no-repeat bg-contain w-1/2 h-1/2"
      />
    </div>
  </div>
</template>

<script>
import LButton from '../components/common/LButton.vue'
import LFileInput from '../components/common/LFileInput.vue'
import LInput from '../components/common/LInput.vue'
import LSelect from '../components/common/LSelect.vue'
import LTextArea from '../components/common/LTextArea.vue'

export default {
  layout: 'MainLayout',
  components: { LInput, LButton, LTextArea, LFileInput, LSelect },

  data () {
    return {
      mode: 'contact',
      contact: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        formula: null,
        message: '',
        budget: '',
        file: ''
      }
    }
  },

  created () {
    const modeParam = this.$route.params.mode
    if (modeParam) {
      this.mode = modeParam
    }
  },

  methods: {
    submitContactForm () {
      console.log(this.contact)
    }
  },

  head () {
    return {
      title: 'Le design du web - Nous contacter',
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
