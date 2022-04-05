<template>
  <main>
    <!-- Hero section -->
    <section class="bg-white py-20">
      <div
        class="container flex flex-col px-4 sm:px-6 lg:flex-row-reverse lg:gap-x-4 lg:px-8"
      >
        <img
          src="@/assets/images/hero.svg"
          alt=""
          class="mx-auto md:w-2/3 lg:w-1/2"
        />
        <div
          class="flex flex-col items-center justify-center gap-y-2 pt-8 text-center lg:items-start lg:pt-0 lg:pl-16 lg:text-left"
        >
          <h1
            class="my-6 text-3xl font-semibold text-secondary/75 sm:text-5xl sm:leading-tight"
          >
            Trabaja como un profesional,
            <br />
            con herramientas profesionales
          </h1>
          <p class="w-4/6 text-lg text-gray-500">
            Equipamiento tecnólogico para máxima productividad.
          </p>
          <a
            href="https://suntechonline.tech"
            target="_blank"
            class="flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-lg font-medium text-white hover:bg-primary/75 hover:text-white focus:ring-2 focus:ring-primary focus:ring-offset-2 lg:flex"
          >
            Comprar <ArrowRight />
          </a>
        </div>
      </div>
    </section>

    <!-- Features section -->
    <section
      class="mx-auto flex flex-col items-center justify-center bg-secondary px-4 pt-20 pb-24 sm:px-6 lg:px-8"
    >
      <div class="container flex flex-col items-center gap-8 md:flex-row">
        <figure class="w-full md:w-1/2">
          <img
            :src="require('@/assets/images/about.svg')"
            alt=""
            class="h-60 w-full"
          />
        </figure>
        <div
          class="flex max-w-[50ch] flex-col gap-y-4 text-center md:text-left"
        >
          <h2 class="text-4xl text-primary">¿Quiénes somos?</h2>
          <p class="font-light text-gray-100">
            Somos una empresa donde diariamente nuestro equipo busca cumplir
            nuestra principal misión: ofrecer el mejor servicio con la mejor
            solución en tecnología.
          </p>
        </div>
      </div>
    </section>

    <!-- Parallax collage section -->
    <section
      class="w-full bg-gradient-to-b from-gray-100 to-white py-8 sm:py-20"
    >
      <div
        class="mx-auto flex max-w-6xl flex-col gap-y-4 px-4 sm:flex-row sm:px-6 md:px-8"
      >
        <div class="relative mx-auto flex px-8 sm:order-2 sm:w-2/3">
          <div class="relative ml-auto h-full w-full">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1618858510480-d079a17fd586?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              class="rellax absolute right-0 top-20 z-30 h-auto w-[60%] rounded-lg object-cover object-center shadow-md"
            />
            <img
              alt=""
              src="https://images.unsplash.com/photo-1640622661329-67f406a77d53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              class="rellax relative left-0 top-0 z-20 h-auto w-1/2 rounded-lg object-cover object-center shadow-md"
            />
            <img
              alt=""
              src="https://images.unsplash.com/photo-1560732488-6b0df240254a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              class="rellax absolute -bottom-16 right-8 z-10 h-auto w-[50%] rounded-lg object-cover object-center shadow-md md:bottom-24 lg:-bottom-16"
            />
          </div>
        </div>
        <div class="flex w-full items-center pt-24 sm:pt-0 md:w-2/3">
          <div class="mx-auto sm:pr-6">
            <h1 class="text-3xl text-secondary">
              Nosotros tenemos el equipamiento necesario
              <br />
              <span class="text-primary"
                >Para que te enfoques en lo importante de tu trabajo
              </span>
            </h1>
            <p class="mt-6 text-lg text-gray-500">
              Toma ventaja de nuestra experiencia para obtener las mejores
              herramientas.
            </p>
            <div class="mt-8 flex flex-row justify-between gap-2">
              <div>
                <h3 class="text-lg text-primary">100%</h3>
                <p class="text-secondary">Satisfacción</p>
              </div>
              <div>
                <h3 class="text-lg text-primary">Soporte</h3>
                <p class="text-secondary">Continuo</p>
              </div>
              <div>
                <h3 class="text-lg text-primary">Máxima</h3>
                <p class="text-secondary">Productividad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits section -->
    <section class="w-full bg-white pt-16 pb-20">
      <div class="mx-auto flex max-w-5xl flex-col px-4 sm:px-6 md:px-8">
        <div
          class="mx-auto flex h-full max-w-xl flex-col justify-center pt-6 pb-10 text-center"
        >
          <h2 class="text-4xl font-semibold text-secondary/75">
            Trabajamos con profesionales de todo tipo
          </h2>
          <p class="mt-6 text-lg text-gray-500">
            No importa en que estes trabajando, con quién estés, o cuantos hay
            en tu equipo, nosotros podemos ayudarte.
          </p>
        </div>
        <div>
          <div class="grid w-full grid-cols-2 grid-rows-2 gap-4">
            <div
              class="col-span-2 flex flex-col-reverse gap-y-4 rounded-xl bg-white p-6 shadow-xl md:col-span-1 md:flex-row"
            >
              <img
                class="mx-auto sm:block"
                width="180"
                :src="require('@/assets/images/accessories.svg')"
                alt=""
              />
              <div class="my-auto sm:pl-4">
                <h3 class="mb-1 font-semibold text-primary">Accesorios</h3>
                <ul>
                  <li>
                    <p class="text-gray-500">Refacciones</p>
                  </li>
                  <li>
                    <p class="text-gray-500">Impresión y consumibles</p>
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="col-span-2 flex flex-col gap-y-4 rounded-xl bg-white p-6 shadow-xl md:col-span-1 md:flex-row"
            >
              <img
                class="order-2 mx-auto sm:block"
                width="180"
                :src="require('@/assets/images/computer.svg')"
                alt=""
              />
              <div class="my-auto sm:pr-4 md:pr-0">
                <h3 class="mb-1 font-semibold text-primary">
                  Equipo de cómputo portátil y escritorio
                </h3>
                <ul>
                  <li>
                    <p class="text-gray-500">Componentes PC</p>
                  </li>
                  <li>
                    <p class="text-gray-500">
                      Gamer, PC’s, Laps, accesorios y componentes.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="col-span-2 flex flex-col-reverse gap-y-4 rounded-xl bg-white p-6 shadow-xl md:flex-row md:justify-center"
            >
              <img
                class="sm:block"
                width="280"
                :src="require('@/assets/images/surveillance.svg')"
                alt=""
              />
              <div class="my-auto sm:pl-8">
                <h3 class="mb-1 font-semibold text-primary">
                  Seguridad electrónica
                </h3>
                <ul>
                  <li>
                    <p class="text-gray-500">Audiovisuales</p>
                  </li>
                  <li><p class="text-gray-500">Redes</p></li>
                  <li><p class="text-gray-500">IoT</p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto overflow-x-hidden bg-secondary px-8 py-20">
      <div class="relative mx-auto w-full max-w-5xl">
        <div
          class="relative z-10 mx-auto flex w-full flex-col items-center justify-center rounded-xl border border-gray-100 bg-white px-8 py-12 text-center shadow-xl md:flex-row md:justify-between md:text-left"
        >
          <div>
            <h3 class="text-secondary">Explora todos nuestros productos</h3>
            <p class="mt-2 text-gray-500">
              y empieza a trabajar como un profesional...
            </p>
          </div>
          <a
            href="https://suntechonline.tech"
            target="_blank"
            class="mt-6 flex max-w-[280px] items-center justify-center rounded-md bg-primary px-6 py-3 text-lg font-medium text-white hover:bg-primary/75 md:mt-0"
          >
            <CartIcon />

            Visita nuestra tienda
          </a>
        </div>
        <svg
          class="absolute right-0 top-4 z-0 h-48 w-auto translate-x-1/2 -translate-y-1/2 transform text-primary"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M147 59.2c4.7 9.2-7.1 28.2-11 50.4-4 22.3 0 47.8-11.1 60-11 12.2-37.1 11-50.3-1.3-13.1-12.4-13.4-35.9-14.8-55.3-1.4-19.5-4-34.9 2.5-44.5 6.5-9.5 22.1-13.1 40.5-15.4 18.4-2.2 39.6-3 44.2 6.1z"
          />
        </svg>
        <svg
          class="absolute left-4 bottom-6 z-0 h-48 w-auto -translate-x-1/2 translate-y-1/2 transform text-primary"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M141.5 68.5c8.4 9.1 8.9 26.1 5 41.6-4 15.5-12.4 29.4-25.7 37.6-13.4 8.1-31.7 10.5-45.2 3.7-13.4-6.8-22.1-22.8-29.2-42.4-7.1-19.7-12.6-43-3.4-52.2 9.2-9.3 33.1-4.5 53.3-1.5 20.2 2.9 36.7 4.1 45.2 13.2z"
          />
        </svg>
      </div>
    </section>

    <section
      class="mx-auto flex max-w-5xl flex-col gap-4 px-8 py-20 pb-20 md:flex-row"
    >
      <div class="flex flex-1 flex-col items-start justify-start">
        <div class="rounded-2xl bg-secondary px-4 py-1 text-gray-100">
          Por qué elegirnos?
        </div>
        <h2 class="mt-6 text-xl leading-relaxed text-secondary">
          <span class="font-semibold text-primary"
            >Suntech Electronics&reg;</span
          >
          es una empresa con 8 años de experiencia en el desarrollo de
          soluciones de hardware profesional.
        </h2>
        <ul class="mt-8">
          <li class="mt-4 flex items-center text-sm text-gray-500">
            <span
              class="mr-3 flex h-5 w-5 min-w-[1.25rem] items-center justify-center rounded-md bg-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            Perfecto para profesionales que buscan hardware de alta calidad.
          </li>
          <li class="mt-4 flex items-center text-sm text-gray-500">
            <span
              class="mr-3 flex h-5 w-5 min-w-[1.25rem] items-center justify-center rounded-md bg-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            Soluciones para independientes o empresas de cualquier tamaño.
          </li>
          <li class="mt-4 flex items-center text-sm text-gray-500">
            <span
              class="mr-3 flex h-5 w-5 min-w-[1.25rem] items-center justify-center rounded-md bg-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            Tus marcas de confianza en nuestros productos.
          </li>
        </ul>
      </div>
      <div
        class="mx-auto mt-8 flex w-full max-w-sm flex-1 flex-row gap-4 sm:w-1/2 md:mt-0"
      >
        <div class="flex flex-1 flex-col gap-4 md:pb-16">
          <div
            class="aspect-w-1 aspect-h-1 h-full w-full rounded-md border border-transparent bg-secondary shadow-xl transition-all hover:-translate-y-2"
          >
            <div class="flex flex-col justify-center text-center">
              <div class="text-2xl font-bold text-white sm:text-4xl">100+</div>
              <div class="sm:text-md text-sm text-primary">Clientes</div>
            </div>
          </div>
          <div
            class="aspect-w-1 aspect-h-1 h-full w-full rounded-md border border-gray-100 bg-white shadow-xl transition-all hover:-translate-y-2"
          >
            <div class="flex flex-col justify-center text-center">
              <div class="text-2xl font-bold text-secondary sm:text-4xl">
                300+
              </div>
              <div class="sm:text-md text-sm text-primary">
                Ventas realizadas
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-1 flex-col gap-4 md:pt-16">
          <div
            class="aspect-w-1 aspect-h-1 h-full w-full rounded-md border border-gray-100 bg-white shadow-xl transition-all hover:-translate-y-2"
          >
            <div class="flex flex-col justify-center text-center">
              <div class="text-2xl font-bold text-secondary sm:text-4xl">
                100%
              </div>
              <div class="sm:text-md text-sm text-primary">
                Clientes felices
              </div>
            </div>
          </div>
          <div
            class="aspect-w-1 aspect-h-1 h-full w-full rounded-md border border-transparent bg-secondary shadow-xl transition-all hover:-translate-y-2"
          >
            <div class="flex flex-col justify-center text-center">
              <div class="text-2xl font-bold text-white sm:text-4xl">20+</div>
              <div class="sm:text-md text-sm text-primary">Productos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="mx-auto max-w-2xl transform px-4 pb-20 sm:px-6 lg:mb-8 lg:px-8"
    >
      <h1 id="form" class="mb-2 text-primary">Platiquemos!</h1>
      <p class="mb-4 text-gray-500">
        Si hay algo en lo que podamos ayudarte, simplemente haznos saber.
        Estaremos mas que felices de ofrecerle una solución.
      </p>
      <ContactForm />
    </section>
  </main>
</template>

<script>
import ChevronRightCircle from 'icons/ChevronRightCircle.vue'
import CartVariant from 'icons/CartVariant.vue'
export default {
  components: {
    ArrowRight: ChevronRightCircle,
    CartIcon: CartVariant,
  },

  head: {
    title: 'Inicio | Suntech Electronics',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Bienvenidos a Suntech Electronics, una empresa dedicada a la venta de productos electronicos.',
      },
    ],
  },
}
</script>
