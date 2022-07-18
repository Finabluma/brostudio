<template>
  <div id="map" class="basemap"></div>
</template>

<script>
import mapboxgl from 'mapbox-gl'

export default {
  name: 'BasedMap',
  data() {
    return {
      map: null,
    }
  },
  mounted() {
    this.map = new mapboxgl.Map({
      accessToken: process.env.MAPBOX_ACCESS_TOKEN,
      container: 'map',
      style: process.env.MAPBOX_STYLE,
      center: [1.37652, 41.139],
      zoom: 13,
      maxZoom: 18,
      minZoom: 13,
      attributionControl: false,
    }).addControl(new mapboxgl.NavigationControl(), 'bottom-right')
    this.map.scrollZoom.disable()
    this.map.dragPan.enable({
      linearity: 0.3,
      maxSpeed: 1400,
      deceleration: 2500,
    })
  },
  methods: {},
}
</script>

<style lang="postcss" scoped>
#map {
  @apply relative
  w-full
  h-full;
}
</style>
