<template>
  <div
    class="w-full h-full"
    :class="{ 'flex justify-center items-center': invoices.length == 0 }"
  >
    <table v-if="invoices.length > 0">
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
            {{
              `${invoice.items[0].amount /
                100} ${invoice.items[0].currency.toUpperCase()}`
            }}
          </td>
          <td class="col-span-3 flex items-center pr-8">
            {{ invoice.items[0].description }}
          </td>
          <td class="col-span-2 flex items-center">
            <span class="material-icons link-icon"> link </span>
            <a
              :href="invoice.stripeInvoiceUrl"
              target="_blank"
              class="underline ml-3"
            >
              Lien externe
            </a>
          </td>
        </tr>
      </tbody>
    </table>

    <l-empty v-else title="Aucune facture" />
  </div>
</template>

<script>
import LEmpty from '../common/LEmpty.vue'

export default {
  name: 'InvoicesList',
  components: { LEmpty },

  props: {
    invoices: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.link-icon {
  font-size: 16px;
}
</style>
