<template>
  <div>
    <div class="mt-20 mb-20">
      <!-- Heading -->
      <h1 class="text-6xl md:text-7xl text-brand-green-800 xl:w-2/3">
        <slot name="header">No Header Provided</slot>
      </h1>
      <!-- Markup byline only if content is provided in the slot -->
      <p
        v-if="$slots['byline']"
        class="mt-2 w-full md:w-4/5 lg:w-3/5 text-3xl text-brand-green-600"
      >
        <slot name="byline"></slot>
      </p>
    </div>
  </div>
</template>
