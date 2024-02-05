// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  // modules: [
  //   '@ant-design-vue/nuxt'
  // ],
  modules: [
    '@ant-design-vue/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],

  // +  pinia: {
  //   +    autoImports: [
  //   +      'defineStore', // import { defineStore } from 'pinia'
  //   +    ],


  // 增加express中间件
  // serverMiddleware: [
  //   // API middleware
  //   // "~/server/index.js"
  //   { path: "/server-api", handler: "~/server-middleware/index.ts" },
  // ],
  css: [
    // SCSS file in the project
    "~/assets/main.scss", // you should add main.scss somewhere in your app
  ],
  imports:{
    dirs:[
      'composables/**'
    ]
  }
})
