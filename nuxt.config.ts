// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      beerApiSearchUrl:
        process.env.SEARCH_URL || "http://localhost:3001/beers/search",
      beerUrl: process.env.BEER_URL || "http://localhost:3001/beers/beer",
    },
  },
});
