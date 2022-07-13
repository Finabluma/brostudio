<template>
  <div ref="hero" class="hero-post">
    <div ref="inner" class="inner-hero">
      <div class="info-hero">
        <h1 ref="headline" itemprop="headline">{{ article.title }}</h1>
        <article-date-and-author :article="article" />
      </div>
    </div>
    <div v-if="article.featuredImage">
      <img-item
        :src="article.featuredImage.asset._ref"
        :alt="article.featuredImage.alternativeText"
        :modifiers="modifiers"
        fit="cover"
      />
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import ArticleDateAndAuthor from './ArticleDateAndAuthor.vue'
import ImgItem from '~/components/ImgItem.vue'

export default {
  name: 'ArticleDetailHeader',
  components: { ArticleDateAndAuthor, ImgItem },
  props: {
    article: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      heroScroll: gsap.timeline({ paused: true }),
      modifiers: {
        blur: 5,
      },
    }
  },
  mounted() {
    this.hero()
  },
  methods: {
    hero() {
      const { hero, inner, headline } = this.$refs

      const tl = this.heroScroll

      tl.to(headline, {
        y: '+=30',
        autoAlpha: 0,
      }).to(
        '.meta-info',
        {
          autoAlpha: 0,
          y: '+=60',
        },
        '-=0.5'
      )

      ScrollTrigger.create({
        trigger: hero,
        animation: tl,
        start: 'top-=2 top',
        pin: inner,
        pinSpacing: false,
        scrub: 1,
      })
    },
  },
}
</script>

<style lang="postcss">
.hero-post {
  @apply relative
  w-screen
  h-[32vh]
  content-before
  overflow-hidden
  sm:h-[45vh]
  md:h-[25vh]
  lg:h-[33vh]
  xl:h-[32vh];

  &:before {
    @apply absolute
    w-full
    h-full
    z-10
    top-0
    bg-gradient-to-b
  from-black/40
  to-gray-800/90
    md:backdrop-blur-[1px]
    dark:to-gray-800;
  }

  & picture {
    @apply absolute
      inset-0;
  }

  & .inner-hero {
    @apply absolute
    w-screen
    bottom-2
    left-0
    z-10
    flex
    justify-center
    items-center
    sm:py-2
    md:py-3
    lg:pb-4;

    & .info-hero {
      @apply w-11/12
      mx-auto
      flex
      flex-col
      items-start
      justify-center
      md:w-10/12
      lg:w-8/12
      xl:w-7/12
      2xl:w-6/12;

      & h1 {
        @apply font-hero
        font-light
        text-3xl
        text-white/90
        content-after
        sm:mb-1
        sm:text-4xl
        md:text-4xl
        xl:text-4xl
        dark:text-gray-300;

        &:after {
          @apply mt-1
          bg-white/90 dark:bg-gray-300;
        }
      }

      & .meta-info {
        @apply py-2
        sm:py-1
        lg:pt-1;

        & ul {
          @apply flex
          text-xs
          font-hero
          text-white/75;

          & li {
            @apply flex items-center;
          }

          & li:first-child {
            @apply content-after;

            &:after {
              @apply bg-white/75 dark:bg-gray-300;
            }
          }
        }
      }
    }
  }
}
</style>
