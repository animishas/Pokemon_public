// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  router: {
    extendRoutes(routes) {
      routes.push(
      {
        path: "/profile/:id",
        component: "profile.vue",
        name: "profile"
      });
    },
  },
  devtools: { enabled: true },
})

