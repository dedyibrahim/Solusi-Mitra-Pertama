// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

import colors from 'vuetify/util/colors'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
        themes: {
          light: {
            dark: false,
            colors: {
              primary: colors.orange.darken2, // #E53935
              secondary: '#FFEE58', // #FFCDD2
              ungu: '#7C4DFF', // #FFCDD2
              kuning: '#FDD835'
            }
          },
        },
      },
  })
  app.vueApp.use(vuetify)
})
