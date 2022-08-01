import { Router } from 'express'

import FilmsController from '@controllers/FilmsController'

const routes = Router()

routes.get('/', FilmsController.get)
routes.get('/list', FilmsController.list)

export default routes
