<template>
  <div>
    <div class="bg-brand-green-50">
      <content-container>
        <div class="my-0 border-b-2 border-brand-green-700">
          <div class="w-full py-32 md:py-30">
            <section>
              <div class="flex flex-col md:flex-row flex-nowrap items-end">
                <div class="w-full md:w-2/3">
                  <h2
                    class="mb-2 tracking-wide text-brand-green-800 text-2xl sm:text-lg md:text-xl xl:text-2xl"
                  >
                    About
                  </h2>
                  <div class="h-1 w-8 mb-12 bg-brand-pink-900"></div>

                  <p
                    class="text-brand-green-800 text-4xl sm:text-4xl md:text-5xl xl:text-6xl"
                  >
                    FemDev is a global development consulting firm providing
                    feminist research, evaluation and analysis services.
                  </p>
                </div>
                <div class="pt-20 md:pl-10 lg:pl-20 w-full md:w-1/3">
                  <img
                    class="hidden md:block"
                    src="../../assets/images/home/about-wide.svg"
                    alt=""
                  />
                  <img
                    class="block md:hidden"
                    src="../../assets/images/home/about-wide.svg"
                    alt=""
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </content-container>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContentContainer from '../ui/ContentContainer.vue';

import aboutImageSvgUrl from '../../assets/images/home/about.svg';

export default defineComponent({
  components: {
    ContentContainer,
  },
  setup() {
    const femDevMeansListSvgClass =
      'flex-shrink-0 mt-1 mr-4 h-6 w-6 text-brand-green-500';

    const femDevMeansListSvg = `<svg
                      class="
                        ${femDevMeansListSvgClass}
                      "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>`;

    const femDevMeansList = [
      {
        description:
          'We are committed to transforming unequal systems and power relations using an intersectional lens',
      },
      {
        description:
          'We use non-extractive methods and accountable collaboration tools to co-construct knowledge with partners and communities',
      },
      {
        description:
          'We work in the open and are transparent about our values, processes and pricing',
      },
      {
        description:
          'We believe in designing research for action to support evidence-based decision making, policy making and social change',
      },
      {
        description:
          'We work flexibly and prioritize care (for ourselves and for others) in all our work',
      },
    ];

    return {
      femDevMeansList,
      femDevMeansListSvg,
      aboutImageSvgUrl,
    };
  },
});
</script>
