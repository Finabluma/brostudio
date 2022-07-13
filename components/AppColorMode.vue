<template>
  <div class="flex flex-col">
    <ul>
      <li
        v-if="isLightMode"
        role="button"
        aria-label="lightmode"
        @click="$colorMode.preference = 'light'"
      >
        <svg
          class="h-5 w-5 sun"
          :class="getClasses('light')"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </li>
      <li
        v-else
        role="button"
        aria-label="darkmode"
        @click="$colorMode.preference = 'dark'"
      >
        <svg
          class="h-5 w-5 moon"
          :class="getClasses('dark')"
          fill="none"
          viewBox="0 0 25 25"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    btnLabel() {
      return this.$colorMode.preference === 'light' ? 'dark' : 'light'
    },
    isLightMode() {
      return this.$colorMode.preference !== 'light'
    },
  },
  methods: {
    changeMode() {
      this.$colorMode.preference =
        this.$colorMode.preference === 'light' ? 'dark' : 'light'
    },
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
