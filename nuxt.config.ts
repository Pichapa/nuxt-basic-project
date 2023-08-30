// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      // title: "MyShop",
      // script: [{ src: "/bootstrap.bundle.min.js" }],
    },
  },
  devtools: { enabled: true },

  css: ["~/node_modules/bootstrap/dist/css/bootstrap.css"],
  // plugins: [
  //   {
  //     src: "~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
  //     mode: "client",
  //   },
  // ],
  script: [
    {
      src: '~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
    }
    ]
});
