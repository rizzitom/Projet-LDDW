<template>
  <landing-section class="py-20 md:py-36">
    <h2 class="text-5xl font-semibold mb-20">
      Nos forces
    </h2>

    <div class="grid grid-cols-12 gap-y-12 md:gap-16">
      <strenght-card icon="forum" class="col-span-12 lg:col-span-6">
        <template #name>
          Échange reactif
        </template>
        <template #description>
          Notre équipe est toujours à votre écoute grâce à un support de qualité
          et disponible 7 jours sur 7. Nous acceptons les changements en cours
          de développement et étudions chaque demande avec minutie.
        </template>
      </strenght-card>

      <strenght-card icon="published_with_changes" class="col-span-12 lg:col-span-6">
        <template #name>
          Révisions illimités
        </template>
        <template #description>
          Votre satisfaction est notre priorité. Nous mettons en place un nombre
          illimité de révisions pour garantir une qualité de livrable qui vous
          donnera le sourir.
        </template>
      </strenght-card>

      <strenght-card icon="euro" class="col-span-12 lg:col-span-6">
        <template #icon>
          euro
        </template>
        <template #name>
          Tarifs abordables
        </template>
        <template #description>
          Nous proposons à nos clients des tarifs réduits qui conviennent à leur
          budget. Payez la moîtié à la commande, l'autre moitié sera déduite
          lors du rendu du livrable.
        </template>
      </strenght-card>

      <strenght-card icon="bolt" class="col-span-12 lg:col-span-6">
        <template #name>
          Performance et sécurité
        </template>
        <template #description>
          Notre processus de développement comprend une phase de test avec la
          vérification de critères importants avec des outils comme
          <a
            href="https://developers.google.com/web/tools/lighthouse"
            class="underline"
          >
            Google Lighthouse</a>.
        </template>
      </strenght-card>

      <strenght-card icon="code" class="col-span-12 lg:col-span-6">
        <template #name>
          Développement moderne
        </template>
        <template #description>
          Notre environnement de développement varie en fonction des projets.
          Nous souhaitons toujours utiliser les dernières technologies dans le
          monde du développement web. C'est pour cette raison que nous utilisons
          des outils comme Vue, Firebase, Tailwind CSS et bien plus.
        </template>
      </strenght-card>
    </div>
  </landing-section>
</template>

<script>
import LandingSection from '../LandingSection.vue'
import StrenghtCard from '../StrenghtCard.vue'

export default {
  name: 'StrenghtsSection',

  components: { LandingSection, StrenghtCard }
}
</script>
