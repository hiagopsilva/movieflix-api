/* eslint-disable no-unused-vars */
import FilmsAPI from '@api/FilmsAPI'
import { Request, Response } from 'express'
import mongoose from 'mongoose'

const Films = mongoose.model('Films')

class FilmsController {
  get = async (_: any, response: Response) => {
    const dataFilms = await FilmsAPI.getFilms()

    const films = await Promise.all(dataFilms.map(async (item: any) => {
      return await Films.create({
        title: item.title,
        description: item.description,
        banner: item.movie_banner,
        director: item.director,
        producer: item.producer
      })
    }))

    return response.json(films)
  }

  list = async (request: Request, response: Response) => {
    const { page = 1 } = request.query

    const dataFilms = await Films.paginate({}, { page: page as number, limit: 10 })

    return response.json(dataFilms)
  }
}

export default new FilmsController()
