<template>
  <section v-if="pageSection.disabled !== true">
    <header>
      <h1 v-if="pageSection.heading">{{ pageSection.heading }}</h1>
      <span v-if="pageSection.subheading">{{ pageSection.subheading }}</span>
    </header>
    <div class="list-articles">
      <ArticlePreview
        v-for="article in articles"
        :key="article.slug"
        :article="article"
        layout="aside"
      />
    </div>
    <link-button path="/prensa" variant="secondary" size="small"
      >Más Articulos</link-button
    >
  </section>
</template>

<script>
import LinkButton from './LinkButton.vue'
import ArticlePreview from '~/components/ArticlePreview.vue'
export default {
  name: 'LatestArticles',
  components: {
    ArticlePreview,
    LinkButton,
  },
  props: {
    pageSection: {
      type: Object,
      default: null,
    },
  },
  computed: {
    articles() {
      const articles = this.$store.state.articles.articles
      const numberOfArticles = 2
      return articles.slice(0, numberOfArticles)
    },
  },
}
</script>

<style lang="postcss" scoped>
aside {
  & header {
    @apply py-3
    px-6
    mb-10
    flex
    flex-col
    justify-center
    items-center
    sm:px-2
    sm:w-11/12
    sm:mx-auto
    md:w-10/12;

    & h1 {
      @apply font-dejanire
      content-after
      text-restaurante
      font-light
      capitalize
      tracking-wide
      mb-2;

      &:after {
        @apply w-5
        mt-1
        mx-auto
        sm:w-10;
      }
    }

    & span {
      @apply font-hero
      font-light;
    }
  }

  & .list-articles {
    @apply mb-11
    px-1
    md:flex
    md:justify-center
    md:max-w-4xl
    md:mx-auto
    md:mb-14;

    & article {
      @apply md:mr-6
      md:w-6/12
      xl:mb-3;

      &:last-child {
        @apply md:mr-0;
      }
    }
  }
}
</style>
