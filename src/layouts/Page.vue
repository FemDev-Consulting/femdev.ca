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
import { defineComponent } from 'vue';

// Components
import ContentContainer from '../components/ui/ContentContainer.vue';
import DefaultLayout from '../layouts/Default.vue';

export default defineComponent({
  components: {
    DefaultLayout,
    ContentContainer,
  },
  setup() {},
});
</script>
