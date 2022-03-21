// export const state = () => ({
//   count: 0,
// })

export const actions = {
  //   async nuxtServerInit({ dispatch }, context) {
  //     await dispatch('posts/fetchPosts')
  //   },
  async sendForm({ commit }, form) {
    const { error, data } = await this.$axios.post(
      'https://suntech.local/wp-json/contact-form-7/v1/contact-forms/17/feedback',
      form
    )
    // eslint-disable-next-line no-console
    console.log(data || error)
  },
}
