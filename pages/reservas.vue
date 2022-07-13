<template>
  <div id="reservas">
    <app-header />
    <main>
      <div ref="hero" class="hero">
        <div class="content">
          <h1 class="sr-only">{{ page.title }}</h1>
          <div
            v-for="(pageSection, index) in page.pageSections"
            :key="`${index}-${pageSection._type}`"
            class="content-inner"
          >
            <RichTextSection
              v-if="pageSection._type === 'richTextSection'"
              :page-section="pageSection"
            />
          </div>
          <SVGCallNow />
        </div>
        <SVGUniverse />
      </div>
      <app-aside layout="green">
        <h2 class="sr-only">Reservas sujetas a condiciones</h2>
        <!-- <reservas-condiciones :condicionReserva="condicionReserva" /> -->
        <section>
          <h2>¿Qué comer?</h2>
          <p>
            Abre el apetito echando un vistazo a lo que podemos ofrecer. En
            nuestra cocina encontrarás una gran variedad de productos que
            esperamos sean de tu agrado. Bienvenid@ a nuestro hogar ;)
          </p>
          <app-button to="carta" title="La Carta" variant="primary" size="small"
            >la carta</app-button
          >
        </section>
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
import RichTextSection from '~/components/RichTextSection.vue'
import SVGUniverse from '~/components/SVGUniverse.vue'
export default {
  name: 'PageReservas',
  components: {
    AppHeader,
    AppFooter,
    AppAside,
    SVGCallNow,
    RichTextSection,
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
      h-auto
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

          & h2 {
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
        }
      }
    }

    & section:last-of-type {
      @apply pt-5
      w-11/12
      mx-auto
      flex
      flex-col
      justify-center
      items-center
      sm:w-9/12
      lg:w-8/12
      xl:w-7/12
      2xl:px-10;

      & h2,
      & p {
        @apply px-2;
      }
      & h2 {
        @apply text-altheader font-dejanire content-after mb-5;

        &:after {
          @apply mx-auto;
        }
      }

      & p {
        @apply font-hero font-light text-lg mb-5 text-center;
      }
    }
  }
}
</style>
