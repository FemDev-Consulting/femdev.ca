<template>
  <div>
    <div class="bg-brand-green-200">
      <TheHeader />
      <TheSkipNav />
      <slot></slot>
      <TheFooter />
    </div>
  </div>
</template>

<script lang="ts">
import TheSkipNav from '../components/layout/TheSkipNav.vue';
import TheHeader from '../components/layout/TheHeader.vue';
import TheFooter from '../components/layout/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheSkipNav,
    TheFooter,
  },
  setup() {},
};
</script>
