<template>
  <div>
    <p class="text-9xl text-brand-green-600">Home</p>
  </div>
</template>

<script lang="ts">
import { useHead } from '@vueuse/head';

export default {
  setup() {
    setupHeadTags();
  },
};

function setupHeadTags() {
  const pagetitle = 'Home';
  const siteTitle = 'FemDev Consulting';
  const title = `${pagetitle} | ${siteTitle}`;
  const pageDescription = 'Home page for FemDev Consulting';

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
