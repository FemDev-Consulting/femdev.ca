<template>
  <div>
    <layout>
      <home-hero />
      <home-workshop />
      <home-services />
      <home-about />
      <home-principles />
      <home-clients />
      <home-contact />
    </layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useHead } from '@vueuse/head';

// Components
import Layout from '../layouts/Default.vue';
import HomeHero from '../components/home/Hero.vue';
import HomeServices from '../components/home/Services.vue';
import HomeAbout from '../components/home/About.vue';
import HomePrinciples from '../components/home/Principles.vue';
import HomeClients from '../components/home/Clients.vue';
import HomeContact from '../components/home/Contact.vue';

export default defineComponent({
  components: {
    Layout,
    HomeHero,
    HomeServices,
    HomeAbout,
    HomePrinciples,
    HomeClients,
    HomeContact,
  },
  setup() {
    setupHeadTags();
  },
});

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
