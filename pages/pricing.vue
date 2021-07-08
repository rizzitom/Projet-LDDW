<template>
  <div class="py-36 grid grid-cols-12">
    <div
      class="col-span-10 col-start-2 lg:col-start-4 lg:col-span-6 2xl:col-start-5 2xl:col-span-4 grid grid-cols-2 gap-x-12 gap-y-24 md:gap-y-32 items-center"
    >
      <div class="text-center col-span-2">
        <h1 class="text-6xl font-semibold mb-4">
          Nos formules et tarifs
        </h1>
        <span class="text-h3">
          Des tarifs abordables et des formules flexibles pour donner vie à
          n'importe quel type de projet.
        </span>
      </div>

      <l-pricing-card
        class="col-span-2 sm:col-span-1"
        name="Standard"
        :price="3.75"
        subheading="de l'heure soit 30€ la journée (8h)"
        :features="[
          'Possibilité de paiement en 2 fois',
          '5 révisions gratuites',
          'Support disponible 7j/7',
          'Suivi de commande en temps réel',
          'Accessibilité et performance inclus'
        ]"
        warn="5 jours de travail minimum pour sélectionner cette formule"
      />
      <l-pricing-card
        class="col-span-2 sm:col-span-1"
        name="Flexible"
        :price="5"
        subheading="de l'heure"
        :features="[
          '5 révisions gratuites',
          'Support disponible 7j/7',
          'Suivi de commande en temps réel',
          'Accessibilité et performance inclus'
        ]"
      />

      <div
        class="col-span-2 rounded-2xl shadow-lg p-8 bg-purple-600 text-white"
      >
        <h3 class="font-medium text-3xl mb-3">
          Un doute, une question ?
        </h3>
        <p>
          <NuxtLink class="underline inline-block" to="#">
            Contactez nous
          </NuxtLink>
          pour avoir des informations supplémentaires sur la tarification
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import LPricingCard from '../components/pricing/LPricingCard.vue'

export default {
  components: { LPricingCard },
  layout: 'MainLayout',

  head () {
    return {
      title: 'Le design du web - Formules et tarifs',
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
