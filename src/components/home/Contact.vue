<template>
  <div>
    <div class="bg-brand-green-50">
      <content-container>
        <div class="py-40">
          <section>
            <h2
              class="
                mb-10
                font-light
                tracking-wide
                text-4xl
                sm:text-2xl
                md:text-4xl
                xl:text-6xl
              "
            >
              <span class="block text-brand-green-500"
                >Have a project in mind
              </span>
              <span class="block text-brand-green-800"
                >Learn how we can help you.</span
              >
            </h2>
            <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <router-link :to="{ path: '/contact' }" class="btn-primary"
                >Contact us
              </router-link>
            </div>
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
