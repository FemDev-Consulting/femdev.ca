<template>
  <div>
    <page-layout>
      <content-page-heading>
        <template v-slot:header>Get in touch</template>
        <template v-slot:byline>
          We would love to hear from you to learn about your organisation and
          how we can support you.
        </template>
      </content-page-heading>

      <div class="flex flex-row flex-wrap align-middle justify-center">
        <!-- Form -->
        <div
          class="
            order-2
            md:order-1
            w-full
            md:w-3/5
            px-10
            py-16
            bg-brand-green-200
            rounded-md
            border-4 border-brand-green-200
          "
        >
          <section>
            <h2 class="sr-only">Contact form</h2>
            <p>
              If forms aren't your thing, feel free to drop me a line at
              <a class="underline" href="mailto:hello@hello.com"
                >hello@hello.com</a
              >. I'll respond within 48 hours, and am currently based in Ottawa,
              Canada.
            </p>
            <contact-form />
          </section>
        </div>
        <!-- Information display -->
        <div
          class="
            order-1
            md:order-2
            w-full
            md:w-2/5
            pb-20
            md:p-10
            lg:p-20
            self-center
          "
        >
          <section>
            <h2 class="sr-only">Contact details</h2>

            <p class="mt-10 text-xl text-brand-green-800 max-w-prose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>

            <dl class="mt-8 text-base text-gray-500">
              <div class="mt-6">
                <dt class="sr-only">Twitter</dt>
                <dd class="flex justify-start items-center">
                  <!-- Heroicon name: outline/phone -->
                  <div class="border-2 border-gray-800 rounded-md p-1">
                    <svg
                      class="h-12 w-12 fill-current text-gray-800"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M78.7702 35.332C76.8512 36.178 74.7302 36.836 72.6092 37.212C70.4882 34.016 66.9532 31.76 62.9132 31.196C62.2062 31.102 61.4992 31.008 60.7922 31.008C53.9242 31.008 48.1672 35.614 47.1572 41.912C47.0562 42.57 46.9552 43.322 46.9552 43.98C39.0772 41.254 32.6132 35.802 28.9772 28.658C28.7752 28.282 28.3712 28.094 27.9672 28C27.5632 28 27.1592 28.188 26.8562 28.47C24.5332 31.76 23.9272 35.708 25.1392 39.374C24.9372 39.374 24.7352 39.28 24.6342 39.374C24.1292 39.468 23.8262 39.75 23.7252 40.22C22.6142 44.168 23.7252 48.398 26.3512 51.5C26.0482 51.5 25.8462 51.594 25.6442 51.782C25.2402 52.064 25.1392 52.534 25.2402 52.91C26.3512 56.952 29.4822 60.242 33.5222 61.652C29.2802 63.062 24.8362 63.626 20.2912 63.344C19.7862 63.344 19.2812 63.626 19.0792 64.096C18.8772 64.566 19.0792 65.036 19.4832 65.412C24.0282 68.608 29.3812 70.676 35.0372 71.522C36.8552 71.804 38.5722 71.898 40.3902 71.898C55.9442 71.898 69.6802 62.216 73.8212 48.304C74.1242 47.552 74.3262 46.706 74.4272 45.954C74.4272 45.766 74.5282 45.578 74.5282 45.39C74.6292 45.108 74.6292 44.826 74.7302 44.544C77.0532 42.288 78.9722 39.75 80.3862 36.93C80.5882 36.554 80.4872 35.99 80.1842 35.708C79.7802 35.238 79.1742 35.144 78.7702 35.332ZM63.0142 41.724C61.7012 41.536 60.7922 40.408 60.9942 39.186C61.1962 37.964 62.4082 37.118 63.7212 37.306C65.0342 37.494 65.9432 38.622 65.7412 39.844C65.5392 41.066 64.3272 41.912 63.0142 41.724Z"
                      />
                    </svg>
                  </div>
                  <a
                    rel="noopener noreferrer"
                    href="https://twitter.com/feminist_dev?lang=en"
                  >
                    <span class="ml-3 text-lg text-brand-green-800">
                      @Feminist_Dev
                    </span>
                  </a>
                </dd>
              </div>
              <div class="mt-6">
                <dt class="sr-only">LinkedIn</dt>
                <dd class="flex justify-start items-center">
                  <!-- Heroicon name: linkedIn -->
                  <div class="border-2 border-gray-800 rounded-md p-1">
                    <svg
                      class="h-12 w-12 fill-current text-gray-800"
                      fill="#000000"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 128 128"
                      style="enable-background: new 0 0 128 128"
                      xml:space="preserve"
                    >
                      <g>
                        <rect x="35" y="49" width="8" height="40" />
                        <rect x="35" y="31" width="8" height="8" />
                        <path
                          d="M63,74v-5c0-6.1,4.9-11,11-11s11,4.9,11,11v20h8V69c0-10.5-8.5-19-19-19c-4.1,0-7.9,1.3-11,3.5V49h-8v20v5v15h8V74z"
                        />
                        <!--<path d="M127,1H1v126h126V1z M119,119H9V9h110V119z" />-->
                      </g>
                    </svg>
                  </div>
                  <a href="#" rel="noopener noreferrer">
                    <span class="ml-3 text-lg text-brand-green-800">
                      LinkedIn
                    </span>
                  </a>
                </dd>
              </div>
              <div class="mt-6">
                <dt class="sr-only">Email</dt>
                <dd class="flex justify-start items-center">
                  <!-- Heroicon name: outline/mail -->
                  <div class="border-2 border-gray-800 rounded-md p-3">
                    <svg
                      class="w-8 h-8 fill-current text-gray-800"
                      xmlns:dc="http://purl.org/dc/elements/1.1/"
                      xmlns:cc="http://creativecommons.org/ns#"
                      xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                      xmlns:svg="http://www.w3.org/2000/svg"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                      xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 100 100"
                    >
                      <g transform="translate(0,-952.36218)">
                        <path
                          style="
                            text-indent: 0;
                            text-transform: none;
                            direction: ltr;
                            color: #000000;
                            enable-background: accumulate;
                          "
                          d="m 8.0000001,973.36217 a 2.0002,2.0002 0 0 0 -1.9999999,2 l 0,54.00003 a 2.0002,2.0002 0 0 0 1.9999999,2 l 83.9999999,0 a 2.0002,2.0002 0 0 0 2,-2 l 0,-54.00003 a 2.0002,2.0002 0 0 0 -2,-2 l -83.9999999,0 z m 4.6027999,4 74.5087,0 -17.2874,14.70656 a 2.0002,2.0002 0 0 0 -0.015,0.0131 L 50.1203,1009.1737 30.4312,992.08186 a 2.0002,2.0002 0 0 0 -0.0378,-0.0319 L 12.6028,977.36217 z M 90,980.15686 l 0,47.20534 -80,0 0,-46.96128 17.8378,14.72657 20.9713,18.20501 a 2.0002,2.0002 0 0 0 2.6221,0 l 20.9847,-18.21689 0.0097,-0.008 0.0056,-0.005 L 90,980.15686 z"
                          fill-opacity="1"
                          fill-rule="evenodd"
                          stroke="none"
                          marker="none"
                          visibility="visible"
                          display="inline"
                          overflow="visible"
                        />
                      </g>
                    </svg>
                  </div>
                  <a href="mailto:support@example.com">
                    <span class="ml-3 text-lg text-brand-green-800">
                      support@example.com
                    </span>
                  </a>
                </dd>
              </div>
            </dl>
          </section>
        </div>
      </div>
    </page-layout>
  </div>
</template>

<script lang="ts">
import PageLayout from '../layouts/Page.vue';
import ContactForm from '../components/contact/Form.vue';
import ContentPageHeading from '../components/ui/ContentPageHeading.vue';
import { useHead } from '@vueuse/head';

export default {
  components: {
    PageLayout,
    ContactForm,
    ContentPageHeading,
  },
  setup() {
    setupHeadTags();
  },
};

function setupHeadTags() {
  const pagetitle = 'Contact';
  const siteTitle = 'FemDev Consulting';
  const title = `${pagetitle} | ${siteTitle}`;
  const pageDescription = 'Contact page for FemDev Consulting';

  useHead({
    // Can be static or computed
    title: title,
    meta: [
      {
        name: 'description',
        content: pageDescription,
      },
    ],
  });
}
</script>
