<template>
  <div class="pb-36">
    <h1
      class="py-36 mb-36 text-white text-5xl font-semibold text-center bg-purple-600"
    >
      Foire aux questions
    </h1>

    <div class="grid grid-cols-12">
      <l-expand
        class="col-span-10 lg:col-span-6 col-start-2 lg:col-start-4 bg-white rounded-t-xl rounded-b-none border-b-0 pb-4"
      >
        <template #title>
          Comment suivre l'avancement de ma commande ?
        </template>
        <template #description>
          Vous pouvez à tout moment vérifier l'étape de votre commande dans
          votre espace client. La mise à jour est en temps réel et vous pouvez
          être notifié par email si vous le souhaitez.
        </template>
      </l-expand>

      <l-expand
        class="col-span-10 lg:col-span-6 col-start-2 lg:col-start-4 bg-white border-t-0 rounded-t-none rounded-b-none border-b-0 pb-4"
      >
        <template #title>
          Comment est-ce que règle ma commande ?
        </template>
        <template #description>
          Lors du règlement de votre commande, vous devez utiliser Paypal. Nous
          travaillons à l'intégration de services comme Stripe pour continuer à
          automatiser notre processus.
        </template>
      </l-expand>

      <l-expand
        class="col-span-10 lg:col-span-6 col-start-2 lg:col-start-4 bg-white border-t-0 rounded-b-none rounded-t-none border-b-0 pb-4"
      >
        <template #title>
          Proposez-vous des services dans le webdesign ?
        </template>
        <template #description>
          Si vous n'avez pas d'idée précise, nous essaieront toujours de
          proposer un design simple et intuitif pour votre projet.
        </template>
      </l-expand>

      <l-expand
        class="col-span-10 lg:col-span-6 col-start-2 lg:col-start-4 bg-white rounded-t-none rounded-b-xl border-t-0"
      >
        <template #title>
          Quels types de site réalisez vous ?
        </template>
        <template #description>
          Nous sommes prêts à réaliser n'importe quel type de site dans la
          limite de notre stack technique. Nous refusons catégoriquement les
          projets e-commerce qui sont trop gros pour notre équipe.
        </template>
      </l-expand>

      <l-expand
        class="col-span-10 lg:col-span-6 col-start-2 lg:col-start-4 bg-white mt-12"
      >
        <template #title>
          Ma question n'est pas listée
        </template>
        <template #description>
          Si vous souhaitez nous poser une question, vous pouvez nous contacter
          via les liens en pied de page ou encore via notre
          <NuxtLink to="#" class="underline">
            formulaire de contact.
          </NuxtLink>
        </template>
      </l-expand>
    </div>
  </div>
</template>

<script>
import LExpand from '../components/common/LExpand.vue'
export default {
  components: { LExpand },
  layout: 'main',

  head () {
    return {
      title: 'Le design du web - FAQ',
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
