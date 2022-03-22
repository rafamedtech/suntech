<template>
  <article
    v-if="request.statusMsg"
    class="absolute right-4 top-6 animate-bounce rounded-md bg-white/80 p-4 shadow-lg"
  >
    <div class="flex items-center gap-x-2 text-gray-500">
      <p>{{ request.statusMsg }}</p>
      <SuccessIcon :size="36" fill-color="#fe6847" />
    </div>
  </article>
</template>

<script>
import CheckCircle from 'icons/CheckCircle.vue'

export default {
  components: {
    SuccessIcon: CheckCircle,
  },

  props: {
    request: {
      type: Object,
      required: true,
    },
  },
}
</script>
