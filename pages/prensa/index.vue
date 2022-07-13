<template>
  <div class="prensaPage">
    <app-header />
    <main>
      <section>
        <header>
          <h1>Prensa</h1>
          <span>Así vemos las cosas</span>
        </header>
        <div class="listArticles">
          <div v-if="articles.length > 0">
            <article-preview
              v-for="article in articles"
              :key="article.slug"
              :article="article"
            />
          </div>
          <p v-else>Todavía no hay articulos publicados.</p>
        </div>
      </section>
    </main>
    <app-footer />
  </div>
</template>
<script>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
import ArticlePreview from '~/components/ArticlePreview.vue'
import dynamicHeadTags from '~/utils/dynamicHeadTags.js'
export default {
  name: 'IndexPrensa',
  components: {
    ArticlePreview,
    AppHeader,
    AppFooter,
  },
  head() {
    const generalData = {
      title: 'Articles',
    }
    return {
      ...dynamicHeadTags(this, generalData),
    }
  },
  computed: {
    articles() {
      return this.$store.state.articles.articles
    },
  },
}
</script>
<style lang="postcss">
.prensaPage {
  @apply w-screen
  min-h-screen
  overflow-x-hidden
  flex
  flex-col
  justify-center
  bg-gradient-to-b
  from-gray-200
  to-gray-300
  dark:from-gray-700
  dark:via-gray-800
  dark:to-gray-800;

  & section {
    @apply w-full
    mx-auto
    mb-8
    pt-20
    sm:w-11/12
    md:pt-24
    lg:w-10/12
    xl:w-9/12
    xl:mb-12
    2xl:w-8/12;

    & > header {
      @apply mb-5 px-6
        sm:py-4
        md:py-8
        md:mb-0
        lg:py-10
        lg:mb-0;

      & h1 {
        @apply font-dejanire content-after
          text-5xl
          mb-0
          lg:text-7xl;
      }

      & span {
        @apply font-hero font-light;
      }
    }

    & .listArticles {
      @apply p-2
        mb-2
        lg:mb-16;
    }
  }

  & .footer {
    @apply mt-auto;
  }
}
</style>
