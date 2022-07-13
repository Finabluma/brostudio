<template>
  <div>
    <h2 v-if="pageSection.heading">
      {{ pageSection.heading }}
    </h2>
    <RichText
      v-if="pageSection.mainContent.length"
      :content="pageSection.mainContent"
    />
  </div>
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
