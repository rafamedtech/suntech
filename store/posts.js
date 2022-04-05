export const state = () => ({
  posts: [],
  searchResult: [],
  post: {},
})

export const actions = {
  async fetchPosts({ commit }) {
    try {
      const { error, data } = await this.$axios.get('wp/v2/posts/')

      // eslint-disable-next-line no-console
      // console.log(data || error)
      commit('setPosts', data)

      if (error) throw error
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },
  searchPosts({ commit }, search) {
    commit('setSearchResult', search)
  },

  async fetchPost({ commit }, slug) {
    try {
      const { error, data } = await this.$axios.get(`wp/v2/posts?slug=${slug}`)

      // eslint-disable-next-line no-console
      console.log(data[0] || error)
      commit('setSinglePost', data[0])

      if (error) throw error
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },
}

export const getters = {
  getPosts: (state) => state.posts,
  getSinglePost: (state) => state.post,
  // getSinglePost: (state) => (slug) => {
  //   return state.posts.find((post) => post.slug === slug)
  // },
  getSearchResult: (state) => (search) => {
    return state.posts.find(
      (post) => post.title.rendered.toLowerCase() === search.toLowerCase()
    )
  },
}

export const mutations = {
  setPosts: (state, posts) => (state.posts = posts),
  setSinglePost: (state, post) => (state.post = post),
  setSearchResult: (state, result) => (state.searchResult = result),
}
