<template>
  <div class="py-36">
    <landing-section>
      <div class="text-center mb-24">
        <h1 class="text-6xl font-semibold mb-4">
          Nos formules et tarifs
        </h1>
        <span class="text-h3 md:w-1/2 block m-auto">
          Des tarifs abordables et des formules flexibles pour donner vie à
          n'importe quel type de projet.
        </span>
      </div>

      <div class="flex flex-col sm:flex-row sm:justify-center sm:items-end">
        <l-pricing-card
          class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 sm:mr-8 mb-12 sm:mb-0"
          name="Standard"
          :price="40"
          subheading="par jour"
          :features="[
            '5 révisions gratuites',
            'Support disponible 7j/7',
            'Suivi de commande en temps réel',
            'Accessibilité et performance inclus'
          ]"
          warn="5 jours de travail minimum pour sélectionner cette formule"
        />
        <l-pricing-card
          class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
          name="Flexible"
          :price="7"
          subheading="par heure"
          :features="[
            '5 révisions gratuites',
            'Support disponible 7j/7',
            'Suivi de commande en temps réel',
            'Accessibilité et performance inclus'
          ]"
        />
      </div>
      <div
        class="w-full mt-24 rounded-2xl shadow-lg p-8 bg-purple-600 text-white"
      >
        <h3 class="font-medium text-3xl mb-3">
          Un doute, une question ?
        </h3>
        <p>
          <NuxtLink class="underline inline-block" to="contact">
            Contactez nous
          </NuxtLink>
          pour avoir des informations supplémentaires sur la tarification
        </p>
      </div>
    </landing-section>
  </div>
</template>

<script>
import LandingSection from '../components/landing/LandingSection.vue'
import LPricingCard from '../components/pricing/LPricingCard.vue'

export default {
  components: { LandingSection, LPricingCard },
  layout: 'main',

  head () {
    return {
      title: 'Le design du web - Formules et tarifs'
    }
  }
}
</script>
