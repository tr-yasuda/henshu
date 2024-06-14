import { registerRoutes } from '@/controller/routes'
import { Hono } from 'hono'

const app = new Hono()

registerRoutes(app)

export default app
