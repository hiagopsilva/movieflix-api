import { Router } from 'express'

import FilmsController from '@controllers/FilmsController'

const routes = Router()

routes.get('/', FilmsController.index)

export default routes
