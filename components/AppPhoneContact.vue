<template>
  <div itemscope itemtype="https://schema.org/Place" class="phone">
    <a
      itemprop="telephone"
      href="tel:0034977651416"
      title="Reservas al 977651416"
      class="phone"
    >
      <IconPhone />
      <span>977651416</span>
    </a>
  </div>
</template>

<script>
import IconPhone from '~/assets/icons/phone.svg?inline'
export default {
  components: {
    IconPhone,
  },
}
</script>

<style lang="postcss" scoped>
div a {
  @apply md:flex
  md:items-center;

  & span {
    @apply sr-only
    font-hero
    font-light
    text-[16px]
    md:not-sr-only
    md:flex
    md:ml-2;
  }
}

.drawer div a {
  @apply flex
  justify-center
  items-center;

  & .icon {
    @apply w-4;
  }

  & span {
    @apply not-sr-only
    text-sm
    ml-2;
  }
}
</style>
