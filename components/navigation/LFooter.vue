<template>
  <footer class="bg-gray-900 text-white grid grid-cols-12 pt-16 pb-36">
    <div
      class="col-start-2 col-span-10 grid sm:grid-cols-12 grid-cols-6 gap-14"
    >
      <div class="col-span-6 sm:col-span-4 lg:col-span-3">
        <span class="font-light text-2xl">© Le design du web</span>
      </div>

      <div class="col-span-3 sm:col-span-4 lg:col-span-3">
        <h3 class="font-medium">
          Nos réseaux sociaux
        </h3>

        <div class="mt-5 font-light text-2xl grid gap-y-2">
          <a
            href="https://discord.gg/8UmMrusK7f"
            class="hover:underline w-max"
            target="_blank"
          >
            Discord
          </a>
          <!-- <NuxtLink to="#" class="hover:underline w-max">
            Twitter
          </NuxtLink>
          <NuxtLink to="#" class="hover:underline w-max">
            Instagram
          </NuxtLink> -->
        </div>
      </div>

      <div class="col-span-3 sm:col-span-4 lg:col-span-3">
        <h3 class="font-medium">
          Informations
        </h3>

        <div class="mt-5 font-light text-2xl grid gap-y-2">
          <NuxtLink to="/faq" class="hover:underline w-max">
            FAQ
          </NuxtLink>
          <NuxtLink to="/pricing" class="hover:underline w-max">
            Tarifs
          </NuxtLink>
          <NuxtLink to="/contact" class="hover:underline w-max">
            Contact
          </NuxtLink>
        </div>
      </div>

      <div class="col-span-3 sm:col-span-4 lg:col-span-3">
        <h3 class="font-medium">
          Mon compte
        </h3>

        <div class="mt-5 font-light text-2xl grid gap-y-2">
          <NuxtLink
            :to="$store.state.currentUser ? '/account?tab=orders' : '/login'"
            class="hover:underline w-max"
          >
            Mes commandes
          </NuxtLink>
          <NuxtLink
            v-if="!isAdmin"
            :to="$store.state.currentUser ? '/account?tab=invoices' : '/login'"
            class="hover:underline w-max"
          >
            Mes factures
          </NuxtLink>
          <NuxtLink to="/register" class="hover:underline w-max">
            Créer un compte
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import global from '../../mixins/global'

export default {
  name: 'LFooter',
  mixins: [global]
}
</script>
