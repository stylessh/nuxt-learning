// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/color-mode", "@vueuse/motion/nuxt"],
  colorMode: {
    preference: "dark",
    fallback: "dark",
    classSuffix: "",
    componentName: "ColorScheme",
    storageKey: "nuxt-color-mode",
  },
  css: ["~/assets/main.css"],
  devtools: { enabled: true },
  typescript: {
    strict: true,
  },

  ssr: true,
  pages: true,

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
