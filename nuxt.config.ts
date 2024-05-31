import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  //...
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title:
        "PT Solusi Mitra Pertama - Perusahaan Outsourcing On Demand - Solusi Kebutuhan Personel Terbaik di Indonesia",
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/images/logo.png",
        },
      ],
    
    },
  

  },
  runtimeConfig: {
    public: {
      gtm: {
        id: 'G-X8BTRBB723',
        queryParams: {
          gtm_auth: 'AB7cDEf3GHIjkl-MnOP8qr',
          gtm_preview: 'env-4',
          gtm_cookies_win: 'x',
        },
        defer: false,
        compatibility: false,
        nonce: '2726c7f26c',
        enabled: true,
        debug: true,
        loadScript: true,
        enableRouterSync: true,
        ignoredViews: ['homepage'],
        trackOnNextTick: false,
        devtools: true,
      }
    }
  },
  plugins: [{ src: "~/plugins/animate.js", mode: "client" }],
  css: ['vuetify/lib/styles/main.sass', '@/assets/main.css'],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@zadigetvoltaire/nuxt-gtm',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
