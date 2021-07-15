export default {
  computed: {
    isAdmin () {
      return this.$store.state.currentUser.email === 'bonjour@ledesignduweb.fr'
    }
  }
}
