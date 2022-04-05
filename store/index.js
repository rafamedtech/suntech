export const state = () => ({
  request: {
    statusMsg: null,
  },
})

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('posts/fetchPosts')
  },
  async sendForm({ commit }, form) {
    const { data } = await this.$axios.post(
      'contact-form-7/v1/contact-forms/5/feedback',
      form
    )

    commit('setStatusMsg', data.message)
    setTimeout(() => {
      commit('setStatusMsg', null)
    }, 5000)

    this.$router.push('/')

    // eslint-disable-next-line no-console
    // console.log(data || error)
  },
}

export const getters = {
  getRequest: (state) => state.request,
}

export const mutations = {
  setStatusMsg(state, message) {
    state.request.statusMsg = message
  },
}
