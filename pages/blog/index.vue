<template>
  <main class="bg-[#f3f4f6]">
    <section class="blog-banner transform bg-primary text-white">
      <div class="mx-auto max-w-6xl transform px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <h1 class="text-5xl font-medium text-primary">Blog</h1>
        <p class="pt-4 text-xl lg:w-3/6">
          Aqui podras encontrar nuestros ultimos articulos.
        </p>
        <button
          type="button"
          class="mt-6 flex items-center rounded-lg bg-white px-6 py-3 font-medium text-gray-600 opacity-0 hover:text-primary"
          aria-label="Send us a message"
        >
          <span>Visita nuestro blog!</span>
        </button>
      </div>
    </section>
    <div
      class="mb-20 -mt-10 h-20 -skew-y-3 transform bg-primary xl:-mt-12 xl:h-24"
    ></div>
    <div class="mx-auto max-w-6xl transform px-4 pb-8 sm:px-6 lg:mt-24 lg:px-8">
      <form class="relative mt-1 rounded-lg lg:mb-16">
        <div class="absolute inset-y-0 left-0 flex items-center">
          <label for="search" class="sr-only">Search</label>
          <svg
            class="mx-4 h-6 w-6 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          v-model="search"
          type="text"
          name="search"
          class="w-full rounded-lg border border-gray-300 px-4 py-4 pl-12 pr-32 focus:border-transparent focus:outline-primary focus:ring-transparent"
          placeholder="Empieza a escribir para buscar en nuestro blog"
        />
      </form>
    </div>
    <section
      class="container mt-12 mb-8 grid grid-cols-1 gap-8 px-4 md:grid-cols-3 lg:space-y-0"
    >
      <PostCard v-for="post in searchPosts" :key="post.id" :post="post" />
    </section>
  </main>
</template>

<script>
export default {
  data: () => ({
    posts: [],
    search: '',
  }),

  head: {
    title: 'Blog | Suntech Electronics',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Aqui podras encontrar nuestros ultimos articulos.',
      },
    ],
  },

  computed: {
    searchPosts() {
      return this.posts.filter((post) =>
        post.title.rendered.toLowerCase().includes(this.search.toLowerCase())
      )
    },
    getPosts() {
      return this.$store.getters['posts/getPosts']
    },
  },
  async created() {
    // this.$store.dispatch('posts/fetchPosts')
    // this.posts = this.getPosts
    try {
      const { data, error } = await this.$axios.get(
        'https://suntech.local/wp-json/wp/v2/posts/'
      )
      this.posts = data
      if (error) throw error
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },
}
</script>

<style scoped>
.blog-banner {
  background-image: url('@/assets/images/blog.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
}
</style>
