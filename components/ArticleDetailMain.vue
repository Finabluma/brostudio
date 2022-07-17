<template>
  <div class="main">
    <div class="articledetailmain">
      <div class="enlaces">
        <nav id="breadcrumb" aria-label="Breadcrumb">
          <h2 class="sr-only">Breadcrumbs</h2>
          <div>
            <ol class="breadcrumbs" role="list">
              <li><NuxtLink to="/">Inicio</NuxtLink></li>
              <li><NuxtLink to="/prensa">Prensa</NuxtLink></li>
              <li>
                <i>{{ article.title }}</i>
              </li>
            </ol>
          </div>
        </nav>
      </div>
      <p v-if="article.excerpt" class="excerpt">{{ article.excerpt }}</p>
      <div v-if="article.categories">
        <article-categories :article="article" />
      </div>
      <rich-text
        v-if="article.mainContent.length"
        :content="article.mainContent"
      />
      <div v-if="article.categories">
        <article-categories :article="article" class="my-10" />
      </div>
    </div>
    <article-detail-pagination
      v-if="article.previousArticleSlug || article.nextArticleSlug"
      :article="article"
    />
  </div>
</template>

<script>
import RichText from '~/components/RichText.vue'
import ArticleCategories from '~/components/ArticleCategories.vue'

export default {
  name: 'ArticleDetailMain',
  components: { RichText, ArticleCategories },
  props: {
    article: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="postcss" scoped>
.main {
  @apply relative
  z-30
  bg-gradient-to-b
  from-gray-200
  dark:from-gray-700
  dark:via-gray-800;
}
.articledetailmain {
  @apply w-11/12
    mx-auto
    md:w-10/12
    lg:w-8/12
    xl:w-7/12
    2xl:w-6/12;
}
.enlaces {
  @apply px-0.5 pt-3
    md:pt-1
    md:pb-2;
  & nav {
    @apply py-3 lg:py-6;

    & ol {
      @apply flex flex-wrap;

      & li {
        @apply font-hero
          lowercase
          leading-7
          text-[14px]
          flex
          items-center
          content-after;

        &:last-child::after {
          @apply content-none;
        }

        & a {
          @apply content-after;

          &:after {
            @apply block w-full h-0.5 bg-slate800 dark:bg-gray-500;
          }

          &:hover {
            @apply text-opacity-60;

            &:after {
              @apply bg-opacity-60;
            }
          }
        }
      }
    }
  }
}
.excerpt {
  @apply mb-6
  font-dejanire
  font-light
  leading-normal
  content-after
  text-[21px]
  lg:text-[24px];

  &:before,
  &:after {
    @apply block
    h-0.5
    w-1/6
    bg-current
    opacity-30;
  }

  &:before {
    @apply mb-3;
  }

  &:after {
    @apply mt-6;
  }
}
</style>
