<template>
  <div v-if="category" class="prensaPage cat">
    <app-header />
    <main>
      <section>
        <header>
          <h1>Artículos '{{ category.title }}'</h1>
        </header>
        <div class="listArticles">
          <div v-if="category.articles.length">
            <article-preview
              v-for="article in category.articles"
              :key="article.slug"
              :article="article"
            />
          </div>
        </div>
      </section>
    </main>
    <app-footer />
  </div>
  <ErrorScreen v-else />
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
import ArticlePreview from '~/components/ArticlePreview.vue'
import dynamicHeadTags from '~/utils/dynamicHeadTags.js'
export default {
  name: 'SlugCategory',
  components: {
    AppHeader,
    ArticlePreview,
    AppFooter,
  },
  head() {
    const generalData = {
      title: this.category
        ? `'${this.category.title}' Articles`
        : 'Page Not Found',
      description: this.category ? this.category.description : '',
    }
    return {
      ...dynamicHeadTags(this, generalData),
    }
  },
  computed: {
    category() {
      const category = this.$store.state.articles.categories.filter(
        (category) => {
          return category.slug === this.$route.params.slug
        }
      )
      return category[0] || null
    },
  },
}
</script>

<style lang="postcss">
.prensaPage.cat main section header h1 {
  @apply text-4xl;
}
</style>
