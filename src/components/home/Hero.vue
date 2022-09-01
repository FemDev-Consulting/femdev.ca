<template>
  <div>
    <div class="bg-brand-green-50">
      <content-container>
        <div class="border-b-2 border-brand-green-700">
          <div class="mt-28 md:mt-5 mb-24">
            <div class="flex flex-col md:flex-row flex-nowrap items-center">
              <!-- Text Container-->
              <div class="w-full md:w-3/5 lg:w-2/3 xl:w-2/3 mb-20 md:mb-0">
                <div class="py-0 pr-0">
                  <h1
                    class="tracking-normal font-light text-brand-green-800 text-5xl sm:text-5xl md:text-6xl lg:text-6xl"
                  >
                    Passionate about
                    <span class="text-brand-pink-900">feminist</span>
                    approaches to research, evaluation and analysis.
                  </h1>
                </div>
              </div>
              <!-- Image container  -->
              <div class="w-full lg:w-1/2">
                <div class="pt-20">
                  <img
                    class="transform-gpu scale-150 md:transform-none"
                    src="../../assets/images/home/hero/hero-one.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </content-container>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContentContainer from '../ui/ContentContainer.vue';

export default defineComponent({
  components: {
    ContentContainer,
  },
  setup() {},
});
</script>
