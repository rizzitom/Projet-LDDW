<template>
  <landing-section class="bg-gray-100 py-36">
    <h2 class="text-5xl font-semibold mb-20">
      Votre projet en 4 étapes
    </h2>

    <div class="grid grid-cols-12 gap-y-10">
      <strenght-card class="col-start-2 col-span-10" icon="looks_one">
        <template #name>
          Confirmation du cahier des charges
        </template>
        <template #description>
          En se basant sur votre demande, nous
          établissons un premier cahier des charges qui peut être modifié avant
          que le développement ne commence. Tout doit être clarifié sur ce
          document et tous les détails doivent être notés. Une fois validé, le
          cahier des charge ne peut plus être changé.
        </template>
      </strenght-card>

      <strenght-card class="col-start-2 col-span-10" icon="looks_two">
        <template #name>
          Paiement et début du développement
        </template>
        <template #description>
          Losque le cahier des charges est validé, le paiement est alors en
          attente et nous attendons au moins 50% — ou la totalité — de la somme
          pour commencer le développement. Une fois reçu, vous en serez notifié
          et vous pourrez suivre l'avancement du projet depuis votre compte.
        </template>
      </strenght-card>

      <strenght-card class="col-start-2 col-span-10" icon="looks_3">
        <template #name>
          Révisions et validation
        </template>
        <template #description>
          Plusieurs révisions peuvent avoir lieu: en cours de développement ou
          bien quand l'équipe estime avoir terminé. Un lien de démonstration
          sera fourni pour avoir un premier retour. C'est à ce moment que vous
          pouvez échanger avec nous et demander une modification.
        </template>
      </strenght-card>

      <strenght-card class="col-start-2 col-span-10" icon="looks_4">
        <template #name>
          Livraison du projet
        </template>
        <template #description>
          Une fois que les deux parties se sont mises d'accord, le code source
          est remis au client. Une assistance peut être demandée pour la
          configuration.
        </template>
      </strenght-card>
    </div>
  </landing-section>
</template>

<script>
import LandingSection from '../LandingSection.vue'
import StrenghtCard from '../StrenghtCard.vue'

export default {
  name: 'StepsSection',

  components: { LandingSection, StrenghtCard }
}
</script>
