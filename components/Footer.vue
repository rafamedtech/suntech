<template>
  <footer class="w-full bg-black">
    <div class="mx-auto max-w-7xl overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
      <div class="mt-8 flex justify-center space-x-6">
        <a href="#">
          <Facebook :size="36" fill-color="#8a98aa" />
        </a>
        <a href="#">
          <Instagram :size="36" fill-color="#8a98aa" />
        </a>
        <nuxt-link to="/contact">
          <EmailOutline :size="36" fill-color="#8a98aa" />
        </nuxt-link>
      </div>
      <p class="mt-8 text-center text-base text-gray-400">
        © 2022 <a class="text-primary" href="https://rafamed.dev">Rafamed</a> ,
        Inc. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script>
import Facebook from 'icons/Facebook.vue'
import Instagram from 'icons/Instagram.vue'
import EmailOutline from 'icons/EmailOutline.vue'
export default {
  components: {
    Facebook,
    Instagram,
    EmailOutline,
  },
}
</script>
