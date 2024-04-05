export default defineNuxtConfig({
  ssr: false,
  target: 'static',
  app: {
    head: {
      title: 'Robert Laitila - Fullstack Web Developer',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Robert Laitila portfolio',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Titillium+Web:wght@300&display=swap',
          defer: true,
          async: true,
          preconnect: true,
        },
      ],
    },
  },
  css: ['@/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/scss/mixins/_color-theme.scss" as *;
          `,
        },
      },
    },
  },
  components: true,
  modules: ['nuxt-svgo', '@nuxtjs/color-mode'],
  generate: {
    fallback: true,
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '--theme',
    storageKey: 'theme-mode',
  },
});
