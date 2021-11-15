<template>
  <div v-if="isProduction === false">
    <!-- Only display the page banner if we aren't in prod -->
    <div class="bg-brand-green-900">
      <div class="py-5">
        <content-container>
          <div class="text-brand-green-300">
            <section>
              <h2 class="sr-only">Test site notice</h2>
              <div class="flex flex-nowrap items-center">
                <div class="border rounded-md py-1 px-2">
                  <p
                    class="
                      text-center
                      sm:text-left
                      text-sm
                      md:text-base
                      uppercase
                    "
                  >
                    Test Site
                  </p>
                </div>
                <div class="ml-10">
                  <p class="text-sm">
                    This site is in active development. Parts of this site may
                    not work and will change.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </content-container>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ContentContainer from '../ui/ContentContainer.vue';

export default {
  components: {
    ContentContainer,
  },
  setup() {
    // process.env.MY_SECRET_SAUCE
    const isProduction = useProductionFlag();

    return { isProduction };
  },
};
function useProductionFlag() {
  let production: boolean = false;
  const PROD_STRING: string = 'production';

  if (import.meta.env.VITE_PROD_CONTEXT === PROD_STRING) {
    production = true;
  }

  return production;
}
</script>
