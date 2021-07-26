<template>
  <input
    type="file"
    class="text-2xl py-3 px-5 rounded-xl border focus:border-purple-700 focus:outline-none transition duration-150"
    @change="$emit('change', $event.target.files[0])"
  >
</template>

<script>
export default {
  name: 'LFileInput'
}
</script>
