<template>
  <div>
    <img
      class="hidden h-[500px] object-cover lg:inline"
      :src="post.better_featured_image.source_url"
      width="1920"
      height="500"
      alt=""
    />
    <img
      class="h-96 object-cover lg:hidden"
      :src="post.better_featured_image.media_details.sizes.medium.source_url"
      width="1920"
      height="384"
      alt=""
    />
    <div
      class="mx-auto max-w-3xl transform px-4 pt-8 pb-16 sm:px-6 lg:px-8 lg:pt-20 lg:pb-24"
    >
      <h1 class="mx-auto mb-4 px-3 text-center text-4xl">
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
            Published on <span>{{ post.date }}</span>
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
  </div>
</template>

<script>
import marked from 'marked'
export default {
  // head: {
  //   title: `${this.post.title.rendered} | Suntech Electronics`,
  //   meta: [
  //     {
  //       hid: 'description',
  //       name: 'description',
  //       content: this.post.excerpt.rendered,
  //     },
  //   ],
  // },

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
