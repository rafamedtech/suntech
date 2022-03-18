<template>
  <main>
    <!-- Hero section -->
    <section class="bg-white py-20">
      <div
        class="container flex flex-col px-4 sm:px-6 lg:flex-row lg:gap-x-4 lg:px-8"
      >
        <img
          src="@/assets/images/hero.svg"
          alt=""
          class="mx-auto md:w-2/3 lg:w-1/2"
        />
        <div
          class="flex flex-col items-center justify-center pt-8 text-center lg:items-start lg:pt-0 lg:pl-16 lg:text-left"
        >
          <h1
            class="my-6 text-3xl font-semibold leading-tight text-primary sm:text-6xl"
          >
            Work Smart <br />
            Not Hard
          </h1>
          <p class="w-4/6 text-lg text-gray-600">
            Productivity tools can either help you or get in the way. We aim to
            keep you organized in a way that feels natural and easy to use.
          </p>
        </div>
      </div>
    </section>

    <!-- Features section -->
    <section
      class="mx-auto flex flex-col items-center justify-center bg-black px-4 pt-20 pb-24 sm:px-6 lg:px-8"
    >
      <div class="flex flex-col md:flex-row">
        <div class="mx-4 flex flex-col items-center py-8 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
          <h3 class="bold my-4 text-white">Toughtfully Designed</h3>
          <p class="max-w-sm text-gray-500">
            We've thought of every detail to make your experience as smooth as
            possible.
          </p>
        </div>
        <div class="mx-4 flex flex-col items-center py-8 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
          <h3 class="bold my-4 text-white">Customizable</h3>
          <p class="max-w-sm text-gray-500">
            You can add custom plugins and components, or change the styling.
          </p>
        </div>
        <div class="mx-4 flex flex-col items-center py-8 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
            />
          </svg>
          <h3 class="bold my-4 text-white">Cloud Storage</h3>
          <p class="max-w-sm text-gray-500">
            Sync everything across your devices to have your things at your
            finertips.
          </p>
        </div>
      </div>
    </section>

    <!-- Benefits section -->
    <section class="w-full bg-white pt-16 pb-20">
      <div class="mx-auto flex max-w-5xl flex-col px-4 sm:px-6 md:px-8">
        <div
          class="mx-auto flex h-full max-w-xl flex-col justify-center pt-6 pb-10 text-center"
        >
          <h2 class="text-4xl text-primary">Built for teams of all kinds</h2>
          <p class="mt-6 text-lg text-gray-500">
            No matter what you're working on, who you're with, or how many of
            you there are, we can help.
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
                src="https://tailmars.com/assets/img/online_chat.svg"
                alt=""
              />
              <div class="my-auto sm:pl-4">
                <h3 class="mb-1 font-semibold text-primary">Conversations</h3>
                <p class="text-gray-500">
                  Use chat and reactions to communicate with your team and feel
                  connected, even when you're remote.
                </p>
              </div>
            </div>
            <div
              class="col-span-2 flex flex-col-reverse gap-y-4 rounded-xl bg-white p-6 shadow-xl md:col-span-1 md:flex-row"
            >
              <img
                class="order-2 mx-auto sm:block"
                width="180"
                src="https://tailmars.com/assets/img/a_day_off.svg"
                alt=""
              />
              <div class="my-auto sm:pr-4">
                <h3 class="mb-1 font-semibold text-primary">
                  Unlimited Team Size
                </h3>
                <p class="text-gray-500">
                  Our system works well for a scrappy team of 3 or scales to the
                  enterprise level needs of Forture 500 companies.
                </p>
              </div>
            </div>
            <div
              class="col-span-2 flex flex-col gap-y-4 rounded-xl bg-white p-6 shadow-xl md:flex-row"
            >
              <img
                class="mx-auto sm:block"
                width="280"
                src="https://tailmars.com/assets/img/team_spirit.svg"
                alt=""
              />
              <div class="my-auto sm:pl-8">
                <h3 class="mb-1 font-semibold text-primary">
                  Building a community.
                </h3>
                <p class="text-gray-500">
                  Our tools are built to help you build a community. You can use
                  them for documentation, tutorials, FAQs, etc. Connect your
                  team with your customers and foster a true community.
                </p>
              </div>
            </div>
          </div>
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
              src="https://source.unsplash.com/BbSBf5uv50A"
              class="rellax absolute right-0 top-20 z-30 h-auto w-[60%] rounded-lg object-cover object-center shadow-md"
            />
            <img
              alt=""
              src="https://source.unsplash.com/F3Y8BfZn4jo"
              class="rellax relative left-0 top-0 z-20 h-auto w-1/2 rounded-lg object-cover object-center shadow-md"
            />
            <img
              alt=""
              src="https://source.unsplash.com/mcSDtbWXUZU"
              class="rellax absolute -bottom-16 right-8 z-10 h-auto w-[50%] rounded-lg object-cover object-center shadow-md"
            />
          </div>
        </div>
        <div class="flex w-full items-center pt-24 sm:w-1/3 sm:pt-0">
          <div class="mx-auto sm:pr-6">
            <h1 class="text-3xl text-gray-800">
              We act like your digital brain
              <br />
              <span class="text-primary"
                >So you can focus on more important things</span
              >
            </h1>
            <p class="mt-6 text-lg text-gray-600">
              Take advantage of our productivity tools so that you don't have to
              worry about things slipping through the cracks.
            </p>
            <div class="mt-8 flex flex-row justify-between gap-2">
              <div>
                <h3 class="text-xl text-primary">100%</h3>
                <p class="text-gray-800">Satisfaction</p>
              </div>
              <div>
                <h3 class="text-xl text-primary">24/7</h3>
                <p class="text-gray-800">Support</p>
              </div>
              <div>
                <h3 class="text-xl text-primary">3.1x</h3>
                <p class="text-gray-800">Productive</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto overflow-x-hidden bg-black px-8 py-20">
      <div class="relative mx-auto w-full max-w-5xl">
        <div
          class="relative z-10 mx-auto flex w-full flex-col items-center justify-center rounded-xl border border-gray-100 bg-white px-8 py-12 text-center shadow-xl md:flex-row md:justify-between md:text-left"
        >
          <div>
            <h3>Nos gustaria saber lo que piensas</h3>
            <p class="mt-2 text-gray-600">Dejanos un mensaje...</p>
          </div>
          <a
            href="https://flurly.com/p/tailmars"
            class="hover:bg-primary-700 mt-6 flex max-w-[280px] items-center justify-center rounded-md bg-primary px-6 py-3 text-lg font-medium text-white md:mt-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2 h-4 w-4"
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
            <nuxt-link to="/contacto">Contactanos</nuxt-link>
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
        <div class="rounded-2xl bg-primary px-4 py-1 text-white">
          Porque elegirnos?
        </div>
        <h2 class="mt-6 text-xl leading-relaxed">
          Tailmars is a premium HTML theme that includes adaptable layouts for
          various industries and free updates.
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
            Perfect for modern startups
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
            Built with customization and ease-of-use at its core
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
            Quality design and thoughfully crafted code
          </li>
        </ul>
      </div>
      <div
        class="mx-auto mt-8 flex w-full max-w-sm flex-1 flex-row gap-4 sm:w-1/2 md:mt-0"
      >
        <div class="flex flex-1 flex-col gap-4 md:pb-16">
          <div
            class="aspect-w-1 aspect-h-1 h-full w-full rounded-md border border-transparent bg-primary shadow-xl"
          >
            <div class="flex flex-col justify-center text-center">
              <div class="text-2xl font-bold text-white sm:text-4xl">50+</div>
              <div class="sm:text-md text-sm text-white">Customers</div>
            </div>
          </div>
          <div
            class="aspect-w-1 aspect-h-1 h-full w-full rounded-md border border-gray-100 bg-white shadow-xl"
          >
            <div class="flex flex-col justify-center text-center">
              <div class="text-2xl font-bold text-gray-800 sm:text-4xl">
                500
              </div>
              <div class="sm:text-md text-sm text-primary">Downloads</div>
            </div>
          </div>
        </div>
        <div class="flex flex-1 flex-col gap-4 md:pt-16">
          <div
            class="aspect-w-1 aspect-h-1 h-full w-full rounded-md border border-gray-100 bg-white shadow-xl"
          >
            <div class="flex flex-col justify-center text-center">
              <div class="text-2xl font-bold text-gray-800 sm:text-4xl">
                100%
              </div>
              <div class="sm:text-md text-sm text-primary">Happy clients</div>
            </div>
          </div>
          <div
            class="aspect-w-1 aspect-h-1 h-full w-full rounded-md border border-transparent bg-primary shadow-xl"
          >
            <div class="flex flex-col justify-center text-center">
              <div class="text-2xl font-bold text-white sm:text-4xl">1200</div>
              <div class="sm:text-md text-sm text-white">Page views</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  // data: () => ({
  //   rellax1: {
  //     speed: -1,
  //   },
  //   rellax2: {
  //     speed: 1,
  //   },
  //   rellax3: {
  //     speed: 0,
  //   },
  // }),
}
</script>
