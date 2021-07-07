<template>
  <table class="w-full h-full">
    <thead>
      <tr class="grid grid-cols-7 text-left">
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
        class="grid grid-cols-7 text-left border-b my-4 py-2 text-xl"
      >
        <td class="col-span-2">
          {{ invoice.amount }}
        </td>
        <td class="col-span-3">
          {{ invoice.description }}
        </td>
        <td class="col-span-2">
          {{ invoice.url }}
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
  }
}
</script>
