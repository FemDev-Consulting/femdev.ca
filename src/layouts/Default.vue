<template>
  <div>
    <div class="bg-brand-green-200">
      <the-header />
      <the-skip-nav />
      <main>
        <slot></slot>
      </main>
      <the-footer />
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
