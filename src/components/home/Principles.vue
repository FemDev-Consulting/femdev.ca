<template>
  <div>
    <div class="bg-brand-green-50">
      <content-container>
        <div class="my-0 border-b-2 border-brand-green-700">
          <div class="w-full py-32 md:py-30">
            <section>
              <h2
                class="mb-2 tracking-wide text-brand-green-800 text-2xl sm:text-lg md:text-xl xl:text-2xl"
              >
                How we work
              </h2>
              <div class="h-1 w-8 mb-12 bg-brand-pink-900"></div>

              <p
                class="w-11/12 md:w-4/5 text-brand-green-800 text-4xl sm:text-4xl md:text-5xl xl:text-6xl"
              >
                We center feminist principles in all of our processes and ways
                of working.
              </p>

              <div class="mt-12">
                <div class="flex flex-col lg:flex-row">
                  <div class="w-full lg:w-3/5">
                    <ul class="text-xl list-none list-outside ml-8">
                      <li
                        v-for="femDevMeans in femDevMeansList"
                        :key="femDevMeans.description"
                        class="mt-4 flex flex-row flex-nowrap justify-start"
                      >
                        <div v-html="femDevMeansListSvg"></div>
                        <p>
                          {{ femDevMeans.description }}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div class="w-full lg:w-2/5 lg:self-end">
                    <div class="">
                      <img
                        loading="lazy"
                        class="pt-16 lg:pt-0 px-24 md:px-48 lg:pr-0 lg:pl-28 xl:pl-72"
                        src="../../assets/images/home/principles/principles.png"
                        alt=""
                      />
                    </div>
                  </div>
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
    };
  },
});
</script>
