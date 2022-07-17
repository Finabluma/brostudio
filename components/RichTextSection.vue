<template>
  <section v-if="pageSection.disabled !== true" class="rich-text-section">
    <h1 v-if="pageSection.heading">
      {{ pageSection.heading }}
    </h1>
    <RichText
      v-if="pageSection.mainContent.length"
      :content="pageSection.mainContent"
    />
  </section>
</template>

<script>
import RichText from '~/components/RichText.vue'
export default {
  name: 'RichTextSection',
  components: {
    RichText,
  },
  props: {
    pageSection: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="postcss" scoped>
.rich-text-section {
  @apply w-11/12
  mx-auto
  flex
  flex-col
  justify-center
  items-center
  content-after
  sm:w-9/12
  lg:w-9/12
  xl:w-7/12;

  /* &:after {
    @apply block
    w-1
    h-1
    rounded-full
    ring-2
  ring-gray-500
  bg-gray-100
    mx-auto;
  } */

  & h1 {
    @apply text-altheader
    font-dejanire
    font-light
    content-after
    mb-5;

    &:after {
      @apply mx-auto mt-2;
    }
  }
}
</style>
