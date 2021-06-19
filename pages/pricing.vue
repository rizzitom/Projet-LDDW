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

      <div class="grid grid-cols-12 my-2 gap-y-12 md:gap-12">
        <l-pricing-card
          class="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-2 lg:col-end-6"
          name="Standard"
          :price="40"
          subheading="par jour"
          :features="[
            'Révisions illimités',
            'Support disponible 7j/7',
            'Avancement en temps réel',
            'Accessibilité et performance inclus'
          ]"
          warn="5 jours de travail minimum pour sélectionner cette formule"
        />
        <l-pricing-card
          class="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8 lg:col-end-12"
          name="Flexible"
          :price="7"
          subheading="par heure"
          :features="[
            'Révisions illimités',
            'Support disponible 7j/7',
            'Avancement en temps réel',
            'Accessibilité et performance inclus'
          ]"
        />

        <div
          class="col-span-12 lg:col-start-2 lg:col-end-12 mt-24 rounded-2xl shadow-lg p-8 bg-purple-600 text-white"
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
      </div>
    </landing-section>
  </div>
</template>

<script>
import LandingSection from '../components/landing/LandingSection.vue'
import LPricingCard from '../components/pricing/LPricingCard.vue'

export default {
  components: { LandingSection, LPricingCard },

  head () {
    return {
      title: 'Le design du web - Formules et tarifs'
    }
  }
}
</script>
