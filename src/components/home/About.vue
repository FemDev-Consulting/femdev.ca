<template>
  <div>
    <div class="bg-none">
      <content-container>
        <div class="my-52">
          <section>
            <h2
              class="
                mb-10
                font-light
                tracking-wide
                text-brand-green-800 text-4xl
                sm:text-lg
                md:text-xl
                xl:text-2xl
              "
            >
              About
            </h2>
            <p
              class="
                w-4/5
                font-light
                text-brand-green-800 text-4xl
                sm:text-4xl
                md:text-5xl
                xl:text-6xl
              "
            >
              FemDev is an Ottawa-based global development consulting firm
              providing feminist research, evaluation and analysis services.
            </p>
            <p
              class="
                mt-10
                w-4/5
                font-light
                text-brand-green-800 text-4xl
                sm:text-4xl
                md:text-5xl
                xl:text-6xl
              "
            >
              Our expertise in gender equality and women’s rights is diverse,
              ranging from education and decent employment, to health and
              gender-based violence, to social norms and care work.
            </p>
          </section>
        </div>
      </content-container>
    </div>
  </div>
</template>

<script lang="ts">
import ContentContainer from '../ui/ContentContainer.vue';

export default {
  components: {
    ContentContainer,
  },
};
</script>
