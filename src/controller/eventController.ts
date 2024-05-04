import { Request, Response } from 'express';
import EventModel from '../model/eventModel';

class EventController {

  getAllEvents(req: Request, res: Response) {
    const events: EventModel[] = [
      {
        id: 1,
        title: 'Civil War',
        description: 'The war that split the Marvel Universe in two.',
        resourceURI: 'http://example.com/events/1',
        urls: [{ type: 'detail', url: 'http://example.com/events/1' }],
        modified: new Date(),
        start: new Date(),
        end: new Date(),
        thumbnail: { path: 'http://example.com/thumbnail/1', extension: 'jpg' },
        comics: { available: 100, collectionURI: 'http://example.com/events/1/comics', returned: 0, items: [] },
        stories: { available: 200, collectionURI: 'http://example.com/events/1/stories', returned: 0, items: [] },
        series: { available: 30, collectionURI: 'http://example.com/events/1/series', returned: 0, items: [] },
        characters: { available: 50, collectionURI: 'http://example.com/events/1/characters', returned: 0, items: [] },
        creators: { available: 10, collectionURI: 'http://example.com/events/1/creators', returned: 0, items: [] },
        next: { resourceURI: 'http://example.com/events/2', name: 'Secret Invasion' },
        previous: { resourceURI: 'http://example.com/events/0', name: 'Avengers Disassembled' }
      },
    ];

    res.json(events);
  }

  getEventById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const event: EventModel = {
      id: 1,
      title: 'Civil War',
      description: 'The war that split the Marvel Universe in two.',
      resourceURI: 'http://example.com/events/1',
      urls: [{ type: 'detail', url: 'http://example.com/events/1' }],
      modified: new Date(),
      start: new Date(),
      end: new Date(),
      thumbnail: { path: 'http://example.com/thumbnail/1', extension: 'jpg' },
      comics: { available: 100, collectionURI: 'http://example.com/events/1/comics', returned: 0, items: [] },
      stories: { available: 200, collectionURI: 'http://example.com/events/1/stories', returned: 0, items: [] },
      series: { available: 30, collectionURI: 'http://example.com/events/1/series', returned: 0, items: [] },
      characters: { available: 50, collectionURI: 'http://example.com/events/1/characters', returned: 0, items: [] },
      creators: { available: 10, collectionURI: 'http://example.com/events/1/creators', returned: 0, items: [] },
      next: { resourceURI: 'http://example.com/events/2', name: 'Secret Invasion' },
      previous: { resourceURI: 'http://example.com/events/0', name: 'Avengers Disassembled' }
    };

    res.json(event);
  }

  addEvent(req: Request, res: Response) {
    const newEvent: EventModel = req.body;

    try {
      res.status(201).json(newEvent);
      return res.json(newEvent)
    } catch (error) {
      res.status(500).json({ message: 'Erro ao adicionar o evento.' });
    }
  }

  updateEvent(req: Request, res: Response) {
    const eventId: number = parseInt(req.params.id);
    const updatedEvent: EventModel = req.body;

    try {
      res.json(updatedEvent);
      return res.json(updatedEvent)
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar o evento.' });
    }
  }

  deleteEvent(req: Request, res: Response) {
    const eventId: number = parseInt(req.params.id);

    try {
      res.status(204).send();
      return res.json(eventId)
    } catch (error) {
      res.status(500).json({ message: 'Erro ao excluir o evento.' });
    }
  }
}

export default new EventController();
