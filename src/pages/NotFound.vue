<template>
  <div>
    <layout>
      <content-container>
        <p>Not Found</p>
      </content-container>
    </layout>
  </div>
</template>

<script lang="ts">
import Layout from '../layouts/Default.vue';
import ContentContainer from '../components/ui/ContentContainer.vue';
import { useHead } from '@vueuse/head';

export default {
  components: {
    ContentContainer,
    Layout,
  },
  setup() {
    setupHeadTags();
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
