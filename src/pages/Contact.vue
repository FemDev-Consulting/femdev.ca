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
          class="order-2 md:order-1 w-full md:w-3/5 px-4 sm:px-10 py-16 bg-brand-green-200 rounded-md border-4 border-brand-green-200">
          <section>
            <h2 class="sr-only">Contact form</h2>
            <p>
              If forms aren't your thing, feel free to drop us a line at
              <a class="underline" href="mailto:hello@hello.com">hello@femdev.ca</a>. We will do our best to respond
              within 48
              hours.
            </p>
            <contact-form />
          </section>
        </div>
        <!-- Information display -->
        <div class="order-1 md:order-2 w-full md:w-2/5 pb-20 md:p-10 lg:p-20 self-center">
          <section>
            <h2 class="sr-only">Contact details</h2>

            <dl class="mt-8 text-base text-gray-500">
              <div class="mt-6">
                <dt class="sr-only">X Social Media</dt>
                <dd class="flex justify-start items-center">
                  <!-- Heroicon name: outline/phone -->
                  <div class="border-2 border-gray-800 rounded-md p-2">
                    <svg class="h-10 w-10 fill-current text-gray-800" viewBox="0 0 396 396" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M301.026 37.125H355.608L236.362 173.415L376.645 358.875H266.805L180.774 246.395L82.335 358.875H27.72L155.265 213.098L20.691 37.125H133.32L211.084 139.937L301.026 37.125ZM281.869 326.205H312.114L116.886 68.079H84.4305L281.869 326.205Z" />
                    </svg>
                  </div>
                  <a rel="noopener noreferrer" href="https://twitter.com/feminist_dev?lang=en">
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
                    <svg class="h-12 w-12 fill-current text-gray-800" fill="#000000" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 128 128"
                      style="enable-background: new 0 0 128 128" xml:space="preserve">
                      <g>
                        <rect x="35" y="49" width="8" height="40" />
                        <rect x="35" y="31" width="8" height="8" />
                        <path
                          d="M63,74v-5c0-6.1,4.9-11,11-11s11,4.9,11,11v20h8V69c0-10.5-8.5-19-19-19c-4.1,0-7.9,1.3-11,3.5V49h-8v20v5v15h8V74z" />
                        <!--<path d="M127,1H1v126h126V1z M119,119H9V9h110V119z" />-->
                      </g>
                    </svg>
                  </div>
                  <a target="_blank" href="https://www.linkedin.com/company/femdev-consulting"
                    rel="noopener noreferrer">
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
                    <svg class="w-8 h-8 fill-current text-gray-800" xmlns:dc="http://purl.org/dc/elements/1.1/"
                      xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                      xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg"
                      xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                      xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" x="0px" y="0px"
                      viewBox="0 0 100 100">
                      <g transform="translate(0,-952.36218)">
                        <path style="
                            text-indent: 0;
                            text-transform: none;
                            direction: ltr;
                            color: #000000;
                            enable-background: accumulate;
                          "
                          d="m 8.0000001,973.36217 a 2.0002,2.0002 0 0 0 -1.9999999,2 l 0,54.00003 a 2.0002,2.0002 0 0 0 1.9999999,2 l 83.9999999,0 a 2.0002,2.0002 0 0 0 2,-2 l 0,-54.00003 a 2.0002,2.0002 0 0 0 -2,-2 l -83.9999999,0 z m 4.6027999,4 74.5087,0 -17.2874,14.70656 a 2.0002,2.0002 0 0 0 -0.015,0.0131 L 50.1203,1009.1737 30.4312,992.08186 a 2.0002,2.0002 0 0 0 -0.0378,-0.0319 L 12.6028,977.36217 z M 90,980.15686 l 0,47.20534 -80,0 0,-46.96128 17.8378,14.72657 20.9713,18.20501 a 2.0002,2.0002 0 0 0 2.6221,0 l 20.9847,-18.21689 0.0097,-0.008 0.0056,-0.005 L 90,980.15686 z"
                          fill-opacity="1" fill-rule="evenodd" stroke="none" marker="none" visibility="visible"
                          display="inline" overflow="visible" />
                      </g>
                    </svg>
                  </div>
                  <a href="mailto:hello@femdev.ca">
                    <span class="ml-3 text-lg text-brand-green-800">
                      hello@femdev.ca
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
import { defineComponent } from 'vue';
import { useHead } from '@vueuse/head';

// Components
import PageLayout from '../layouts/Page.vue';
import ContactForm from '../components/contact/Form.vue';
import ContentPageHeading from '../components/ui/ContentPageHeading.vue';

export default defineComponent({
  components: {
    PageLayout,
    ContactForm,
    ContentPageHeading,
  },
  setup() {
    setupHeadTags();
  },
});

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
