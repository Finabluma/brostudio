<template>
  <div id="condiciones">
    <div class="inner-condiciones">
      <div ref="panel" class="panel">
        <header>
          <hgroup>
            <h1>Condiciones</h1>
            <h2>La letra pequeña</h2>
          </hgroup>
        </header>
      </div>
      <div
        v-for="reservas in condicion"
        :key="reservas._key"
        ref="panel"
        class="panel"
      >
        <div class="conditions-item">
          <div class="content">
            <h3 v-if="reservas.heading">
              {{ reservas.heading }}
            </h3>
            <RichText :content="reservas.condition" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import RichText from '~/components/RichText.vue'
gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'ConditionsReservas',
  components: {
    RichText,
  },
  data() {
    return {
      conditionsReservasTl: gsap.timeline({
        paused: true,
      }),
    }
  },
  computed: {
    page() {
      const page = this.$store.state.pages.pages.filter((page) => {
        return page.slug === 'reservas'
      })
      return page[0] || null
    },
    condicion() {
      return this.page.conditionSections.filter((el) => {
        return el.disabled !== true
      })
    },
  },
  mounted() {
    const timeline = this.conditionsReservasTl
    timeline.from('.panel', { delay: 0.25 }).call(() => {
      const panels = gsap.utils.toArray('.panel')
      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: 'top top',
          pin: true,
          pinSpacing: false,
          snap: 1 / (i - 4),
        })
      })
    })
    timeline.play()
  },
}
</script>

<style lang="postcss" scoped>
#condiciones {
  @apply relative
  w-screen
  border-gray-300
  bg-gradient-to-b
  from-gray-300
  via-gray-300
  to-gray-300/30
  dark:from-gray-600
  dark:to-gray-600/20;

  & .inner-condiciones {
    & .panel {
      @apply w-full
      h-[85vh]
      flex
      justify-center
      items-center
      box-border
      py-20
      bg-gradient-to-b
      from-gray-300
      to-gray-200
      dark:from-gray-600
      dark:to-gray-700;

      & header {
        @apply w-screen
        flex
        justify-center
        items-center;

        & hgroup {
          @apply w-11/12
          md:w-8/12
          mx-auto
          mb-5
          px-2
          text-center
          text-gray-700
          dark:text-white/80;

          & h1 {
            @apply text-altheader
            font-dejanire
            font-light
            tracking-wide
            mb-5;
          }

          & h2 {
            @apply font-hero content-after content-before;
            &:after,
            &:before {
              @apply block
              w-1/6
              h-0.5
              bg-current
              mx-auto;
            }
            &:after {
              @apply mt-5;
            }

            &:before {
              @apply mb-5;
            }
          }
        }
      }

      & .conditions-item {
        @apply w-screen
        flex
        justify-center
        items-center
        pb-10;

        & .content {
          @apply w-11/12
          mx-auto
          flex
          flex-col
          bg-gray-400
          dark:bg-gray-500
          dark:text-gray-200
          p-8
          sm:w-9/12
          md:w-[450px]
          md:h-[450px];

          & h3 {
            @apply text-altheader
            font-hero
            font-light
            leading-tight
            mb-3
            content-after
            md:pr-2;

            &:after {
              @apply block
              my-2
              w-1/12
              h-0.5
              bg-gray-600
              dark:bg-gray-200;
            }
          }
        }
      }
    }
  }
}
</style>
