/* eslint-disable no-unused-vars */
import FilmsAPI from '@api/FilmsAPI'
import { Response } from 'express'
import mongoose from 'mongoose'

const Films = mongoose.model('Films')

class FilmsController {
  get = async (_: any, response: Response) => {
    const dataFilms = await FilmsAPI.getFilms()

    const films = await Promise.all(dataFilms.map(async (item: any) => {
      return await Films.create({
        title: item.title,
        description: item.description,
        banner: item.banner,
        director: item.director,
        producer: item.producer
      })
    }))

    return response.json(films)
  }
}

export default new FilmsController()
