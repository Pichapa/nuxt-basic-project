// https://nuxt.com/docs/api/configuration/nuxt-config
import {NuxtConfig} from "@nuxt/schema";

const config: NuxtConfig = {
  app: {
    head: {
      title:  "My Shop",
      script: []
    }
  },
  css: ['bootstrap/dist/css/bootstrap.css'],
  plugins: [
    {src: '~/plugins/bootstrap.js', mode: 'client'}
  ]
}

export default config;