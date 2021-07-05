<template>
  <div class="h-full">
    <ul v-if="orders && orders.length > 0" class="grid gap-y-12">
      <li v-for="(o, i) in orders" :key="i">
        <order-card :order="o" />
      </li>
    </ul>
    <div v-else class="h-full flex justify-center items-center">
      <l-empty title="Aucune commande" />
    </div>
  </div>
</template>

<script>
import LEmpty from '../common/LEmpty.vue'
import OrderCard from './OrderCard.vue'

export default {
  name: 'OrdersList',
  components: { OrderCard, LEmpty },

  data () {
    return {
      orders: [
        {
          id: '9r4ejtz438Fe',
          date: new Date(),
          formula: 1,
          subject: 'Création de blog et site vitrine',
          message:
            "Bonjour il me faut un site avec plusieurs sections (accueil, infos, blog, notre team). J'aimerais que ce projet soit fait en deux mois maximum, est-ce que vous pouvez vous en charger ?",
          step: 1,
          availableRevisions: 1
        },
        {
          id: '2ajf4378Fjz',
          date: new Date(),
          formula: 2,
          subject: 'site avec boutique',
          message:
            "J'ai besoin d'un blog avec une partie boutique. C'est un projet personnel et il me le faut au plus vite. Je n'ai pas de design. Est-ce que vous pouvez vous en occuper ?",
          step: 2,
          availableRevisions: 0,
          price: 129.99
        },
        {
          id: '7jt8adYT4Rh',
          date: new Date(),
          formula: 1,
          subject: 'refonte application web',
          message:
            "Bonjour nous recherchons une équipe de développeurs pour se charger de refaire la partie front de notre application. Nous avons une partie back avec une manipulation d'APIs. Merci de nous répondre rapidement",
          step: 3,
          availableRevisions: 2,
          price: 129.99
        },
        {
          id: '7jt8adYT4Rh',
          date: new Date(),
          formula: 1,
          subject: 'refonte application web',
          message:
            "Bonjour nous recherchons une équipe de développeurs pour se charger de refaire la partie front de notre application. Nous avons une partie back avec une manipulation d'APIs. Merci de nous répondre rapidement",
          step: 4,
          availableRevisions: 4,
          price: 129.99
        },
        {
          id: '7jt8adYT4Rh',
          date: new Date(),
          formula: 1,
          subject: 'refonte application web',
          message:
            "Bonjour nous recherchons une équipe de développeurs pour se charger de refaire la partie front de notre application. Nous avons une partie back avec une manipulation d'APIs. Merci de nous répondre rapidement",
          step: 5,
          availableRevisions: 3,
          price: 129.99
        },
        {
          id: '7jt8adYT4Rh',
          date: new Date(),
          formula: 1,
          subject: 'refonte application web',
          message:
            "Bonjour nous recherchons une équipe de développeurs pour se charger de refaire la partie front de notre application. Nous avons une partie back avec une manipulation d'APIs. Merci de nous répondre rapidement",
          canceled: true,
          cancelationReason:
            "Nous avons décidé de refuser votre projet par manque d'expérience sur le sujet.",
          availableRevisions: 5
        }
      ]
    }
  }
}
</script>
