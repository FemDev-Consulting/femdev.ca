<template>
  <div>
    <div class="py-40">
      <content-container>
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
            Who we work with
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
            We are proud to partner with organizations that are committed to
            advancing gender equality, social justice and human rights.
          </p>

          <ul
            class="
              mx-auto
              md:mx-0
              mt-20
              w-1/2
              md:w-auto
              grid
              gap-2
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-4
            "
          >
            <li
              v-for="client in clientList"
              :key="client.title"
              class="flex justify-center bg-white py-20 px-10"
            >
              <img
                class="h-12 lg:h-20 object-contain self-center"
                :src="client.img"
                alt=""
              />
              <span class="sr-only">{{ client.title }}</span>
            </li>
          </ul>
        </section>
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
  setup() {
    const clientList = useFemDevClients();

    return {
      clientList,
    };
  },
};
function useFemDevClients() {
  const clients = [
    {
      img: '/images/clients/bill-and-melinda-gates-foundation.jpg',
      title: 'Bill-and-melinda-gates-foundation.jpg',
    },
    {
      img: '/images/clients/data2x.png',
      title: 'data2x.jpg',
    },
    {
      img: '/images/clients/global-affairs-canada.jpg',
      title: 'global-affairs-canada.jpg',
    },
    {
      img: '/images/clients/idrc.png',
      title: 'idrc.png',
    },
    {
      img: '/images/clients/islamic-relief-canada.png',
      title: 'islamic-relief-canada.png',
    },
    {
      img: '/images/clients/malala-fund.png',
      title: 'malala-fund.png',
    },
    {
      img: '/images/clients/oxfam-canada.png',
      title: 'oxfam-canada.png',
    },
    {
      img: '/images/clients/urban-institute.jpg',
      title: 'urban-institute.jpg',
    },
  ];

  return clients;
}
</script>
