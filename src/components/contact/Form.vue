<template>
  <div>
    <div class="mt-8 max-w-md">
      <div v-if="isMessageSent">
        <div
          class="mt-1 flex bg-brand-green-100 mb-4 bordser-t-4 border-red-800"
        >
          <div class="w-16 bg-brand-green-800 flex">
            <div class="p-4 self-center">
              <svg
                class="w-8 h-8 fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xml:space="preserve"
                version="1.1"
                style="
                  shape-rendering: geometricPrecision;
                  text-rendering: geometricPrecision;
                  image-rendering: optimizeQuality;
                "
                viewBox="0 0 847 847"
                x="0px"
                y="0px"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <g>
                  <path
                    d="M150 22l546 0c71,0 129,58 129,128l0 546c0,71 -58,129 -129,129l-546 0c-70,0 -128,-58 -128,-129l0 -546c0,-70 58,-128 128,-128zm169 512l-126 -126c-1,-1 -3,-1 -4,0l-39 39c-1,1 -1,3 0,4l177 177c1,1 3,1 4,0l366 -366c1,-1 1,-3 0,-4l-39 -39c-1,-1 -3,-1 -4,0l-316 315c-5,6 -14,6 -19,0zm377 -489l-546 0c-57,0 -105,48 -105,105l0 546c0,58 48,105 105,105l546 0c58,0 105,-47 105,-105l0 -546c0,-57 -47,-105 -105,-105z"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
          <div class="w-auto text-black items-center p-4">
            <span class="text-brand-green-900 text-lg pb-4">Success!</span>
            <p class="leading-tight text-sm">
              Your message was sent successfully.
            </p>
          </div>
        </div>
      </div>
      <div v-if="sendError">
        <div class="mt-1 flex bg-red-50 mb-4 bordser-t-4 border-red-800">
          <div class="w-16 bg-red-800 flex">
            <div class="p-4 self-center">
              <svg
                class="w-8 h-8 fill-current text-white"
                xmlns:x="http://ns.adobe.com/Extensibility/1.0/"
                xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/"
                xmlns:graph="http://ns.adobe.com/Graphs/1.0/"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 70 70"
                enable-background="new 0 0 70 70"
                xml:space="preserve"
              >
                <g>
                  <g i:extraneous="self">
                    <path
                      d="M60.9,3h-52c-3.3,0-6,2.7-6,6v52c0,3.3,2.7,6,6,6h52c3.3,0,6-2.7,6-6V9C66.9,5.7,64.2,3,60.9,3z M62.9,61c0,1.1-0.9,2-2,2    h-52c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2h52c1.1,0,2,0.9,2,2V61z"
                    ></path>
                    <g>
                      <path
                        d="M34.9,42.7c-1.1,0-2-0.9-2-2V21.6c0-1.1,0.9-2,2-2s2,0.9,2,2v19.1C36.9,41.8,36,42.7,34.9,42.7z"
                      ></path>
                    </g>
                    <g>
                      <path
                        d="M34.9,52.4c-1.1,0-2-0.9-2-2v-2.1c0-1.1,0.9-2,2-2s2,0.9,2,2v2.1C36.9,51.5,36,52.4,34.9,52.4z"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div class="w-auto text-black items-center p-4">
            <span class="text-red-900 text-lg pb-4"> Heads Up!</span>
            <p class="leading-tight text-sm">
              The form was not submitted due to an error on our end. Please try
              again in a few minutes, or reach out directly using one of our
              other contact methods.
            </p>
          </div>
        </div>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="mb-5">
          <label for="full_name" class="block text-gray-700 mb-1">
            Preferred name
            <span class="sr-only">(Required field)</span>
            <span class="text-gray-600">*</span>
          </label>
          <input
            v-model="name"
            type="text"
            name="full_name"
            id="full_name"
            autocomplete="name"
            placeholder="Harley Quinn"
            required
            class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-brand-green-500 focus:border-brand-green-500 border-gray-500"
          />
          <div v-if="Array.isArray(nameError) && nameError.length" class="mt-1">
            <ul>
              <li
                v-for="error in nameError"
                :key="error"
                class="text-xs text-red-800 list-none"
              >
                {{ error }}
              </li>
            </ul>
          </div>
        </div>

        <div class="mb-5">
          <label for="email" class="block text-gray-700 mb-2"
            >Email
            <span class="sr-only">(Required field)</span>
            <span class="text-gray-600">*</span>
          </label>
          <input
            v-model="email"
            id="email"
            name="email"
            type="email"
            autocomplete="email"
            placeholder="harley.quinn@justiceleague.com"
            required
            class="block w-full py-3 px-4 placeholder-gray-500 focus:ring-brand-green-500 focus:border-brand-green-500 border-gray-500"
          />
          <div
            v-if="Array.isArray(emailError) && emailError.length"
            class="mt-1"
          >
            <ul>
              <li
                v-for="error in emailError"
                :key="error"
                class="text-xs text-red-800 list-none"
              >
                {{ error }}
              </li>
            </ul>
          </div>
        </div>

        <div class="mb-5">
          <label for="organization" class="block text-gray-700 mb-2">
            Organization
          </label>
          <input
            v-model="organization"
            id="organization"
            name="organization"
            type="text"
            autocomplete="organization"
            placeholder="Suicide Squad"
            class="block w-full py-3 px-4 placeholder-gray-500 focus:ring-brand-green-500 focus:border-brand-green-500 border-gray-500"
          />
          <div
            v-if="Array.isArray(emailError) && emailError.length"
            class="mt-1"
          >
            <ul>
              <li
                v-for="error in emailError"
                :key="error"
                class="text-xs text-red-800 list-none"
              >
                {{ error }}
              </li>
            </ul>
          </div>
        </div>

        <div class="mb-5">
          <label for="message" class="block text-gray-700 mb-2"
            >Message
            <span class="sr-only">(Required field)</span>
            <span class="text-gray-600">*</span>
          </label>
          <textarea
            v-model="message"
            id="message"
            name="message"
            rows="5"
            placeholder="How can we help?"
            required
            class="block w-full py-3 px-4 placeholder-gray-500 focus:ring-brand-green-500 focus:border-brand-green-500 border-gray-500"
          >
          </textarea>
          <div
            v-if="Array.isArray(messageError) && messageError.length"
            class="mt-1"
          >
            <ul>
              <li
                v-for="error in messageError"
                :key="error"
                class="text-xs text-red-800 list-none"
              >
                {{ error }}
              </li>
            </ul>
          </div>
        </div>

        <div class="block mt-5">
          <div class="">
            <div>
              <button type="submit" class="btn-primary">
                Submit
                <span v-if="isTryingToSending">
                  <svg
                    class="ml-4 h-7 w-7"
                    xmlns:svg="http://www.w3.org/2000/svg"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.0"
                    viewBox="0 0 128 128"
                    xml:space="preserve"
                  >
                    <g>
                      <path
                        d="M63.88 0A63.88 63.88 0 1 1 0 63.88 63.88 63.88 0 0 1 63.88 0zm0 11.88a52 52 0 1 1-52 52 52 52 0 0 1 52-52zm0 46.2a5.8 5.8 0 1 1-5.8 5.8 5.8 5.8 0 0 1 5.8-5.8z"
                        fill-rule="evenodd"
                        fill="#ffffff"
                      />
                      <path d="M58.25 5h11.3v59h-11.3V5z" fill="#ffffff" />
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 64 64"
                        to="360 64 64"
                        dur="1620ms"
                        repeatCount="indefinite"
                      />
                    </g>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { watchEffect } from '@vue/runtime-core';
