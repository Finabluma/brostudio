<template>
  <div id="error">
    <main>
      <div class="content">
        <div v-if="error.statusCode === 404">
          <h1>
            {{ error.statusCode }}
          </h1>
          <span># página no encontrada #</span>
        </div>
        <div v-else>
          <h1 class="text-8xl">
            {{ error.statusCode }}
          </h1>
          <span># hay algo que no fue bien #</span>
        </div>
      </div>
      <aside>
        <p>
          <LinkButton type="internal" variant="tertiary" path="/"
            >Vuelve al inicio</LinkButton
          >
        </p>
      </aside>
    </main>
    <app-footer />
  </div>
</template>

<script>
import LinkButton from '~/components/LinkButton.vue'
import AppFooter from '~/components/AppFooter.vue'
import dynamicHeadTags from '~/utils/dynamicHeadTags.js'
export default {
  name: 'PageError',
  components: {
    LinkButton,
    AppFooter,
  },
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head() {
    return {
      ...dynamicHeadTags(this, 'Page Not Found'),
    }
  },
}
</script>
<style lang="postcss">
#error {
  @apply w-screen
  min-h-screen
  flex
  flex-col
  justify-center
  bg-gradient-to-b
  from-gray-300
  via-gray-200
  to-gray-200
  dark:from-gray-700
  dark:via-gray-800
  dark:to-gray-800;

  & main {
    @apply w-11/12
    mx-auto
    pt-12
    pb-20
    flex
    items-center
    flex-col
    md:w-10/12
    md:pt-10
    lg:w-8/12
    xl:w-7/12
    xl:pt-20;

    & div {
      @apply mb-10 text-center;
      & h1 {
        @apply text-[10rem]
        font-dejanire
        mb-0;
      }

      & span {
        @apply text-base;
      }
    }

    & aside {
      & p {
        @apply flex;

        & a {
          @apply ml-1
          block
          content-after;

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

  & footer {
    @apply mt-auto;
  }
}
</style>
