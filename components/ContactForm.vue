<template>
  <form @submit.prevent="onSubmit">
    <fieldset>
      <legend class="sr-only">Formulario de contacto</legend>
      <label for="your-name">
        <input
          v-model="formData.name"
          class="border-1 mb-3 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-primary focus:ring-transparent"
          name="your-name"
          type="text"
          placeholder="Nombre"
          aria-label="Tu nombre"
        />
      </label>
      <label for="your-email">
        <input
          v-model="formData.email"
          class="border-1 mb-3 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-primary focus:ring-transparent"
          name="your-email"
          type="email"
          placeholder="Correo Electronico"
          aria-label="Direccion de correo electronico"
        />
      </label>
      <label for="your-phone">
        <input
          v-model="formData.phone"
          class="border-1 mb-3 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-primary focus:ring-transparent"
          name="your-phone"
          type="tel"
          placeholder="Numero de telefono"
          aria-label="Numero de telefono"
        />
      </label>
      <label for="message">
        <textarea
          v-model="formData.message"
          class="border-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-primary focus:ring-transparent"
          name="your-message"
          cols="30"
          rows="5"
          placeholder="En que podemos ayudarte!"
          aria-label="Tu mensaje"
        ></textarea>
      </label>
    </fieldset>
    <button
      type="submit"
      class="mt-3 w-full rounded-lg bg-primary px-6 py-3 text-lg font-medium text-white hover:bg-primary/75"
      aria-label="Enviar mensaje"
    >
      Enviar mensaje
    </button>
  </form>
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
  methods: {
    onSubmit() {
      const formData = new FormData()
      formData.append('your-name', this.formData.name)
      formData.append('your-email', this.formData.email)
      formData.append('your-phone', this.formData.phone)
      formData.append('your-message', this.formData.message)
      this.$store.dispatch('sendForm', formData)

      if (this.$route.path === '/') {
        window.scrollTo(0, 0)
      }

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
