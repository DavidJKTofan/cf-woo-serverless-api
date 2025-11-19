import { Router } from 'itty-router'

import Homepage from './handlers/homepage'
import Resources from './handlers/resources'
import Resource from './handlers/resource'
import Main_Cat1 from './handlers/main_cat1'

const router = Router()

router
  .get('/', Homepage)
  .get('/api/resources', Resources)
  .get('/api/resources/:id', Resource)
  .get('/api/resources/category/:main_cat1', Main_Cat1)
  .get('*', () => new Response("Not found", { status: 404 }))

export const handleRequest = request => router.handle(request)
