<template>
  <footer class="w-full bg-[#2C394B]">
    <div class="mx-auto max-w-7xl overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
      <div class="mt-8 flex justify-center space-x-6">
        <a
          href="#"
          class="text-[#8a98aa] transition-all hover:-translate-y-2 hover:text-primary"
        >
          <Facebook :size="36" />
        </a>
        <a
          href="#"
          class="text-[#8a98aa] transition-all hover:-translate-y-2 hover:text-primary"
        >
          <Instagram :size="36" />
        </a>
        <nuxt-link
          to="/contact"
          class="text-[#8a98aa] transition-all hover:-translate-y-2 hover:text-primary"
        >
          <Email :size="36" />
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
    Email: EmailOutline,
  },
}
</script>
