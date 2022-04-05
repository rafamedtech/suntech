<template>
  <nav class="bg-secondary text-sm text-gray-300">
    <div class="relative mx-auto max-w-6xl">
      <div class="flex items-center justify-between p-4">
        <nuxt-link
          :to="{ path: '/' }"
          class="w-1/2 p-1 focus:outline-none"
          title="Home"
        >
          ><img
            class="h-12"
            :src="require('@/assets/images/logo.png')"
            alt="Suntech logo"
        /></nuxt-link>
        <div class="hidden lg:flex lg:gap-12">
          <ul class="flex cursor-pointer items-center space-x-12 text-lg">
            <li class="group relative">
              <nuxt-link
                to="/blog"
                type="button"
                class="rounded-md px-2 py-1 focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 group-hover:text-primary"
              >
                Blog
              </nuxt-link>
            </li>

            <li class="group relative">
              <nuxt-link
                to="/contacto"
                type="button"
                class="rounded-md px-2 py-1 focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 group-hover:text-primary"
              >
                Contacto
              </nuxt-link>
            </li>
          </ul>
          <a
            href="https://suntechonline.tech"
            target="_blank"
            class="hidden items-center justify-center rounded-md bg-primary px-4 py-2 text-lg font-medium text-white hover:bg-primary/75 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 lg:flex"
          >
            Tienda <CartIcon />
          </a>
        </div>
        <button
          id="menu-toggle"
          class="rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-primary lg:hidden"
        >
          <svg
            id="menu-open"
            class="h-7 w-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            @click="toggleMenu"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            id="menu-close"
            class="hidden h-7 w-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <transition name="menu-fade">
        <div
          v-show="isOpen"
          id="mobile-menu"
          class="absolute inset-x-0 top-20 z-10 pb-4 lg:hidden"
        >
          <div
            class="mx-4 rounded-md bg-white p-4 text-center font-normal shadow-xl-even"
          >
            <div>
              <nuxt-link
                :to="{ path: '/blog' }"
                class="mb-4 text-lg text-secondary"
                @click.native="toggleMenu"
                >Blog</nuxt-link
              >
            </div>

            <hr class="divider my-6" />
            <nuxt-link
              :to="{ path: '/contacto' }"
              class="mb-4 text-lg text-secondary"
              @click.native="toggleMenu"
              >Contacto</nuxt-link
            >

            <hr class="divider my-6" />
            <a
              href="https://suntechonline.tech"
              target="_blank"
              class="flex items-center justify-center rounded-md bg-primary px-4 py-2 text-lg font-medium text-white hover:bg-primary/75 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Tienda <CartIcon />
            </a>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
import CartVariant from 'icons/CartVariant.vue'
export default {
  components: {
    CartIcon: CartVariant,
  },
  data: () => ({
    isOpen: false,
  }),

  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
