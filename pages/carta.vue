<template>
  <div class="pageCarta">
    <app-header />
    <main>
      <div ref="hero" class="hero">
        <div ref="title" class="title">
          <h1 class="sr-only">{{ page.title }}</h1>
          <SVGCarta />
        </div>
        <svg
          viewBox="0 0 1366 74.28"
          class="is-divider"
          preserveAspectRatio="xMidYMin slice"
        >
          <path d="M0 0v74.28h1366V0s-279.5 60-683 60S0 0 0 0Z" />
        </svg>
      </div>
      <!-- END HERO -->
      <div class="mainwrapper">
        <div v-if="page">
          <div class="carta">
            <div id="platos">
              <h2>Platos</h2>
              <SanityContent :blocks="page.mainPageContent" class="lead" />
              <div class="carta-items">
                <carta-platos :platos="platosMar">Del Mar</carta-platos>
                <carta-platos :platos="platosTierra">De la tierra</carta-platos>
                <carta-platos :platos="platosCarpaccios"
                  >Carpaccios</carta-platos
                >
                <carta-platos :platos="platosPostres">Postres</carta-platos>
              </div>
            </div>
            <div id="bebidas">
              <h2>Vinos & Cavas</h2>
              <div class="carta-items">
                <carta-vinos :vino="vinosTintos">Tintos</carta-vinos>
                <carta-vinos :vino="vinosBlancos">Blancos</carta-vinos>
                <carta-vinos :vino="vinosRosados">Rosados</carta-vinos>
                <carta-vinos :vino="vinosCava">Cavas</carta-vinos>
              </div>
            </div>
          </div>
        </div>
        <ErrorScreen v-else />
        <latest-articles-section />
      </div>
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppFooter from '~/components/AppFooter.vue'
import AppHeader from '~/components/AppHeader.vue'
import CartaPlatos from '~/components/CartaPlatos.vue'
import CartaVinos from '~/components/CartaVinos.vue'
import SVGCarta from '~/components/SVGCarta.vue'
import LatestArticlesSection from '~/components/LatestArticlesSection.vue'
import dynamicHeadTags from '~/utils/dynamicHeadTags.js'

export default {
  name: 'IndexPage',
  components: {
    AppHeader,
    AppFooter,
    CartaPlatos,
    CartaVinos,
    SVGCarta,
    LatestArticlesSection,
  },
  props: {
    mainPageContent: {
      type: Array,
      default: null,
    },
  },
  head() {
    const generalData = {
      title: this.page ? this.page.title : 'Page Not Found',
    }
    const specificData = this.page ? this.page.pageMetaData : {}
    return {
      ...dynamicHeadTags(this, generalData, specificData),
    }
  },
  computed: {
    page() {
      const page = this.$store.state.pages.pages.filter((page) => {
        return page.slug === 'carta'
      })
      return page[0] || null
    },
    platosMar() {
      const delMar = this.$store.state.platos.platos.filter((plato) => {
        return plato.tipoplato === 'mar'
      })
      return delMar
    },
    platosTierra() {
      const delaTierra = this.$store.state.platos.platos.filter((plato) => {
        return plato.tipoplato === 'tierra'
      })
      return delaTierra
    },
    platosCarpaccios() {
      const carpaccios = this.$store.state.platos.platos.filter((plato) => {
        return plato.tipoplato === 'carpaccio'
      })
      return carpaccios
    },
    platosPostres() {
      const postres = this.$store.state.platos.platos.filter((plato) => {
        return plato.tipoplato === 'postre'
      })
      return postres
    },
    vinosBlancos() {
      const blancos = this.$store.state.vinos.vino.filter((drink) => {
        return drink.tipovino === 'vinoblanco'
      })
      return blancos
    },
    vinosTintos() {
      const tintos = this.$store.state.vinos.vino.filter((drink) => {
        return drink.tipovino === 'vinotinto'
      })
      return tintos
    },
    vinosRosados() {
      const rosados = this.$store.state.vinos.vino.filter((drink) => {
        return drink.tipovino === 'vinorosado'
      })
      return rosados
    },
    vinosCava() {
      const cava = this.$store.state.vinos.vino.filter((drink) => {
        return drink.tipovino === 'cava'
      })
      return cava
    },
  },
}
</script>
<style lang="postcss">
.pageCarta {
  & .hero {
    @apply relative
    w-screen
    h-[25vh]
    bg-azulejos
    bg-cover
    content-after
    sm:h-[300px]
    md:h-[350px]
    lg:h-[380px]
    xl:h-[420px];

    &:after {
      @apply absolute
      z-auto
      h-full
      w-full
      backdrop-contrast-75
      bg-gradient-to-b
      from-black/40
      to-slate800
      dark:to-gray-800;
    }

    & .is-divider {
      @apply w-screen
      absolute
      z-20
      -bottom-1
      left-0
      fill-[#e5e7eb]
      dark:fill-[#374151];
    }

    & .title {
      @apply absolute
      z-20
      h-full
      w-full
      px-3
      flex
      items-center
      pt-5
      sm:px-10
      md:px-20
      md:pb-0
      lg:px-52
      xl:pb-5
      xl:px-60;
    }
  }

  & .mainwrapper {
    @apply relative
    z-30
    bg-gradient-to-b
  from-gray-200
  to-gray-300
  dark:from-gray-700
  dark:to-gray-800;
  }

  & .carta {
    @apply w-11/12
    mx-auto
    pt-6
    md:pb-8
    md:w-10/12
    lg:w-9/12
    xl:w-8/12;

    & h2,
    & h1 {
      @apply content-after
        capitalize
        leading-tight
        font-rooney
        text-6xl
        mb-8
        xl:text-8xl;

      &:after {
        lg: ml-0;
      }
    }

    & .lead {
      @apply mb-5
        font-hero
        font-light
        text-paragraph
        leading-7
        md:w-11/12
        lg:w-9/12
        2xl:w-6/12;
    }

    & .carta-items {
      @apply mb-10;
    }
  }
}
</style>
