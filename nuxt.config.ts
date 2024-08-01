// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  devServer: { host: "0.0.0.0" },
  compatibilityDate: "2024-07-31",
});