import { ref } from '@vue/reactivity';
import axios from 'axios';

export default defineComponent({
  setup() {
    // Stateful flags
    const isSubmitHitOnce = ref(false);
    const isTryingToSending = ref(false);
    const isMessageSent = ref(false);

    // Form data
    const name = ref('');
    const email = ref('');
    const organization = ref('');
    const message = ref('');

    // Error tracking
    const nameError = ref([] as string[]);
    const emailError = ref([] as string[]);
    const messageError = ref([] as string[]);
    const sendError = ref(false);

    // Clear any validation errors stored
    function clearErrors() {
      nameError.value = [];
      emailError.value = [];
      messageError.value = [];
      sendError.value = false;
    }

    // Clear form data
    function clearFormData() {
      name.value = '';
      email.value = '';
      message.value = '';
    }

    function hasFormErrors() {
      let errors = false;

      // Check if there is an error on Name
      if (Array.isArray(nameError.value) && nameError.value.length) {
        errors = true;
      }

      // Check if there is an error on Email
      if (Array.isArray(emailError.value) && emailError.value.length) {
        errors = true;
      }

      // Check if there is an error on Message
      if (Array.isArray(messageError.value) && messageError.value.length) {
        errors = true;
      }

      // Check if there is an error on send
      if (sendError.value) {
        errors = true;
      }

      return errors;
    }

    // Reset the form data when the reset button is pressed
    function resetForm() {
      // Clear any previous errors in state
      clearErrors();

      // Clear the form data
      clearFormData();

      // Flag that the Submit button has been hit
      isSubmitHitOnce.value = false;
    }

    // Walk throught the form data and validate
    // any issues - if issues are found add them to the
    // errors array
    function validateFormData() {
      // Set error message texts
      const nameNotProvided = 'We would like to ask you your name';
      const emailNotProvided =
        "We're going to need an email address to reply back to you";
      const messageNotProvided =
        "Please provide a message, we'd love to hear from you";
      const messageNotLongEnough =
        "That's a pretty short message you got there";

      // Clear existing errors
      clearErrors();

      // Check the name
      if (name.value === '') {
        nameError.value.push(nameNotProvided);
      }
      // Check the email
      if (email.value === '') {
        emailError.value.push(emailNotProvided);
      } else {
        // TODO: Check email against regex
      }
      // Check the message text
      if (message.value === '') {
        messageError.value.push(messageNotProvided);
      } else if (message.value.length < 3) {
        messageError.value.push(messageNotLongEnough);
      }
    }

    function handleSubmit() {
      // Clear the success message if it is up
      isMessageSent.value = false;

      // Flag that the Submit button has been hit
      isSubmitHitOnce.value = true;

      // Validate the input which will clear the errors first
      validateFormData();

      // Only try if there are no validation errors
      if (!hasFormErrors()) {
        // Set the trying flag
        isTryingToSending.value = true;

        // Send the data over to the form processor
        // The form-name attribute is required by netlify to process
        // the form correctly
        axios({
          method: 'POST',
          url: '/',
          data: encode({
            'form-name': 'femdev-contact-form',
            name: name.value,
            email: email.value,
            organization: organization.value,
            message: message.value,
          }),
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        })
          // Successfull response
          .then(() => {
            // Reset the form
            resetForm();

            // Display the success message
            isMessageSent.value = true;
          })
          // Error response
          .catch((error) => {
            // throw the send error flag
            sendError.value = true;
          })
          // Catch all state and clean up after request
          .finally(() => {
            // Set the trying flag to false since we are done the operation
            isTryingToSending.value = false;
          });

        // Display results (did it succeed or fail)
        // Reset the form data
      }
    }

    // Whenever any of the fields change check to see
    // if they are valid or not
    watchEffect(() => {
      // Validate the input as long as the submit button has been hit once
      if (isSubmitHitOnce.value) {
        validateFormData();
      }
    });

    function encode(data: any) {
      return Object.keys(data)
        .map(
          (key) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
        )
        .join('&');
    }

    return {
      isTryingToSending,
      isMessageSent,

      name,
      email,
      organization,
      message,

      nameError,
      emailError,
      messageError,
      sendError,
      handleSubmit,
    };
  },
});
</script>
