import type { Hono } from 'hono'

export const registerRoutes = (app: Hono) => {
  app.get('/', (c) => {
    return c.text('Hello Hono!')
  })
}
