<template>
  <div>
    <section class="blog-banner transform bg-primary text-white">
      <div class="mx-auto max-w-6xl transform px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-medium">Tienes alguna duda?</h1>
        <p class="pt-4 text-xl text-gray-300 lg:w-3/6">
          Contactanos, sera un gusto poder ayudarte.
        </p>
        <button
          type="button"
          class="mt-6 flex items-center rounded-lg bg-white px-6 py-3 font-medium text-gray-600 hover:text-primary"
          aria-label="Send us a message"
        >
          <svg
            class="mr-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
          <a href="#form">Envianos un mensaje!</a>
        </button>
      </div>
    </section>
    <div
      class="mb-20 -mt-10 h-20 -skew-y-3 transform bg-primary xl:-mt-12 xl:h-24"
    ></div>
    <section
      class="mx-auto max-w-6xl transform px-4 pb-12 sm:px-6 lg:mt-32 lg:px-8 lg:pb-20"
    >
      <div class="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:space-y-0">
        <div
          class="flex flex-col items-center space-y-2 rounded-lg bg-white p-8 px-6 pb-6"
        >
          <svg
            class="h-10 w-10 text-primary"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <h2 class="text-center">Departamento de ventas</h2>
          <p class="text-center text-gray-600">
            contactanos para mas informacion! Estaremos felices de ayudarte.
          </p>
          <a class="text-primary" href="tel:555-123-4567">(555) 123-4567</a>
        </div>
        <div
          class="flex flex-col items-center space-y-2 rounded-lg bg-white p-8 px-6 pb-6"
        >
          <svg
            class="h-10 w-10 text-primary"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <h2 class="text-center">Tech support</h2>
          <p class="text-center text-gray-600">
            Te ayudaremos con cualquier problema que tengas.
          </p>
          <a class="text-primary" href="emailto:support@tailmars.com"
            >support@tailmars.com</a
          >
        </div>
        <div
          class="flex flex-col items-center space-y-2 rounded-lg bg-white p-8 px-6 pb-6"
        >
          <svg
            class="h-10 w-10 text-primary"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <h2 class="text-center">Proyectos personalizados</h2>
          <p class="text-center text-gray-600">
            Si tus necesidades son muy especificas tambien te ayudamos.
          </p>
          <a class="text-primary" href="emailto:inquiries@tailmars.com"
            >inquiries@tailmars.com</a
          >
        </div>
      </div>
    </section>
    <!-- <section
      class="mx-auto max-w-6xl transform px-4 pb-20 sm:px-6 lg:mb-8 lg:px-8"
    >
      <h3 class="pb-3 text-3xl">Meet our team</h3>
      <span
        >Our support team is available 24/7 for any issues you might have with
        our products</span
      >
      <div
        class="mt-8 grid grid-cols-1 place-items-center gap-3 space-y-5 md:grid-cols-2 md:space-y-0 lg:grid-cols-4"
      >
        <figure class="flex flex-col">
          <img
            class="mb-3 h-44 w-44 rounded-lg object-cover"
            src="https://source.unsplash.com/mEZ3PoFGs_k"
            alt=""
          />
          <figcaption>
            <p class="font-semibold">Jeanne Beahan</p>
            <p>Baumbach - Lueilwitz</p>
          </figcaption>
        </figure>
        <figure class="flex flex-col">
          <img
            class="mb-3 h-44 w-44 rounded-lg object-cover"
            src="https://source.unsplash.com/7YVZYZeITc8"
            alt=""
          />
          <figcaption>
            <p class="font-semibold">Dr. Kenny Smith</p>
            <p>Farrell LLC</p>
          </figcaption>
        </figure>
        <figure class="flex flex-col">
          <img
            class="mb-3 h-44 w-44 rounded-lg object-cover"
            src="https://source.unsplash.com/RGtSTDmmcCk"
            alt=""
          />
          <figcaption>
            <p class="font-semibold">Victoria Kertzmann</p>
            <p>Little - Bins</p>
          </figcaption>
        </figure>
        <figure class="flex flex-col">
          <img
            class="mb-3 h-44 w-44 rounded-lg object-cover"
            src="https://source.unsplash.com/O3ymvT7Wf9U"
            alt=""
          />
          <figcaption>
            <p class="font-semibold">Terry Kertzmann</p>
            <p>Little and Sons</p>
          </figcaption>
        </figure>
      </div>
    </section> -->
    <section
      class="mx-auto max-w-2xl transform px-4 pb-20 sm:px-6 lg:mb-8 lg:px-8"
    >
      <h1 id="form" class="mb-2 text-primary">Platiquemos!</h1>
      <p class="mb-4 text-gray-600">
        Si hay algo en lo que podamos ayudarte, simplemente haznos saber.
        Estaremos mas que felices de ofrecerle una solucion.
      </p>
      <ContactForm />
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    formData: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  }),

  head: {
    title: 'Contacto | Suntech Electronics',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Contacto de Suntech Electronics. Si tienes alguna duda o sugerencia, puedes escribirnos a nuestro correo electrónico o enviar un mensaje desde el formulario',
      },
    ],
  },

  methods: {
    onSubmit() {
      const formData = new FormData()
      formData.append('your-name', this.formData.name)
      formData.append('your-email', this.formData.email)
      formData.append('your-phone', this.formData.phone)
      formData.append('your-message', this.formData.message)

      this.$store.dispatch('sendForm', formData)
      this.formData = {
        name: '',
        email: '',
        phone: '',
        message: '',
      }
    },
  },
}
</script>

<style scoped>
.blog-banner {
  background-image: url('@/assets/images/contact.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
}
</style>
