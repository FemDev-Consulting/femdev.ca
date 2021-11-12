<template>
  <div>
    <page-layout>
      <div class="mt-20 mb-20">
        <div class="flex flex-col md:flex-row-reverse md:items-center">
          <div class="md:w-2/5 xl:w-1/2">
            <div class="pb-20 pr-10 md:pt-0 md:px-0 md:pr-0 md:pb-0">
              <img :src="errorImageSvgUrl" alt="" />
            </div>
          </div>
          <div class="md:w-3/5 xl:w-1/2 md:pr-5">
            <h1 class="text-8xl text-brand-green-800">
              <span class="sr-only">Error</span> Oops!
            </h1>
            <p class="mt-2 w-full md:w-4/5 text-3xl text-brand-green-600">
              Looks like either this page is missing or some sort of
              catastrophic error occured.
            </p>

            <p class="mt-10 text-xl">
              Check out our home page or reach out using our contact page.
            </p>

            <ul class="mt-10 flex flex-row justify-between lg:justify-start">
              <li
                class="order-2 md:order-1 w-1/2 lg:w-auto pl-2 md:pl-0 md:pr-2"
              >
                <router-link :to="{ name: 'home' }" class="btn-primary w-full">
                  <span class="sr-only">Go to the FemDev</span> Home page
                </router-link>
              </li>
              <li
                class="order-1 md:order-2 w-1/2 lg:w-auto pr-2 md:pr-0 md:pl-2"
              >
                <router-link
                  :to="{ name: 'contact' }"
                  class="btn-primary-outline w-full"
                >
                  <span class="sr-only">Go to the FemDev</span> Contact us
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </page-layout>
  </div>
</template>

<script lang="ts">
import PageLayout from '../layouts/Page.vue';
import ContentContainer from '../components/ui/ContentContainer.vue';
import errorImageSvgUrl from '../assets/images/error.svg';

import { useHead } from '@vueuse/head';

export default {
  components: {
    ContentContainer,
    PageLayout,
  },
  setup() {
    setupHeadTags();
    return {
      errorImageSvgUrl,
    };
  },
};

function setupHeadTags() {
  const pagetitle = 'Error';
  const siteTitle = 'FemDev Consulting';
  const title = `${pagetitle} | ${siteTitle}`;
  const pageDescription = 'Error page for FemDev Consulting';

  useHead({
    // Can be static or computed
    title: title,
    meta: [
      {
        name: 'description',
        content: pageDescription,
      },
    ],
  });
}
</script>
