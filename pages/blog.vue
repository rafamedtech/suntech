<template>
  <main class="bg-[#f3f4f6]">
    <section class="transform bg-black text-white">
      <div class="mx-auto max-w-6xl transform px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <h1 class="text-5xl font-medium">Blog</h1>
        <p class="pt-4 text-xl text-orange-600 lg:w-3/6">
          Keep up to date with everything we're working on.
        </p>
      </div>
    </section>
    <div class="mb-20 -mt-14 h-28 -skew-y-3 transform bg-black"></div>
    <section>
      <input type="text" />
      <button>Search</button>
    </section>
    <section
      class="container mt-12 mb-8 grid grid-cols-1 gap-8 px-4 md:grid-cols-3 lg:space-y-0"
    >
      <nuxt-link
        v-for="post in posts"
        :key="post.id"
        to="/"
        class="w-full rounded-lg bg-white shadow-lg"
      >
        <img
          class="h-48 w-full rounded-t-lg object-cover"
          :src="post.featured_media.url"
          alt=""
        />
        <div class="flex flex-col p-6 text-gray-800">
          <h2 class="text-lg font-semibold">
            {{ post.title.rendered }}
          </h2>
          <p class="mt-3 text-gray-600" v-html="post.excerpt.rendered"></p>
          <hr class="divider my-5 w-full" />
          <div class="flex items-center justify-between"></div>
        </div>
      </nuxt-link>
    </section>
  </main>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.getters['posts/getPosts']
    },
  },
  created() {
    this.$store.dispatch('posts/fetchPosts')
  },
}
</script>
