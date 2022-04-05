<template>
  <main class="relative">
    <button
      class="absolute left-2 top-2 flex items-center justify-center gap-x-2 rounded-md border border-primary bg-primary px-4 py-2 text-lg font-medium text-white transition-all hover:bg-primary/75 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 lg:flex"
      @click="$router.go(-1)"
    >
      <ArrowLeft /> Regresar
    </button>
    <img
      v-if="post.better_featured_image"
      class="hidden h-[500px] object-cover lg:inline"
      :src="post.better_featured_image.source_url"
      width="1920"
      height="500"
      alt=""
    />
    <!-- <img
      v-if="post.better_featured_image"
      class="h-96 object-cover lg:hidden"
      :src="post.better_featured_image.media_details.sizes.medium.source_url"
      width="1920"
      height="384"
      alt=""
    /> -->

    <div
      class="mx-auto max-w-3xl transform px-4 pt-8 pb-16 sm:px-6 lg:px-8 lg:pt-20 lg:pb-24"
    >
      <h1 class="mx-auto mb-4 px-3 text-center text-4xl text-primary">
        {{ post.title.rendered }}
      </h1>
      <h3
        class="px-3 pb-6 text-center text-gray-500"
        v-html="post.excerpt.rendered"
      >
        {{ post.excerpt.rendered }}
      </h3>
      <hr class="divider w-11/12" />
      <div class="flex items-center justify-between py-4">
        <div class="flex flex-col">
          <p class="text-sm">
            Publicado el
            <span class="text-primary">{{
              new Date(post.date).toLocaleString('es-MX', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })
            }}</span>
          </p>
        </div>
      </div>
      <hr class="divider w-full" />
      <div
        class="prose-primary prose mx-auto max-w-3xl transform space-y-5 px-4 pt-6 text-gray-700 sm:px-6 lg:px-8 lg:pt-16 lg:pb-8"
        v-html="markdown"
      >
        <hr class="divider !m-0 w-11/12" />
      </div>
    </div>
  </main>
</template>

<script>
import marked from 'marked'
import ChevronLeft from 'icons/ChevronLeft.vue'
export default {
  components: {
    ArrowLeft: ChevronLeft,
  },

  head() {
    return {
      title: `${this.post.title.rendered} | Suntech Electronics`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.excerpt.rendered,
        },
      ],
    }
  },

  computed: {
    post() {
      return this.$store.getters['posts/getSinglePost'](this.$route.params.slug)
    },
    markdown() {
      return marked(this.post.content.rendered)
    },
  },

  created() {
    this.$store.dispatch('posts/fetchPosts')
  },
}
</script>
