import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({

  css: [],
  components: [
    "~/components",
    "~/components/ui",
    "~/components/hero",
    "~/components/cardlayout",
    "~/components/article",

    "~/pages",
  ],
  buildModules: ['@nuxtjs/tailwindcss']
})
