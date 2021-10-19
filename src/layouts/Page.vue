<template>
  <div>
    <default-layout>
      <main>
        <div class="mb-44">
          <content-container>
            <slot></slot>
          </content-container>
        </div>
      </main>
    </default-layout>
  </div>
</template>

<script lang="ts">
import ContentContainer from '../components/ui/ContentContainer.vue';
import DefaultLayout from '../layouts/Default.vue';

export default {
  // Set the layout to the default
  // layout: 'default',
  components: {
    DefaultLayout,
    ContentContainer,
  },
  setup() {},
};
</script>
