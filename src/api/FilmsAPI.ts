/* eslint-disable no-unused-vars */
import { requestAPI } from '@services/index'

class FilmsAPI {
  static getFilms = async () => {
    const { data } = await requestAPI.get('/films')

    return data
  }
}

export default FilmsAPI
