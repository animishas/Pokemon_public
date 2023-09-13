// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  router: {
    extendRoutes(routes) {
      routes.push(
      {
        path: "/profile/:id",
        component: "component/profile.vue",
        name: "projects-id-details"
      });
    },
  },
  devtools: { enabled: true },
})

