import { Router } from 'express'
import characterController from './controller/characterController'
import comicController from './controller/comicController'
import creatorController from './controller/creatorController'
import eventController from './controller/eventController'

const routes = Router()

routes.get('/character', characterController.getAllCharacters)
routes.get('/character/:id', characterController.getCharacterById)
routes.post('character', characterController.addCharacter)
routes.put('/character/:id', characterController.updateCharacter)
routes.delete('/character/:id', characterController.deleteCharacter)

routes.get('/comic:/id', comicController.getComicById)
routes.get('/comic', comicController.getAllComic)
routes.post('/comic', comicController.addComic)
routes.put('/comic/:id', comicController.updateComic)
routes.delete('comic/:id', comicController.deleteComic)

routes.get('/creator', creatorController.getAllCreators)
routes.get('/creator/:id', creatorController.getCreatorById)
routes.post('creator', creatorController.addCreator)
routes.put('creator/:id', creatorController.updateCreator)
routes.delete('creator/:id', creatorController.deleteCreator)

routes.get('/event', eventController.getAllEvents)
routes.get('/event/:id', eventController.getEventById)
routes.post('/event', eventController.addEvent)
routes.put('event/:id', eventController.updateEvent)
routes.delete('event/:id', eventController.deleteEvent)

export{ routes }