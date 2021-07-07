<template>
  <table class="w-full h-full">
    <thead>
      <tr class="grid grid-cols-7 text-left mb-6">
        <th class="col-span-2 font-medium">
          Montant
        </th>
        <th class="col-span-3 font-medium">
          Description
        </th>
        <th class="col-span-2 font-medium">
          Adresse
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(invoice, i) in invoices"
        :key="i"
        class="grid grid-cols-7 text-left border-b py-4 text-xl"
      >
        <td class="col-span-2 flex items-center pr-8">
          {{ `${invoice.amount / 100} ${invoice.currency.toUpperCase()}` }}
        </td>
        <td class="col-span-3 flex items-center pr-8">
          {{ invoice.description }}
        </td>
        <td class="col-span-2 flex items-center">
          <span class="material-icons link-icon"> link </span>
          <a :href="invoice.url" target="_blank" class="underline ml-3">
            Lien externe
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'InvoicesList',

  data () {
    return {
      invoices: [
        {
          id: 'fhjskfh21I34H24hk',
          amount: 14000,
          currency: 'eur',
          description: 'Lorem ipsum dolor sit amet consectetur',
          url: 'https://lorem.ipsum.com'
        },
        {
          id: 'fhjskfh21I34H24hk',
          amount: 14000,
          currency: 'eur',
          description: 'Lorem ipsum dolor sit amet consectetur',
          url: 'https://lorem.ipsum.com'
        },
        {
          id: 'fhjskfh21I34H24hk',
          amount: 14000,
          currency: 'eur',
          description: 'Lorem ipsum dolor sit amet consectetur',
          url: 'https://lorem.ipsum.com'
        }
      ]
    }
  },

  methods: {
    returnPrice (price) {
      return price * 2
    }
  }
}
</script>

<style scoped>
.link-icon {
  font-size: 16px;
}
</style>
