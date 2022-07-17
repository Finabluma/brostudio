<template>
  <div id="contacta">
    <app-header />
    <main>
      <div class="contact_content">
        <div class="inner_content">
          <h2>Contacta</h2>
          <SanityContent :blocks="page.mainPageContent" />
        </div>
        <div class="mapa">
          <map-box-light />
        </div>
      </div>
      <app-aside layout="green" title="Contenido secundario Contacta">
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
import MapBoxLight from '~/components/MapBoxLight.vue'
import LatestArticlesSection from '~/components/LatestArticlesSection.vue'
import AppAside from '~/components/AppAside.vue'
import RichTextSection from '~/components/RichTextSection'
import dynamicHeadTags from '~/utils/dynamicHeadTags.js'

export default {
  name: 'PageContacta',
  components: {
    AppHeader,
    AppFooter,
    LatestArticlesSection,
    RichTextSection,
    AppAside,
    MapBoxLight,
  },
  head() {
    const generalData = {
      title: this.page ? this.page.title : 'Page Not Found',
    }
    const specificData = this.page ? this.page.pageMetaData : {}
    return {
      ...dynamicHeadTags(this, generalData, specificData),
      link: [
        {
          rel: 'stylesheet',
          href: 'https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css',
        },
      ],
    }
  },
  computed: {
    page() {
      const page = this.$store.state.pages.pages.filter((page) => {
        return page.slug === 'contacta'
      })
      return page[0] || null
    },
  },
}
</script>

<style lang="postcss">
#contacta {
  @apply relative
    z-30
    bg-gradient-to-b
  from-gray-200
  to-gray-300
  dark:from-gray-700
  dark:to-gray-800;
  & main {
    & .contact_content {
      @apply relative
      z-10
      pt-[10vh]
      mb-10
      sm:pt-[15vh]
      md:pt-[11vh]
      xl:pt-[11vh];

      & .mapa {
        @apply w-[95vw]
        h-[70vh]
        mx-auto
        shadow-md
        sm:w-[98vw]
        sm:h-[80vh]
        md:h-[70vh]
        md:w-[95vw]
        xl:w-[85vw]
        2xl:w-[70vw];
      }

      & .inner_content {
        @apply absolute
        z-10
        w-10/12
        flex
        flex-col
        left-4
        bottom-5
        p-3
        sm:left-6
        sm:bg-white/20
        sm:w-auto
        md:left-10
        md:bg-transparent
        xl:left-36
        xl:bottom-10
        2xl:w-9/12
        2xl:left-72;

        & h2 {
          @apply font-dejanire
          text-6xl
          text-slate800
          capitalize
          content-after
          mb-5
          xl:text-8xl;

          &:after {
            @apply bg-slate800;
          }
        }

        & div {
          @apply pl-2 xl:pl-3;
          & p {
            @apply font-hero font-light text-slate800 mb-0;
          }

          & a {
            @apply text-slate800;
          }
        }
      }
    }
  }
}
#contacta #map .mapboxgl-ctrl-bottom-left {
  display: none !important;
}
</style>
