<template>
  <div class="flex flex-col">
    <ul>
      <li
        v-if="$colorMode.preference === 'system'"
        role="button"
        aria-label="systemmode"
        @click="$colorMode.preference = 'dark'"
      >
        <IconSystem />
        <span class="hidden">Dark ColoMode</span>
      </li>
      <li
        v-else-if="$colorMode.preference === 'dark'"
        @click="$colorMode.preference = 'light'"
      >
        <IconDark />
        <span class="hidden">Light ColorMode</span>
      </li>
      <li v-else @click="$colorMode.preference = 'system'">
        <IconLight />
        <span class="hidden">System ColoMode</span>
      </li>
    </ul>
  </div>
</template>

<script>
import IconSystem from '~/assets/icons/system.svg?inline'
import IconLight from '~/assets/icons/light.svg?inline'
import IconDark from '~/assets/icons/dark.svg?inline'
export default {
  name: 'ColorModePicker',
  components: {
    IconSystem,
    IconLight,
    IconDark,
  },
  data() {
    return {
      colors: ['system', 'light', 'dark'],
    }
  },
  methods: {
    getClasses(color) {
      if (this.$colorMode && this.$colorMode.unknown) {
        return {}
      }
      return {
        [this.$colorMode.value]: true,
        selected: color === this.$colorMode.value,
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
svg {
  @apply w-[18px];

  &.icon {
    @apply relative
    m-0;
  }
}
</style>
