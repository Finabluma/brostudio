<template>
  <div>
    <time v-if="article.publishedAt" :datetime="article.publishedAt | htmlDate">
      {{ article.publishedAt | readableDate }}
    </time>
    <template v-if="article.categories">
      <span>/</span>
      <span>
        Categorías:
        <span
          v-for="(category, index) in article.categories"
          :key="category.slug"
        >
          <NuxtLink :to="category.slug | articleCategoryUrl">
            {{ category.title }}
          </NuxtLink>
          <span v-if="index !== article.categories.length - 1">,&nbsp;</span>
        </span>
      </span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ArticleDateAndCategories',
  props: {
    article: {
      type: Object,
      default: null,
    },
  },
}
</script>
