<template>
  <aside :class="bg">
    <h1 class="sr-only">{{ title }}</h1>
    <div class="inner">
      <slot />
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    layout: {
      type: String,
      default: 'green',
    },
    title: {
      type: String,
      default: null,
    },
    subtitle: {
      type: String,
      default: null,
    },
  },
  computed: {
    bg() {
      return {
        green: this.layout === 'green',
        gray: this.layout === 'gray',
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
aside {
  @apply relative
  z-30
  py-10
  lg:py-3
  shadow-slate400
  dark:shadow-md;

  & .inner {
    @apply mx-auto
    mt-10
    content-before
    content-after
    w-full
    md:w-11/12
    lg:w-9/12
    2xl:px-10;

    &:before,
    &:after {
      @apply block h-1 w-3/12 bg-slate400
      mx-auto
      md:ml-0
      dark:bg-gray-300;
    }

    &:before {
      @apply mb-6;
    }

    &:after {
      @apply mb-8 mt-10;
    }
  }
}

.gray {
  @apply bg-gradient-radial
  from-white/60
  dark:from-gray-600
  dark:via-gray-700
  dark:to-gray-800;

  & .inner {
    @apply w-full px-0;
  }

  & .inner:before,
  & .inner:after {
    @apply bg-white/90
    max-w-[200px]
    mx-auto
    md:ml-8
    lg:ml-36
    xl:ml-40
    2xl:ml-72
    dark:bg-gray-500;
  }
}

.green {
  @apply bg-gradient-radial
  from-white
  dark:from-gray-600
  dark:via-gray-700
  dark:to-gray-800;

  & .inner:before,
  & .inner:after {
    @apply bg-gray-400/80 dark:bg-gray-500;
  }
}
</style>
