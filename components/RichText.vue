<template>
  <div class="rich-text">
    <SanityContent :blocks="content" :serializers="serializers" />
  </div>
</template>

<script>
import ImageBlock from '~/components/RichText/ImageBlock'
import LinkInternal from '~/components/RichText/LinkInternal'
import LinkExternal from '~/components/RichText/LinkExternal'
import YouTubeBlock from '~/components/RichText/YouTubeBlock'
import VimeoBlock from '~/components/RichText/VimeoBlock'

export default {
  name: 'RichText',
  props: {
    content: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      serializers: {
        types: {
          imageBlock: ImageBlock,
          youtubeBlock: YouTubeBlock,
          vimeoBlock: VimeoBlock,
        },
        marks: {
          internalLink: LinkInternal,
          link: LinkExternal,
        },
      },
    }
  },
}
</script>
<style lang="postcss" scoped>
.rich-text {
  @apply font-dejanire font-light
    text-[21px]
    leading-relaxed
    break-words
    lg:text-[24px];

  & p,
  & ul,
  & ol,
  & blockquote,
  & figure {
    @apply mb-6;
  }

  & h2 {
    @apply text-5xl
    mb-8;
  }

  & h3 {
    @apply text-4xl
    mb-8;
  }

  & h4 {
    @apply text-3xl
    mb-8;
  }

  & blockquote p,
  & blockquote cite {
    @apply text-restaurante
      leading-tight;
  }

  & figure {
    @apply w-11/12
    px-5
    mx-auto;
    & picture img {
      @apply drop-shadow
      border
      border-white/75
      dark:border-slate800/50;
    }

    & figcaption {
      @apply px-2
      mt-2
      text-base;
    }
  }

  & .video {
    @apply w-11/12
    mx-auto
    my-8;

    & .v-player {
      @apply px-5;
    }
  }
}

aside .rich-text p {
  @apply text-center font-hero text-paragraph;
}
</style>
