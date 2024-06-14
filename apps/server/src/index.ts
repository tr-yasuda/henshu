import { registerRoutes } from '@/controller/routes'
import { Hono } from 'hono'
import { handle } from 'hono/aws-lambda'

const app = new Hono()

registerRoutes(app)

export const handler = handle(app)
