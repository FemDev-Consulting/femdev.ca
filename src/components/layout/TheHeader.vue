<template>
  <header>
    <h2 class="sr-only">Site header information</h2>
    <div class="bg-brand-green-50">
      <content-container>
        <div
          class="w-full py-5 md:py-12 flex flex-row flex-nowrap justify-between items-center"
        >
          <router-link :to="{ path: '/' }">
            <svg
              class="h-12 w-auto text-brand-green-800"
              viewBox="0 0 211 211"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <!-- fill="#F5CFCE" stroke="#DEBBBA" -->
              <circle cx="105.5" cy="105.5" r="105" class="fill-current" />
              <rect x="74" y="62" width="71" height="17" fill="white" />
              <rect x="74" y="103" width="66" height="17" fill="white" />
              <rect x="74" y="141" width="17" height="17" fill="white" />
            </svg>
            <span class="sr-only">FemDev Consulting Home Page</span>
          </router-link>

          <img class="ml-5 h-5" src="/images/brand/fd_logo_green.png" alt="" />
        </div>
      </content-container>
    </div>
  </header>
  <div v-if="false">
    <header class="bg-white">
      <h2 class="sr-only">Site header information</h2>
      <div class="container">
        <div
          class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"
        >
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <a class="flex items-center" href="#">
              <svg
                class="sr-only h-8 w-auto sm:h-10 text-brand-gsreen-700 text-brand-pink-700"
                viewBox="0 0 211 211"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <!-- fill="#F5CFCE" stroke="#DEBBBA" -->
                <circle cx="105.5" cy="105.5" r="105" class="fill-current" />
                <rect x="74" y="62" width="71" height="17" fill="white" />
                <rect x="74" y="103" width="66" height="17" fill="white" />
                <rect x="74" y="141" width="17" height="17" fill="white" />
              </svg>
              <img
                class="ml-7 h-5"
                src="/images/brand/fd_logo_green.png"
                alt=""
              />
              <span class="sr-only">FEMDEV</span>
            </a>
          </div>
          <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <!--
            <a href="#" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Sign in
            </a>
            -->
            <a
              href="#"
              class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-green-700 hover:bg-brand-green-700"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContentContainer from '../ui/ContentContainer.vue';

export default defineComponent({
  components: {
    ContentContainer,
  },
});
</script>
