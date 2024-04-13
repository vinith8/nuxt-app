// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Test Appllication", 
      meta: [
        { name: 'description', content: "Everything about Nuxt framework"}
      ],
      link: [
        {
          rel: 'stylesheet', href:"https://fonts.googleapis.com/icon?family=Material+Icons" 
        }
      ]
    }
  }
})
