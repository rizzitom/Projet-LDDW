<template>
  <div class="flex-1 py-36 grid grid-cols-12">
    <l-snackbar v-if="successMessage" color="green-600">
      Votre message a bien été envoyé
    </l-snackbar>
    <l-snackbar v-if="errorMessage" color="red-600">
      Une erreur est survenue: veuillez réessayer plus tard
    </l-snackbar>

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

      <form @submit.prevent="submitForm()">
        <div class="mb-8 flex">
          <button
            class="w-1/2 rounded-xl py-2 px-5 text-2xl transition duration-150"
            :class="
              mode === 'contact'
                ? 'bg-purple-600 text-white font-medium'
                : 'text-purple-600'
            "
            @click.stop.prevent="
              mode = 'contact'
              error = ''
            "
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
            @click.stop.prevent="
              mode = 'order'
              error = ''
            "
          >
            Devis
          </button>
        </div>

        <div class="mb-6">
          <label for="contact-firstname" class="flex mb-2">
            Prénom
          </label>
          <l-input
            id="contact-firstname"
            v-model="contact.firstname"
            class="w-full"
            placeholder="John"
          />
        </div>
        <div class="mb-6">
          <label for="contact-lastname" class="flex mb-2">
            Nom
          </label>
          <l-input
            id="contact-lastname"
            v-model="contact.lastname"
            class="w-full"
            placeholder="Doe"
          />
        </div>
        <div class="mb-6">
          <label for="contact-email" class="flex mb-2">
            Email
          </label>
          <l-input
            id="contact-email"
            v-model="contact.email"
            class="w-full"
            placeholder="john.doe@domaine.com"
          />
        </div>
        <div class="mb-6">
          <label for="contact-phone" class="flex mb-2">
            Numéro de téléphone (optionnel)
          </label>
          <l-input
            id="contact-phone"
            v-model="contact.phone"
            class="w-full"
            placeholder="0123456789"
          />
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
            v-model="contact.budget"
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
          <l-file-input
            id="contact-file"
            v-model="contact.file"
            class="w-full"
            @change="setContactFile"
          />
        </div>

        <div
          v-if="error"
          class="mb-4 text-white border border-red-600 px-6 py-4 text-2xl rounded-xl bg-red-500"
        >
          {{ error }}
        </div>

        <l-button
          class="flex items-center"
          type="submit"
          :loading="loading"
          :disabled="loading"
        >
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
import { required, email, requiredIf } from 'vuelidate/lib/validators'
import LButton from '../components/common/LButton.vue'
import LFileInput from '../components/common/LFileInput.vue'
import LInput from '../components/common/LInput.vue'
import LSelect from '../components/common/LSelect.vue'
import LSnackbar from '../components/common/LSnackbar.vue'
import LTextArea from '../components/common/LTextArea.vue'

export default {
  layout: 'MainLayout',
  components: { LInput, LButton, LTextArea, LFileInput, LSelect, LSnackbar },

  data () {
    return {
      error: '',
      loading: false,
      successMessage: false,
      errorMessage: false,

      mode: 'contact',
      contact: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        formula: null,
        message: '',
        budget: '',
        file: null
      }
    }
  },

  validations: {
    contact: {
      firstname: {
        required
      },
      lastname: {
        required
      },
      email: {
        required,
        email
      },
      formula: {
        required
      },
      message: {
        required
      },
      file: {
        required: requiredIf((nestedModel) => {
          return !nestedModel.file
        })
      }
    }
  },

  created () {
    const modeParam = this.$route.params.mode
    if (modeParam) {
      this.mode = modeParam
    }

    const formulaParam = this.$route.params.formula
    if (formulaParam) {
      this.contact.formula = formulaParam
    }
  },

  methods: {
    submitForm () {
      this.error = ''
      this.loading = true

      const validation = this.$v.contact

      if (!validation.firstname.required) {
        this.resetLoading()
        this.error = 'Entrez votre prénom'
      } else if (!validation.lastname.required) {
        this.resetLoading()
        this.error = 'Entrez votre nom'
      } else if (!validation.email.required || !validation.email.email) {
        this.resetLoading()
        this.error = 'Entrez un email valide'
      } else if (this.mode === 'contact') {
        if (!validation.message.required) {
          this.resetLoading()
          this.error = 'Entrez votre message'
        } else {
          this.sendContact()
        }
      } else if (this.mode === 'order') {
        if (!validation.formula.required) {
          this.resetLoading()
          this.error = 'Sélectionnez une formule'
        } else if (!validation.message.required && !validation.file.required) {
          this.resetLoading()
          this.error =
            'Veuillez entrer un message ou attacher votre cahier des charges'
        } else {
          this.sendOrder()
        }
      }
    },

    sendContact () {
      this.$fire.firestore
        .collection('mail')
        .add({
          to: 'bonjour@ledesignduweb.fr',
          message: {
            subject: 'Prise de contact',
            html: `<h3>${this.contact.firstname} ${this.contact.lastname} - ${
              this.contact.email
            } ${this.contact.phone ? `- ${this.contact.phone}` : ''}</h3>\n<p>${
              this.contact.message
            }</p>`
          }
        })
        .then(this.resetValues())
        .then(this.resetLoading())
        .then(() => {
          this.successMessage = true
          setTimeout(() => {
            this.successMessage = false
          }, 3000)
        })
    },

    async sendOrder () {
      const contact = this.contact
      try {
        const newOrder = await this.$fire.firestore.collection('orders').add({
          date: new Date(),
          email: contact.email,
          formula: contact.formula,
          step: 1,
          subject: 'test',
          message: contact.message
        })

        let URL = null

        if (contact.file) {
          const storageRef = this.$fire.storage.ref(
            `orders/${newOrder.id}/${contact.file.name}`
          )
          await storageRef.put(contact.file)
          URL = await storageRef.getDownloadURL()
        }

        await this.$fire.firestore.collection('mail').add({
          to: 'bonjour@ledesignduweb.fr',
          message: {
            subject: 'Demande de devis',
            html: `<h3>${contact.firstname} ${contact.lastname} - ${
              contact.email
            } ${contact.phone ? `- ${contact.phone}` : ''}</h3>
            \n<p>${contact.message}</p>
            \n<small>Formule: ${contact.formula} ${
              contact.budget ? `- Budget: ${contact.budget}€` : ''
            }</small>`,
            attachments: [
              {
                path: URL
              }
            ]
          }
        })

        this.resetValues()
        this.resetLoading()

        this.successMessage = true
        setTimeout(() => {
          this.successMessage = false
        }, 3000)
      } catch (err) {
        this.errorMessage = true
        setTimeout(() => {
          this.errorMessage = false
        }, 3000)
      }
    },

    setContactFile (file) {
      this.contact.file = file
    },

    resetError () {
      this.error = ''
    },

    resetLoading () {
      this.loading = false
    },

    resetValues () {
      this.contact = {
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
