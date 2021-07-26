export default {
  computed: {
    isAdmin () {
      const currentUser = this.$store.state.currentUser
      if (currentUser && currentUser.email === 'bonjour@ledesignduweb.fr') {
        return true
      } else {
        return false
      }
    }
  }
}
