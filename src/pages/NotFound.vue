<template>
  <div>
    <page-layout>
      <div class="mt-20 mb-20">
        <div class="flex flex-col md:flex-row-reverse">
          <div class="md:w-1/2">
            <img :src="errorImageSvgUrl" alt="" />
          </div>
          <div class="md:w-1/2">
            <h1 class="text-8xl text-brand-green-800">
              Oh No!<span class="sr-only"> Error</span>
            </h1>
            <p
              class="
                mt-2
                w-full
                md:w-4/5
                lg:w-3/5
                text-3xl text-brand-green-600
              "
            >
              Something went horribly wrong.
            </p>
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
