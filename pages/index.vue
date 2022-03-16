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
      class="mx-auto flex max-w-6xl flex-col justify-center px-4 pt-20 pb-24 sm:px-6 lg:px-8"
    >
      <div class="flex flex-col md:flex-row">
        <div class="mx-4 flex flex-col items-center py-8 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 text-orange-600"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
            />
          </svg>
          <h3 class="bold my-4">Toughtfully Designed</h3>
          <p class="max-w-sm text-gray-500">
            We've thought of every detail to make your experience as smooth as
            possible.
          </p>
        </div>
        <div class="mx-4 flex flex-col items-center py-8 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 text-orange-600"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
            />
          </svg>
          <h3 class="bold my-4">Toughtfully Designed</h3>
          <p class="max-w-sm text-gray-500">
            We've thought of every detail to make your experience as smooth as
            possible.
          </p>
        </div>
        <div class="mx-4 flex flex-col items-center py-8 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 text-orange-600"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
            />
          </svg>
          <h3 class="bold my-4">Toughtfully Designed</h3>
          <p class="max-w-sm text-gray-500">
            We've thought of every detail to make your experience as smooth as
            possible.
          </p>
        </div>
      </div>
    </section>

    <!-- Benefits section -->
    <section class="w-full bg-black/5 pt-16 pb-20">
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
            <div class="col-span-2 flex rounded-xl bg-white p-6 md:col-span-1">
              <img
                class="w-44"
                src="https://www.tailmars.com/assets/img/online_chat.svg"
              />
              <div class="my-auto sm:pl-4">
                <h3 class="mb-1 font-semibold text-primary">Conversations</h3>
                <p class="text-gray-500">
                  Use chat and reactions to communicate with your team and feel
                  connected, even when you're remote.
                </p>
              </div>
            </div>
            <div class="col-span-2 flex rounded-xl bg-white p-6 md:col-span-1">
              <img
                class="w-44"
                src="https://www.tailmars.com/assets/img/a_day_off.svg"
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
            <div class="col-span-2 flex rounded-xl bg-white p-6">
              <img
                class="w-72"
                src="https://www.tailmars.com/assets/img/team_spirit.svg"
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

    <!-- More Benefits -->
    <section
      class="w-full bg-gradient-to-b from-gray-100 to-white py-8 sm:py-20"
    >
      <div
        class="mx-auto flex max-w-6xl flex-col px-4 sm:flex-row sm:px-6 md:px-8"
      >
        <div class="relative mx-auto flex px-8 sm:order-2 sm:w-2/3">
          <div class="relative ml-auto h-full w-full">
            <img
              class="rellax absolute right-0 top-24 z-30 h-auto w-[60%] rounded-lg object-cover object-center shadow-md"
              src="https://source.unsplash.com/BbSBf5uv50A"
              alt=""
            />
            <img
              class="rellax relative left-0 -top-20 z-20 h-auto w-1/2 rounded-lg object-cover object-center shadow-md"
              src="https://source.unsplash.com/F3Y8BfZn4jo"
              alt=""
            />
            <img
              class="rellax absolute -bottom-16 right-8 z-10 h-auto w-[50%] rounded-lg object-cover object-center shadow-md"
              src="https://source.unsplash.com/mcSDtbWXUZU"
              alt=""
            />
          </div>
        </div>
        <div class="flex w-full items-center pt-24 sm:w-1/3 sm:pt-0">
          <div class="mx-auto sm:pr-6">
            <h2 class="text-3xl text-gray-800">
              We act like your digital brain
            </h2>
            <p class="text-3xl text-primary">
              So you can focus on more important things
            </p>
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
  </main>
</template>

<script>
export default {}
</script>
