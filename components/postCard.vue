<template>
  <nuxt-link
    :to="{ path: `/blog/${post.slug}` }"
    class="w-full rounded-lg bg-white shadow-lg"
  >
    <img
      v-if="post.better_featured_image"
      class="h-48 w-full rounded-t-lg object-cover"
      :src="post.better_featured_image.source_url"
      alt=""
    />
    <div class="flex flex-col p-6 text-gray-800">
      <h2 class="text-lg font-semibold text-primary">
        {{ post.title.rendered }}
      </h2>
      <!-- eslint-disable-line vue/no-v-html -->
      <div
        class="mt-3 text-sm text-gray-600"
        v-html="post.excerpt.rendered"
      ></div>

      <hr class="divider my-5 w-full" />
      <div class="flex items-center justify-center">
        <span class="text-center text-xs"
          >Publicado el
          <span class="text-primary">{{
            new Date(post.date).toLocaleString('es-MX', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })
          }}</span></span
        >
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>
