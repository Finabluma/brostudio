<template>
  <figure>
    <img-item
      :src="asset._ref"
      :alt="alternativeText"
      fit="cover"
      :modifiers="{
        crop: crop,
        hotspot: hotspot,
        q: 80,
      }"
      sizes="xs:100vw sm:100vw xl:100vw"
    />
    <figcaption>{{ caption }}</figcaption>
  </figure>
</template>

<script>
import ImgItem from '~/components/ImgItem.vue'
export default {
  name: 'ImageBlock',
  components: {
    ImgItem,
  },
  props: {
    asset: {
      type: Object,
      default: null,
    },
    caption: {
      type: String,
      default: '',
    },
    alternativeText: {
      type: String,
      default: '',
    },
    crop: {
      type: Object,
      default: null,
    },
    hotspot: {
      type: Object,
      default: null,
    },
  },
}
</script>
