<template>
  <div>
    <div class="bg-brand-green-50">
      <content-container>
        <div class="my-0 border-b-2 border-brand-green-700">
          <div class="w-full py-32 md:py-30">
            <section>
              <h2
                class="mb-2 tracking-wide text-brand-green-800 text-2xl sm:text-lg md:text-xl xl:text-2xl"
              >
                Workshop
              </h2>
              <div class="h-1 w-8 mb-12 bg-brand-pink-900"></div>
              <div class="flex flex-col lg:flex-row">
                <div class="lg:w-8/12">
                  <p
                    class="text-brand-green-800 text-4xl sm:text-4xl md:text-5xl xl:text-6xl"
                  >
                    Feminist Knowledge Translation for Research Impact
                  </p>

                  <!-- Workshop info -->
                  <div class="mt-12 text-xl">
                    <ul
                      class="marker:text-brand-pink-800 mt-1 ml-5 lg:flex list-disc list-inside text-xl"
                    >
                      <li class="">
                        <span class="sr-only">Date: </span
                        ><time>Tuesday, 27 September 2022</time>
                      </li>
                      <li class="lg:ml-10">
                        <span class="sr-only">Location: </span>Online event
                      </li>
                    </ul>
                  </div>

                  <!-- Registration button -->
                  <div class="mt-12">
                    <ul class="list-none flex">
                      <li>
                        <a
                          href="https://www.eventbrite.com/e/387693059377"
                          class="btn-primary-sm"
                          target="_blank"
                          rel="noopener noreferrer external"
                        >
                          Register<span class="sr-only">
                            for Feminist Knowledge Translation for Research
                            Impact</span
                          >
                        </a>
                      </li>
                      <li>
                        <router-link
                          :to="{ path: '/workshop' }"
                          class="ml-5 btn-primary-outline-sm"
                          >Learn more<span class="sr-only">
                            about the workshop</span
                          >
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="lg:w-4/12">
                  <img
                    class="mt-10 px-10 md:px-52 lg:mt-0 lg:pl-32 lg:pr-0"
                    src="../../assets/images/workshop/workshop-logo.png"
                    alt=""
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </content-container>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContentContainer from '../ui/ContentContainer.vue';

export default defineComponent({
  components: {
    ContentContainer,
  },
});
</script>
