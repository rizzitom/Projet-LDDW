<template>
  <div class="shadow h-auto rounded-xl">
    <div class="p-8 h-auto">
      <h2 class="text-4xl font-medium">
        {{ name }}
      </h2>

      <div class="flex flex-col items-center my-14">
        <div class="text-7xl font-light block">
          {{ price }}<span class="text-3xl">€</span>
        </div>
        <span class="text-center">{{ subheading }}</span>
      </div>

      <div class="my-12">
        <ul class="text-2xl">
          <li
            v-for="(f, i) in features"
            :key="i"
            class="flex items-center py-4"
            :class="{ 'border-b': i !== features.length - 1 }"
          >
            <span class="material-icons mr-5 text-green-600">
              check
            </span>
            {{ f }}
          </li>
        </ul>
      </div>

      <l-anchor class="w-full block text-center" :to="to">
        Sélectionner
      </l-anchor>
    </div>
    <div
      v-if="warn"
      class="bg-yellow-200 py-4 px-3 rounded-b-xl text-2xl text-center leading-relaxed"
    >
      {{ warn }}
    </div>
  </div>
</template>

<script>
import LAnchor from '../common/LAnchor.vue'

export default {
  name: 'LPricingCard',
  components: { LAnchor },

  props: {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    subheading: {
      type: String,
      required: true
    },
    features: {
      type: Array,
      required: true
    },
    warn: {
      type: String,
      default: null
    },
    to: {
      type: Object,
      required: true
    }
  }
}
</script>
