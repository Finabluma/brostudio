<template>
  <article :class="teaserClass">
    <NuxtLink :to="article.slug | articleUrl">
      <header>
        <div class="img">
          <div v-if="article.featuredImage" class="has-img">
            <img-item
              :src="article.featuredImage.asset._ref"
              :modifiers="{
                crop: article.featuredImage.crop,
                hotspot: article.featuredImage.hotspot,
                q: 80,
              }"
              fit="cover"
              sizes="xs:130px"
              height="130px"
            />
          </div>
          <div v-else class="has-not-img">
            <SVGMarieta />
          </div>
        </div>

        <div class="content">
          <h2 v-if="article.title">
            {{ article.title }}
          </h2>
          <article-date-and-author :article="article" />
        </div>
      </header>
      <!-- <p v-if="article.excerpt">{{ article.excerpt }}</p> -->
    </NuxtLink>
  </article>
</template>

<script>
import ArticleDateAndAuthor from '~/components/ArticleDateAndAuthor.vue'
import ImgItem from '~/components/ImgItem.vue'
import SVGMarieta from '~/components/SVGMarieta.vue'

export default {
  name: 'ArticlePreview',
  components: {
    SVGMarieta,
    ArticleDateAndAuthor,
    ImgItem,
  },
  props: {
    article: {
      type: Object,
      default: null,
    },
    layout: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      modifiers: {
        q: 80,
      },
    }
  },
  computed: {
    teaserClass() {
      return {
        latestarticles: this.layout === 'aside',
      }
    },
  },
}
</script>
<style lang="postcss" scoped>
article {
  @apply py-1
    sm:px-6
    sm:mb-2
    md:mb-1;

  & header {
    @apply flex
      justify-around
      items-center
      sm:justify-start
      sm:items-start
      md:items-center
      dark-hover:opacity-80
      transition-opacity;

    & .img {
      @apply w-20
        h-20
        overflow-hidden
        sm:mr-6
        md:mr-4
        lg:w-24
        lg:h-24
        lg:mr-3;

      & .has-img,
      & .has-not-img {
        @apply w-full
          h-full
          overflow-hidden
          flex
          justify-center
          p-1 border
        border-slate300
          rounded-full
        bg-slate100;
      }
      & .has-img {
        @apply dark:border-white/10
          dark:bg-slate800/60;

        & picture {
          @apply rounded-full overflow-hidden h-full;
        }
      }
      & .has-not-img {
        @apply bg-gray-600/20
        border-white
          border-[5px]
        dark:bg-slate500
          dark:border-slate800/80;
      }
    }

    & .content {
      @apply w-8/12
        sm:w-10/12
        md:w-[85%];

      & h2 {
        @apply font-hero
          font-light
          text-altheader
          leading-tight
          border-b
          border-black/20
          mb-1
          pb-1
          dark:border-white/40;
      }
    }
  }

  &.latestarticles {
    @apply px-4
    md:flex-row
    md:items-center
    md:justify-center
    md:mb-0
    md:py-2
    md:border
  md:border-slate400
    md:bg-white/50
    lg:justify-center
    dark:border-gray-700
    dark:md:bg-gray-800
    dark:md:bg-opacity-30;

    & .content {
      @apply md:mb-0
      md:pb-0
      md:w-2/3;

      & h2 {
        @apply md:mx-0
        md:text-2xl
        md:leading-tight
        md:pb-0.5
        md:border-opacity-70
        lg:text-3xl;
      }

      & ul {
        @apply mt-0
        md:mt-0.5;

        & li {
          @apply mr-0 w-auto

          md:mb-0;
        }
      }
    }
  }
}
</style>
