<!-- eslint-disable no-unused-vars -->
<template>
  <div id="contacta">
    <app-header />
    <main>
      <div ref="hero" class="hero pan">
        <div ref="inner" class="inner-hero">
          <h2 ref="h2">Contacta</h2>
          <SanityContent ref="content" :blocks="page.mainPageContent" />
        </div>
      </div>
      <div ref="map" class="mapa pan">
        <map-box-light />
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
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
import MapBoxLight from '~/components/MapBoxLight.vue'
import LatestArticlesSection from '~/components/LatestArticlesSection.vue'
import AppAside from '~/components/AppAside.vue'
import RichTextSection from '~/components/RichTextSection'
import dynamicHeadTags from '~/utils/dynamicHeadTags.js'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'PageContacta',
  components: {
    RichTextSection,
    AppHeader,
    AppFooter,
    LatestArticlesSection,
    AppAside,
    MapBoxLight,
  },
  data() {
    return {
      heroMapTl: null,
    }
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
  beforeDestroy() {
    this.heroMapTl.pause(0).kill(true)
    ScrollTrigger.getById('stPanelsContacta').kill(true)
  },
  mounted() {
    const items = gsap.utils.toArray('.pan')
    const { hero, h2, content, inner } = this.$refs

    this.heroMapTl = gsap.timeline().to([h2, content], {
      autoAlpha: 0,
      y: '+=20',
      scrollTrigger: {
        id: 'hero',
        trigger: hero,
        start: 'top top',
        pin: inner,
        pinSpacing: false,
        scrub: 1,
      },
      onStart: () => {
        items.forEach((item, i) => {
          ScrollTrigger.create({
            id: 'stPanelsContacta',
            trigger: item,
            start: 'top top',
            pin: true,
            pinSpacing: false,
            snap: 1,
          })
        })
      },
    })
  },
}
</script>

<style lang="postcss">
#contacta {
  @apply relative
  z-30
  overflow-x-hidden
  bg-gradient-to-b
  from-gray-200
  to-gray-300
  dark:from-gray-700
  dark:to-gray-800;

  & main {
    & .hero {
      @apply w-screen
      h-[260px]
      flex
      justify-center
      items-center
      bg-gradient-to-b
      from-gray-200
      to-gray-300
      dark:from-gray-700
      dark:to-gray-600
      sm:h-[280px]
      md:h-[300px];

      & .inner-hero {
        @apply text-center
        pt-14
        w-10/12
        mx-auto
        sm:w-10/12
        sm:text-left
        lg:w-10/12
        xl:w-9/12;

        & h2 {
          @apply font-dejanire
          font-light
          text-4xl
          leading-none
          capitalize
          content-after
          mb-2
          sm:text-5xl;

          &:after {
            @apply block
            w-10
            h-0.5
            bg-current
            mt-1
            mx-auto
            sm:ml-0;
          }
        }

        & div {
          @apply sm:flex
          sm:items-center;

          & p {
            @apply font-hero
            font-light
            text-paragraph
            mb-0
            sm:flex
            sm:items-center
            sm:content-after;

            &::after {
              @apply block
              h-1
              w-1
              rounded-full
              bg-current
              mx-2;
            }

            &:last-child:after {
              @apply content-none;
            }
          }
        }
      }
    }

    & .mapa {
      @apply w-screen
      h-[80vh]
      mx-auto
      border-t-2
      border-gray-500/20
      dark:border-white/20;
    }
  }
}
#contacta #map .mapboxgl-ctrl-bottom-left {
  display: none !important;
}
</style>
