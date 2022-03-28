<template>
  <footer class="w-full bg-secondary">
    <div class="mx-auto max-w-7xl overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
      <div class="mt-8 flex justify-center space-x-6">
        <a
          href="https://www.facebook.com/Suntechgadgets"
          class="text-[#8a98aa] transition-all hover:-translate-y-2 hover:text-primary"
        >
          <Facebook :size="36" />
        </a>
        <a
          href="https://www.instagram.com/suntechelectronicos/"
          class="text-[#8a98aa] transition-all hover:-translate-y-2 hover:text-primary"
        >
          <Instagram :size="36" />
        </a>
        <a
          href="https://twitter.com/suntechelectron"
          class="text-[#8a98aa] transition-all hover:-translate-y-2 hover:text-primary"
        >
          <Twitter :size="36" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCA9wYLJCoxnTklp5xG-qtvA"
          class="text-[#8a98aa] transition-all hover:-translate-y-2 hover:text-primary"
        >
          <Youtube :size="36" />
        </a>
        <nuxt-link
          to="/contacto"
          class="text-[#8a98aa] transition-all hover:-translate-y-2 hover:text-primary"
        >
          <Email :size="36" />
        </nuxt-link>
      </div>
      <p class="mt-8 text-center text-base text-gray-400">
        © 2022 <a class="text-primary" href="https://rafamed.dev">Rafamed</a>,
        All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script>
import Facebook from 'icons/Facebook.vue'
import Instagram from 'icons/Instagram.vue'
import Youtube from 'icons/Youtube.vue'
import Twitter from 'icons/Twitter.vue'
import EmailOutline from 'icons/EmailOutline.vue'
export default {
  components: {
    Facebook,
    Instagram,
    Youtube,
    Twitter,
    Email: EmailOutline,
  },
}
</script>
