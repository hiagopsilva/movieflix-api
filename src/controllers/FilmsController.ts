/* eslint-disable no-unused-vars */
import FilmsAPI from '@api/FilmsAPI'
import { Response } from 'express'

class FilmsController {
  index = async (_: any, response: Response) => {
    const dataFilms = await FilmsAPI.getFilms()

    return response.json(dataFilms)
  }
}

export default new FilmsController()
