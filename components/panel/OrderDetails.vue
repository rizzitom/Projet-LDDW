<template>
  <l-dialog :title="order.subject" @close="handleClose">
    <div v-if="order.canceled">
      <l-expand class="p-6 rounded-none border-t-0 border-b-0">
        <template #title>
          <div class="flex items-center">
            <span class="text-2xl">Annulation</span>
          </div>
        </template>
        <template #description>
          Après étude, notre équipe a décidé de refuser votre proposition. Si un
          motif est renseigné, il sera mentionné ci-dessous.<br>

          <div
            v-if="order.cancelationReason"
            class="bg-red-50 mt-4 text-xl p-4 rounded-xl leading-relaxed"
          >
            {{ order.cancelationReason }}
          </div>
        </template>
      </l-expand>
    </div>

    <div v-else>
      <l-expand
        class="p-6 rounded-b-none border-t-0"
        :class="{ 'opacity-60': order.step > 1 }"
      >
        <template #title>
          <div class="flex items-center">
            <span class="text-2xl">Validation</span>
            <span
              v-if="order.step > 1"
              class="material-icons icon ml-3 text-green-500"
            >
              check
            </span>
          </div>
        </template>
        <template #description>
          Notre équipe étudie votre proposition de projet. Si vous le souhaitez,
          vous pouvez échanger avec nous à travers l'onglet de chat ou sur notre
          serveur discord. Si vous avez activé l'option, vous recevrez une
          notification par email vous informant de notre décision.
        </template>
      </l-expand>

      <l-expand
        class="p-6 border-t-0 rounded-t-none rounded-b-none"
        :class="{ 'opacity-60': order.step > 2 }"
      >
        <template #title>
          <div class="flex items-center">
            <span class="text-2xl">
              Paiement
              <span v-if="invoice && invoice.items[0]">
                ({{
                  `${invoice.items[0].amount /
                    100} ${invoice.items[0].currency.toUpperCase()}`
                }})
              </span>
            </span>
            <span
              v-if="order.step > 2"
              class="material-icons icon ml-3 text-green-500"
            >
              check
            </span>
          </div>
        </template>
        <template #description>
          Réglez le montant de votre commande via la plateforme de paiement
          Stripe. En fonction de la formule sélectionnée, la totalité ou la
          moitié de la somme sera demandée.
        </template>
      </l-expand>

      <l-expand
        class="p-6 border-t-0 rounded-t-none rounded-b-none"
        :class="{ 'opacity-60': order.step > 3 }"
      >
        <template #title>
          <div class="flex items-center">
            <span class="text-2xl">Révision(s)</span>
            <span
              v-if="order.step > 3"
              class="material-icons icon ml-3 text-green-500"
            >
              check
            </span>
          </div>
        </template>
        <template #description>
          Vous avez {{ order.availableRevisions }} révisions disponibles. Ces
          révisions vous servent à modifier des choses dans le projet en cours
          de route pour être sûr que le résultat soit le plus fidèle à l'idée de
          départ. Vous pouvez discuter des révisions dans l'onglet de chat ou
          sur notre serveur discord.
        </template>
      </l-expand>

      <l-expand
        class="p-6 border-t-0"
        :class="{ 'opacity-60': order.step > 4 }"
      >
        <template #title>
          <div class="flex items-center">
            <span class="text-2xl">Livraison</span>
            <span
              v-if="order.step > 4"
              class="material-icons icon ml-3 text-green-500"
            >
              check
            </span>
          </div>
        </template>
        <template #description>
          Le processus de développement est en cours. Lorsque la réalisation du
          projet sera terminée, vous aurez à disposition le code source via un
          dossier compressé. Pour les projets de type Wordpress, une assistance
          pour la configuration est incluse.
        </template>
      </l-expand>
    </div>
  </l-dialog>
</template>

<script>
import LDialog from '../common/LDialog.vue'
import LExpand from '../common/LExpand.vue'

export default {
  name: 'OrderDetails',
  components: { LExpand, LDialog },

  props: {
    order: {
      type: Object,
      required: true
    },
    invoice: {
      type: Object,
      default: null
    }
  },

  methods: {
    handleClose (e) {
      this.$emit('close', e)
    }
  }
}
</script>

<style scoped>
.icon {
  font-size: 18px;
}
</style>
