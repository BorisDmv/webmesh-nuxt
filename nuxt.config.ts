// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Webmesh',
      meta: [
        { name: 'description', content: 'Webmesh is a company that provides web development services. We are a team of developers who are passionate about creating web applications and websites.' },
  ],
}
  },
  alias: { '~/': resolve(__dirname, './') },
  devtools: { enabled: true }
})
