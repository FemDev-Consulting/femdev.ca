<template>
  <div>
    <div class="bg-brand-green-50">
      <content-container>
        <div class="my-0 border-b-2 border-brand-green-700">
          <div class="w-full py-32 md:py-30">
            <section>
              <h2
                class="
                  mb-2
                  tracking-wide
                  text-brand-green-800 text-2xl
                  sm:text-lg
                  md:text-xl
                  xl:text-2xl
                "
              >
                Who we work with
              </h2>
              <div class="h-1 w-8 mb-12 bg-brand-pink-900"></div>

              <p
                class="
                  w-4/5
                  text-brand-green-800 text-4xl
                  sm:text-4xl
                  md:text-5xl
                  xl:text-6xl
                "
              >
                We are proud to partner with organizations that are committed to
                advancing gender equality and social justice
              </p>

              <ul
                class="
                  mx-auto
                  md:mx-0
                  mt-20
                  md:w-auto
                  grid
                  gap-2
                  grid-cols-2
                  md:grid-cols-3
                  xl:grid-cols-4
                "
              >
                <li v-for="client in clientList" :key="client.title">
                  <a
                    :href="client.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="
                      flex
                      justify-center
                      bg-white
                      py-10
                      lg:py-14
                      xl:py-20
                      px-10
                      md:px-16
                      w-full
                      self-center
                    "
                  >
                    <img
                      class="h-10 md:h-10 lg:h-10 xl:h-14 object-contain"
                      :src="client.img"
                      alt=""
                    />
                    <span class="sr-only">{{ client.title }}</span>
                  </a>
                </li>
              </ul>
            </section>
          </div>
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
      title: 'Bill & Melinda Gates Foundation',
      href: 'https://www.gatesfoundation.org',
    },
    {
      img: '/images/clients/data2x.png',
      title: 'Data2X',
      href: 'https://data2x.org',
    },
    {
      img: '/images/clients/dced.png',
      title: 'Donor Committee for Enterprise Development',
      href: 'https://www.enterprise-development.org',
    },
    {
      img: '/images/clients/fundacion-capital.png',
      title: 'Fundación Capital',
      href: 'https://www.fundacioncapital.org/home',
    },
    {
      img: '/images/clients/global-affairs-canada.jpg',
      title: 'Global Affairs Canada',
      href: 'https://www.international.gc.ca/global-affairs-affaires-mondiales/home-accueil.aspx?lang=eng',
    },
    {
      img: '/images/clients/giz.jpg',
      title: 'Gesellschaft für Internationale Zusammenarbeit',
      href: 'https://www.giz.de/en/html/index.html',
    },
    {
      img: '/images/clients/idrc.png',
      title: 'International Development Research Centre',
      href: 'https://www.idrc.ca/en',
    },
    {
      img: '/images/clients/islamic-relief-canada.png',
      title: 'Islamic Relief Canada',
      href: 'https://www.islamicreliefcanada.org',
    },
    {
      img: '/images/clients/malala-fund.png',
      title: 'Malala Fund',
      href: 'https://malala.org',
    },
    {
      img: '/images/clients/oxfam-canada.png',
      title: 'Oxfam Canada',
      href: 'https://www.oxfam.org/en',
    },
    {
      img: '/images/clients/unf.jpg',
      title: 'United Nations Foundation',
      href: 'https://unfoundation.org',
    },
    {
      img: '/images/clients/urban-institute.jpg',
      title: 'Urban Institute',
      href: 'https://www.urban.org',
    },
  ];

  return clients;
}
</script>
