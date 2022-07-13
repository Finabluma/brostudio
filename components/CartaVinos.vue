<template>
  <carta-accordion>
    <template slot="header">
      <h3>
        <slot></slot>
      </h3>
    </template>
    <template slot="body">
      <div v-if="vino">
        <div v-for="drink in vino" :key="drink.id" class="menu-item">
          <div class="nombre_precio">
            <span>{{ drink.vino }}</span>
            <span>{{ formatPrice(drink.precio) }} €</span>
          </div>
          <div class="do">
            <abbr title="Denominación de Origen">D.O.</abbr>{{ drink.do.do }}
          </div>
          <div class="variedad">
            <div v-for="variedad in drink.variedades" :key="variedad.id">
              {{ variedad.variedad }}
            </div>
          </div>
        </div>
      </div>
    </template>
  </carta-accordion>
</template>
<script>
import CartaAccordion from './CartaAccordion.vue'
export default {
  name: 'CartaVinos',
  components: { CartaAccordion },
  props: {
    vino: {
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
