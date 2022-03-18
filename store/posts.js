export const state = () => ({
  posts: [],
  searchResult: [],
  post: {},
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
  searchPosts({ commit }, search) {
    commit('setSearchResult', search)
  },
}

export const getters = {
  getPosts: (state) => state.posts,
  getSinglePost: (state) => (slug) => {
    return state.posts.find((post) => post.slug === slug)
  },
  getSearchResult: (state) => (search) => {
    return state.posts.find(
      (post) => post.title.rendered.toLowerCase() === search.toLowerCase()
    )
  },
}

export const mutations = {
  setPosts: (state, posts) => (state.posts = posts),
  setSearchResult: (state, result) => (state.searchResult = result),
}
