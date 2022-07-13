<template>
  <NuxtLink v-if="type === 'internal'" :to="path" class="link-button">
    <slot />
  </NuxtLink>
  <a
    v-else-if="type === 'external'"
    :href="href"
    class="link-button"
    target="_blank"
    rel="noopener"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: 'LinkButton',
  props: {
    type: {
      type: String,
      default: 'internal',
      validator(value) {
        return ['internal', 'external'].includes(value)
      },
    },
    path: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: '',
    },
  },
}
</script>
