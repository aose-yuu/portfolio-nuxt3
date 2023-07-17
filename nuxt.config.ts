// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  devtools: { enabled: true },
  typescript: {
    strict: true,
    shim: false,
    typeCheck: true,
  },
  modules: ['@nuxtjs/tailwindcss'],
});
