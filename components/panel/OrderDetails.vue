<template>
  <div
    class="grid grid-cols-12 top-0 left-0 fixed w-full h-full bg-gray-800 bg-opacity-50 z-10 cursor-default items-center"
    @click="$emit('close')"
  >
    <div class="bg-white rounded-xl col-start-5 col-span-4" @click.stop="">
      <l-expand class="p-6 rounded-b-none">
        <template #title>
          <div class="flex items-center">
            Validation
            <span class="material-icons icon ml-3 text-green-500">
              check
            </span>
          </div>
        </template>
        <template #description>
          Notre équipe étudie votre proposition de projet. Si vous le souhaitez,
          vous pouvez échanger avec nous à travers l'onglet.
        </template>
      </l-expand>

      <l-expand class="p-6 border-t-0 rounded-t-none rounded-b-none">
        <template #title>
          Paiement
        </template>
        <template #description>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, ea
          magnam recusandae ipsum iure culpa facere eos deleniti debitis quos?
          Numquam atque odit, amet culpa eaque animi veniam iure maxime.
        </template>
      </l-expand>

      <l-expand class="p-6 border-t-0 rounded-t-none rounded-b-none">
        <template #title>
          Révision(s)
        </template>
        <template #description>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, ea
          magnam recusandae ipsum iure culpa facere eos deleniti debitis quos?
          Numquam atque odit, amet culpa eaque animi veniam iure maxime.
        </template>
      </l-expand>

      <l-expand class="p-6 border-t-0 rounded-b-none">
        <template #title>
          Livraison
        </template>
        <template #description>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, ea
          magnam recusandae ipsum iure culpa facere eos deleniti debitis quos?
          Numquam atque odit, amet culpa eaque animi veniam iure maxime.
        </template>
      </l-expand>
    </div>
  </div>
</template>

<script>
import LExpand from '../common/LExpand.vue'

export default {
  name: 'OrderDetails',
  components: { LExpand }
}
</script>

<style scoped>
.icon {
  font-size: 18px;
}
</style>
