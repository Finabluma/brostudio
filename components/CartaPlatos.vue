<template>
  <carta-accordion>
    <template slot="header">
      <h3>
        <slot></slot>
      </h3>
    </template>
    <template slot="body">
      <div v-if="platos">
        <div v-for="plato in platos" :key="plato.id" class="menu-item">
          <div class="nombre_precio">
            <span>{{ plato.plato }}</span>
            <span v-if="plato.precio"> {{ formatPrice(plato.precio) }} € </span>
            <div v-else><i>s/peso</i></div>
          </div>
        </div>
      </div>
    </template>
  </carta-accordion>
</template>
<script>
import CartaAccordion from './CartaAccordion.vue'
export default {
  name: 'CartaPlatos',
  components: { CartaAccordion },
  props: {
    platos: {
      type: Array,
      default: null,
    },
  },
  methods: {
    formatPrice(num) {
      return parseFloat(num).toFixed(2)
    },
  },
}
</script>
