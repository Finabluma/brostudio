<template>
  <div id="reservas">
    <app-header />
    <main>
      <div ref="hero" class="hero">
        <div class="content">
          <div class="content-inner">
            <h1>{{ page.title }}</h1>
            <SanityContent :blocks="page.mainPageContent" class="lead" />
          </div>
          <SVGCallNow />
        </div>
        <SVGUniverse />
      </div>
      <div class="is-divider top">
        <svg viewBox="0 0 1366 74.28" preserveAspectRatio="xMidYMin slice">
          <path d="M0 0v74.28h1366V0s-279.5 60-683 60S0 0 0 0Z" />
        </svg>
      </div>
      <conditions-reservas />
      <app-aside layout="green" title="Contenido secundario Reservas">
        <div
          v-for="(pageSection, index) in page.pageSectionsAside"
          :key="`${index}-${pageSection._type}`"
          :class="{ 'mt-10 sm:mt-8': index >= 1 }"
        >
          <rich-text-section
            v-if="pageSection._type === 'richTextAside'"
            :page-section="pageSection"
          />
          <latest-articles-section
            v-if="pageSection._type === 'latestArticlesSection'"
            :page-section="pageSection"
          />
        </div>
      </app-aside>
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
import SVGCallNow from '~/components/SVGCallNow.vue'
import AppAside from '~/components/AppAside.vue'
import dynamicHeadTags from '~/utils/dynamicHeadTags.js'
import SVGUniverse from '~/components/SVGUniverse.vue'
export default {
  name: 'PageReservas',
  components: {
    AppHeader,
    AppFooter,
    AppAside,
    SVGCallNow,
    SVGUniverse,
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
        return page.slug === 'reservas'
      })
      return page[0] || null
    },
  },
}
</script>

<style lang="postcss">
#reservas {
  @apply bg-gradient-to-b
  from-gray-200
  to-gray-300
  dark:from-gray-700
  dark:via-gray-800
  dark:to-gray-800;

  & main {
    & .hero {
      @apply relative
      w-screen
      overflow-x-hidden
      flex
      justify-center
      pb-10
      md:h-full
      lg:min-h-[80vh]
      xl:min-h-[70vh];

      & .content {
        @apply relative
        z-30
        w-10/12
        mt-16
        md:w-10/12
        md:mt-32
        lg:w-9/12
        lg:mt-32
        xl:w-8/12
        2xl:w-7/12;

        & .content-inner {
          @apply max-w-xs
          mb-5
          sm:mb-10
          lg:ml-0;

          & h1 {
            @apply font-dejanire
            text-5xl
            content-after
            mb-5
            lg:text-7xl
            lg:text-left;

            &:after {
              lg: ml-0;
            }
          }

          & .lead {
            @apply font-hero
            font-light
            text-paragraph;
          }
        }
      }
    }
    & .is-divider {
      @apply w-screen
      relative;

      & svg {
        @apply fill-gray-300
        dark:fill-gray-600;
      }
    }
  }
}
</style>
