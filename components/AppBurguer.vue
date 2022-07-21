<template>
  <div id="menu__navigation" v-on="$listeners">
    <IconMenu />
  </div>
</template>

<script>
import IconMenu from '~/assets/icons/menu.svg?inline'
export default {
  components: {
    IconMenu,
  },
}
</script>
