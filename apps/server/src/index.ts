import { Hono } from 'hono'
import { handle } from 'hono/aws-lambda'
import { registerRoutes } from './controller/routes'

const app = new Hono()

registerRoutes(app)

export const handler = handle(app)
