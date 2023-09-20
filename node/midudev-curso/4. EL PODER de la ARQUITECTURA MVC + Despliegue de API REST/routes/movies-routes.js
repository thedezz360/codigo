import { Router } from 'express'
import { MovieController } from '../controllers/movies-controllers.js'

export const moviesRouter = Router()

// Todos los recursos que sean MOVIES  se identifican con /movies
// recuperar todas las peliculas
moviesRouter.get('/', MovieController.getAll)

// obtener una movie mediante su id
moviesRouter.get('/:id', MovieController.getById)

// creamos una nueva movie
moviesRouter.post('/', MovieController.create)

// eliminar movie
moviesRouter.delete('/:id', MovieController.delete)

// actializamos una parte de la movie
moviesRouter.patch('/:id', MovieController.update)
