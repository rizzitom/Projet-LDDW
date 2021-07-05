<template>
  <div
    class="p-12 grid grid-cols-12 top-0 left-0 fixed w-full h-full bg-gray-800 bg-opacity-50 z-10 cursor-default items-center"
    @click="$emit('close')"
  >
    <div
      class="bg-white rounded-xl col-start-5 col-span-4 max-h-full overflow-y-scroll"
      @click.stop=""
    >
      <div
        class="py-4 px-6 flex justify-between items-center bg-purple-600 text-white rounded-t-xl"
      >
        <span class="text-2xl flex flex-1">{{ order.subject }}</span>
        <l-button variant class="ml-24" @click="$emit('close')">
          <span class="text-white">Fermer</span>
        </l-button>
      </div>

      <div class="overflow-y-scroll">
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
            Notre équipe étudie votre proposition de projet. Si vous le
            souhaitez, vous pouvez échanger avec nous à travers l'onglet de chat
            ou sur notre serveur discord. Si vous avez activé l'option, vous
            recevrez une notification par email vous informant de notre
            décision.
          </template>
        </l-expand>

        <l-expand
          class="p-6 border-t-0 rounded-t-none rounded-b-none"
          :class="{ 'opacity-60': order.step > 2 }"
        >
          <template #title>
            <div class="flex items-center">
              <span class="text-2xl">
                Paiement <span v-if="order.price">({{ order.price }}€)</span>
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
            de route pour être sûr que le résultat soit le plus fidèle à l'idée
            de départ. Vous pouvez discuter des révisions dans l'onglet de chat
            ou sur notre serveur discord.
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
            Le processus de développement est en cours. Lorsque la réalisation
            du projet sera terminée, vous aurez à disposition le code source via
            un dossier compressé. Pour les projets de type Wordpress, une
            assistance pour la configuration est incluse.
          </template>
        </l-expand>
      </div>
    </div>
  </div>
</template>

<script>
import LButton from '../common/LButton.vue'
import LExpand from '../common/LExpand.vue'

export default {
  name: 'OrderDetails',
  components: { LExpand, LButton },

  props: {
    order: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.icon {
  font-size: 18px;
}
</style>
