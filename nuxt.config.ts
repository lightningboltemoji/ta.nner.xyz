// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/fonts"],
  devServer: { host: "0.0.0.0" },
  compatibilityDate: "2024-07-31",
  app: {
    head: {
      title: "Tanner Cecchetti (ta.nner.xyz)",
    },
  },
});
