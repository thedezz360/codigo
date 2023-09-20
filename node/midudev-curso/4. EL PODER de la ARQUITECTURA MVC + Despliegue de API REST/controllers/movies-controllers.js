/* eslint-disable space-before-function-paren */
import { MovieModel } from '../models/movie-model.js'
import { validateMovie, validatePartialMovie } from '../schemas/movies.js'

export class MovieController {
  static async getAll(req, res) {
    // intentamos recuperar el parametro genre
    const { genre } = req.query
    const movies = await MovieModel.getAll({ genre })
    // que es lo que renderiza
    res.json(movies)
  }

  static async getById(req, res) {
    const { id } = req.params

    const movie = await MovieModel.getById({ id })

    // si encontramos la movie la devolvemos
    if (movie) return res.json(movie)
    // movie no encontrada
    res.status(404).json({ message: 'Movie not found' })
  }

  static async create(req, res) {
    // validamos el body
    const result = validateMovie(req.body)

    // comprobamos si tenemos algun error
    if (result.error) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const newMovie = await MovieModel.create({ input: result.data })

    // respondemos
    res.status(201).json(newMovie)
  }

  static async delete(req, res) {
    const { id } = req.params
    const result = await MovieModel.delete({ id })

    if (result === false) {
      return res.status(404).json({ message: 'Movie not found' })
    }

    return res.json({ message: 'Movie deleted' })
  }

  static async update(req, res) {
    // validamos el body
    const result = validatePartialMovie(req.body)

    // comprobamos la validacion
    if (result.error) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const { id } = req.params

    const updatedMovie = await MovieModel.update({ id, input: result.data })

    // respondemos
    return res.json(updatedMovie)
  }
}
