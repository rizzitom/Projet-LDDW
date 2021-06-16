<template>
  <landing-section class="py-20 md:py-36" @scroll.native="handle">
    <div class="flex">
      <div class="flex-1">
        <h1 class="text-7xl md:text-8xl font-semibold">
          Création de sites internet sur mesure
        </h1>
        <span class="w-9/12 flex my-10">
          Du premier contact au livrable, notre équipe vous accompagne dans
          chaque étape dans la création de votre projet. Tarifs flexibles et
          révisions inclus.
        </span>

        <div class="flex">
          <l-button class="mr-5">
            Devis gratuit
          </l-button>
          <l-button variant>
            Contact
          </l-button>
        </div>
      </div>
      <div
        class="bg-first-section-illustration w-1/2 bg-center bg-contain bg-no-repeat ml-10 hidden lg:block"
      />
    </div>
  </landing-section>
</template>

<script>
import LandingSection from '../LandingSection.vue'
import LButton from '../../common/LButton.vue'

export default {
  name: 'FirstSection',

  components: { LandingSection, LButton }
}
</script>
