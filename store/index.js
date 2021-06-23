export const state = () => ({
  currentUser: null
})

export const mutations = {
  setUser (state, user) {
    state.currentUser = user
  },

  unsetUser (state) {
    state.currentUser = null
  },

  ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser }) => {
    if (!authUser) {
      state.currentUser = null
    } else {
      const { uid, email, emailVerified, displayName } = authUser
      state.currentUser = { uid, email, emailVerified, displayName }
    }
  }
}
