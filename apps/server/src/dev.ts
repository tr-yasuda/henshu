import { Hono } from 'hono'
import { registerRoutes } from './controller/routes'

const app = new Hono()

registerRoutes(app)

export default app
