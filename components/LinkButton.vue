<template>
  <NuxtLink
    v-if="type === 'internal'"
    :to="path"
    :class="[btnClass, colorVariants]"
  >
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
    size: {
      type: String,
      default: 'normal',
    },
    rounded: {
      type: String,
      default: 'medium',
    },
    variant: {
      type: String,
      default: 'primary',
    },
  },
  computed: {
    btnClass() {
      return {
        base: true,
        'rounded-full': this.rounded === 'large',
        'rounded-lg': this.rounded === 'medium',

        normal: this.size === 'normal',
        small: this.size === 'small',
        large: this.size === 'large',
      }
    },
    // eslint-disable-next-line vue/return-in-computed-property
    colorVariants() {
      switch (this.variant) {
        case 'primary':
          return 'primary'
        case 'secondary':
          return 'secondary'
        case 'danger':
          return 'border-red-300 bg-red-300 text-white'
        default:
          break
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.base {
  @apply flex
  justify-center
  font-ibm
  tracking-wide
  capitalize
  w-8/12
  mx-auto
  shadow-sm
  md:w-5/12
  lg:w-4/12
  xl:w-3/12;
}
.small {
  @apply px-4 py-2;
}
.normal {
  @apply px-6 py-3;
}
.primary {
  @apply bg-gray-400
  text-gray-800
  dark:text-gray-200
  dark:bg-gray-500
  hover:bg-gray-500
  hover:text-gray-200
  dark:hover:bg-gray-800
  dark:hover:text-gray-300;
}
.secondary {
  @apply bg-gray-300
  text-gray-800
  border
  border-gray-200
  hover:bg-gray-500
  hover:text-gray-300
  dark:bg-gray-600
  dark:text-gray-50
  dark:border-gray-700
  dark:hover:bg-gray-800
  dark:hover:text-gray-300;
}
</style>
