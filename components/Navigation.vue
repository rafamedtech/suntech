<template>
  <header class="bg-black text-white">
    <nav
      class="container relative flex items-center justify-around gap-4 py-3 px-4 sm:flex-row"
    >
      <article class="flex items-center gap-x-4">
        <img
          :src="require('@/assets/images/Suntech.png')"
          alt="logo"
          class="w-1/2 lg:w-1/3"
        />
      </article>

      <ul
        class="absolute -bottom-48 right-12 z-50 flex flex-1 flex-col justify-end gap-y-4 gap-x-10 rounded-lg border border-orange-600 bg-black/50 px-8 py-2 text-right text-lg text-white md:static md:flex-row md:border-transparent md:bg-transparent"
      >
        <nuxt-link class="cursor-pointer" to="/">Inicio</nuxt-link>
        <nuxt-link class="cursor-pointer" to="/blog">Blog</nuxt-link>
        <nuxt-link class="cursor-pointer" to="/store">Tienda</nuxt-link>
        <nuxt-link class="cursor-pointer" to="/contact">Contacto</nuxt-link>
      </ul>

      <MenuDown
        class="focus:ring-primary-600 rounded-md p-1 focus:outline-none focus:ring-2 md:hidden"
        :size="36"
      />
    </nav>
  </header>
</template>

<script>
import MenuDown from 'icons/Menu.vue'
export default {
  components: {
    MenuDown,
  },
}
</script>
