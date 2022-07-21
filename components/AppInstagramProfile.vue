<template>
  <div itemscope itemtype="http://schema.org/Organization" class="instagram">
    <a
      itemprop="sameAs"
      href="https://instagram.com/la.volta"
      title="La Volta en Instagram"
      target="_blank"
    >
      <IconInstagram />
      <span>Instagram</span>
    </a>
  </div>
</template>

<script>
import IconInstagram from '~/assets/icons/instagram.svg?inline'
export default {
  components: {
    IconInstagram,
  },
}
</script>

<style lang="postcss" scoped>
.instagram span {
  @apply sr-only;
}
</style>
