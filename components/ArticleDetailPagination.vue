<template>
  <section>
    <h1 class="sr-only">Articles navigaton</h1>
    <div class="previewlink">
      <NuxtLink
        v-if="article.previousArticleSlug"
        :to="article.previousArticleSlug | articleUrl"
      >
        <div class="content prev">
          <IconChevronLeft />
          <div class="preview">
            <div class="img">
              <div v-if="article.previousArticleImg" class="has-img">
                <img-item
                  :src="article.previousArticleImg.asset._ref"
                  fit="cover"
                  sizes="xs:100px"
                  height="100px"
                />
              </div>
              <div v-else class="has-not-img">
                <SVGMarieta />
              </div>
            </div>
            <div class="title">
              <h3>{{ article.previousArticleTitle }}</h3>
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
    <div class="previewlink">
      <NuxtLink
        v-if="article.nextArticleSlug"
        :to="article.nextArticleSlug | articleUrl"
      >
        <div class="content next">
          <div class="preview">
            <div class="img">
              <div v-if="article.nextArticleImg" class="has-img">
                <img-item
                  :src="article.nextArticleImg.asset._ref"
                  fit="cover"
                  sizes="xs:100px"
                  height="100px"
                />
              </div>
              <div v-else class="has-not-img">
                <SVGMarieta />
              </div>
            </div>
            <div class="title">
              <h3>{{ article.nextArticleTitle }}</h3>
            </div>
          </div>
          <IconChevronRight />
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script>
import ImgItem from '~/components/ImgItem.vue'
import SVGMarieta from '~/components/SVGMarieta.vue'
import IconChevronRight from '~/assets/icons/chevronright.svg?inline'
import IconChevronLeft from '~/assets/icons/chevronleft.svg?inline'
export default {
  name: 'ArticleDetailPagination',
  components: { ImgItem, SVGMarieta, IconChevronRight, IconChevronLeft },
  props: {
    article: {
      type: Object,
      default: null,
    },
  },
}
</script>
<style lang="postcss" scoped>
section {
  @apply w-11/12
    mx-auto
    mb-10
    border-t
    border-black/20
    dark:border-white/20
    pt-6
    md:mt-16
    md:flex
    md:justify-between
    md:w-10/12
    lg:w-9/12
    2xl:w-8/12;

  & .previewlink {
    @apply px-2
    w-full;

    & a {
      @apply md:flex
      md:mr-2;

      & .content {
        @apply flex-1
          flex
          items-center
          bg-white/50
          border
          border-slate400
          dark:border-gray-700
          dark:bg-gray-800
          dark:bg-opacity-30
          mb-3
          p-2;

        & .chevron {
          @apply hidden
            md:block
            md:opacity-70;
        }

        & .preview {
          @apply flex
            items-center
            w-full;

          & .img {
            @apply w-16
              h-16
              overflow-hidden
              mr-2
              sm:mr-3
              xl:mr-4
              xl:w-20
              xl:h-20;

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

          & .title {
            @apply text-xl
              font-hero
              font-light;
          }
        }

        &.next .preview {
          @apply md:mr-2;
        }

        &.prev .preview {
          @apply md:ml-2;
        }
      }
    }
  }
}
</style>
