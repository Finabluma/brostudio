<template>
  <app-aside layout="green">
    <template slot="header">
      <header>
        <h1>Prensa</h1>
        <span>Así vemos las cosas</span>
      </header>
    </template>
    <div class="list-articles">
      <ArticlePreview
        v-for="article in articles"
        :key="article.slug"
        :article="article"
        layout="aside"
      />
    </div>
    <template slot="footer">
      <app-button
        to="prensa"
        title="Articulos de Prensa"
        variant="primary"
        size="small"
        >Más artículos</app-button
      >
    </template>
  </app-aside>
</template>

<script>
import AppAside from '~/components/AppAside.vue'
import AppButton from '~/components/AppButton.vue'
import ArticlePreview from '~/components/ArticlePreview.vue'
export default {
  name: 'LatestArticles',
  components: {
    AppAside,
    AppButton,
    ArticlePreview,
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
    mb-3
    flex
    flex-col
    justify-center
    sm:px-2
    sm:w-11/12
    sm:mx-auto
    md:w-full;

    & h1 {
      @apply font-hero
      content-after
      text-4xl
      mb-2
      sm:text-[38px];

      &:after {
        @apply w-5
        mt-1
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
    md:mx-auto;

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
