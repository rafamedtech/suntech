<template>
  <div>
    <Navigation />
    <transition name="slide-fade">
      <Nuxt />
    </transition>
    <Notifications v-if="request" :request="request" />
    <Footer />
  </div>
</template>

<script>
export default {
  computed: {
    request() {
      return this.$store.getters.getRequest
    },
  },
}
</script>
