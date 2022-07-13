// import config from '../nuxt.config.js'
import { seoQuery } from './seo'
import { faviconsQuery } from './favicons.js'
import { socialQuery } from './social.js'
import { headerMenuQuery } from './header'
import { pagesQuery } from './pages.js'
import { articlesQuery, articleCategoriesQuery } from './articles'
import { platosQuery } from './platos'
import { vinosQuery } from './vinos'

export const actions = {
  async nuxtServerInit({ commit }, { req, $sanity }) {
    // Set seo data
    const seoData = await $sanity
      .fetch(seoQuery)
      .catch((err) => console.error(err)) // eslint-disable-line no-console
    commit('seo/setData', seoData)

    // Set favicons data
    const faviconsData = await $sanity
      .fetch(faviconsQuery)
      .catch((err) => console.error(err)) // eslint-disable-line no-console
    commit('favicons/setData', faviconsData)

    // Set social data
    const socialData = await $sanity
      .fetch(socialQuery)
      .catch((err) => console.error(err)) // eslint-disable-line no-console
    commit('social/setData', socialData)

    // Set header data
    const headerData = await $sanity
      .fetch(headerMenuQuery)
      .catch((err) => console.error(err)) // eslint-disable-line no-console
    commit('header/setData', headerData)

    // Set pages data
    const pagesData = await $sanity
      .fetch(pagesQuery)
      .catch((err) => console.error(err)) // eslint-disable-line no-console
    commit('pages/setData', pagesData)

    // Set vinos data
    const vinosData = await $sanity
      .fetch(vinosQuery)
      .catch((err) => console.log(err)) // eslint-disable-line no-console
    commit('vinos/setVinos', vinosData)

    // Set platos data
    const platosData = await $sanity
      .fetch(platosQuery)
      .catch((err) => console.log(err)) // eslint-disable-line no-console
    commit('platos/setPlatos', platosData)

    // Set articles data
    const articlesData = await $sanity
      .fetch(articlesQuery)
      .catch((err) => console.error(err)) // eslint-disable-line no-console

    // Include previous and next article objects for pagination
    for (let i = 0; i < articlesData.length; i++) {
      const previousArticle = articlesData[i - 1]
      const nextArticle = articlesData[i + 1]

      articlesData[i].previousArticleSlug = previousArticle
        ? previousArticle.slug
        : null
      articlesData[i].nextArticleSlug = nextArticle ? nextArticle.slug : null

      articlesData[i].previousArticleTitle = previousArticle
        ? previousArticle.title
        : null
      articlesData[i].nextArticleTitle = nextArticle ? nextArticle.title : null

      articlesData[i].previousArticleImg = previousArticle
        ? previousArticle.featuredImage
        : null
      articlesData[i].nextArticleImg = nextArticle
        ? nextArticle.featuredImage
        : null
    }
    commit('articles/setArticles', articlesData)

    // Set article categories data
    const articleCategoriesData = await $sanity
      .fetch(articleCategoriesQuery)
      .catch((err) => console.error(err)) // eslint-disable-line no-console
    commit('articles/setCategories', articleCategoriesData)
  },
}
