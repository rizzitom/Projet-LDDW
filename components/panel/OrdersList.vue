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
            'Bonjour il me faut un site avec plusieurs sections (accueil, infos, blog, notre team)',
          step: 2
        },
        {
          id: '2ajf4378Fjz',
          date: new Date(),
          formula: 2,
          subject: 'site avec boutique',
          message: '',
          step: 1
        },
        {
          id: '7jt8adYT4Rh',
          date: new Date(),
          formula: 1,
          subject: 'refonte application web',
          message: '',
          step: 3
        },
        {
          id: '7jt8adYT4Rh',
          date: new Date(),
          formula: 1,
          subject: 'refonte application web',
          message: '',
          step: 4
        }
      ]
    }
  }
}
</script>
