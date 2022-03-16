export const state = () => ({
  posts: [],
})

export const actions = {
  async fetchPosts({ commit }) {
    const { error, data } = await this.$axios.get(
      'https://suntech.local/wp-json/wp/v2/posts/'
    )

    // eslint-disable-next-line no-console
    console.log(data || error)
    commit('setPosts', data)
  },
}

export const getters = {
  getPosts: (state) => state.posts,
}

export const mutations = {
  setPosts: (state, posts) => (state.posts = posts),
}
