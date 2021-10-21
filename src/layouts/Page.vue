<template>
  <div>
    <default-layout>
      <div class="pb-32">
        <content-container>
          <slot></slot>
        </content-container>
      </div>
    </default-layout>
  </div>
</template>

<script lang="ts">
import ContentContainer from '../components/ui/ContentContainer.vue';
import DefaultLayout from '../layouts/Default.vue';

export default {
  components: {
    DefaultLayout,
    ContentContainer,
  },
  setup() {},
};
</script>
