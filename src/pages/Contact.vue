<template>
  <div>
    <p>Contact</p>
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
  const pagetitle = 'Contact';
  const siteTitle = 'FemDev Consulting';
  const title = `${pagetitle} | ${siteTitle}`;
  const pageDescription = 'Contact page for FemDev Consulting';

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
