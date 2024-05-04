import { Request, Response } from 'express';
import CreatorModel from '../model/creatorModel';

class CreatorController {

  getAllCreators(req: Request, res: Response) {
    const creators: CreatorModel[] = [
      {
        id: 1,
        firstName: 'Stan',
        middleName: '',
        lastName: 'Lee',
        suffix: '',
        fullName: 'Stan Lee',
        modified: new Date(),
        resourceURI: 'http://example.com/creators/1',
        urls: [{ type: 'detail', url: 'http://example.com/creators/1' }],
        thumbnail: { path: 'http://example.com/thumbnail/1', extension: 'jpg' },
        series: { available: 10, collectionURI: 'http://example.com/creators/1/series', returned: 0, items: [] },
        stories: { available: 20, collectionURI: 'http://example.com/creators/1/stories', returned: 0, items: [] },
        comics: { available: 30, collectionURI: 'http://example.com/creators/1/comics', returned: 0, items: [] },
        events: { available: 5, collectionURI: 'http://example.com/creators/1/events', returned: 0, items: [] },
      },
    ];

    res.json(creators);
  }

  getCreatorById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const creator: CreatorModel = {
      id: 1,
      firstName: 'Stan',
      middleName: '',
      lastName: 'Lee',
      suffix: '',
      fullName: 'Stan Lee',
      modified: new Date(),
      resourceURI: 'http://example.com/creators/1',
      urls: [{ type: 'detail', url: 'http://example.com/creators/1' }],
      thumbnail: { path: 'http://example.com/thumbnail/1', extension: 'jpg' },
      series: { available: 10, collectionURI: 'http://example.com/creators/1/series', returned: 0, items: [] },
      stories: { available: 20, collectionURI: 'http://example.com/creators/1/stories', returned: 0, items: [] },
      comics: { available: 30, collectionURI: 'http://example.com/creators/1/comics', returned: 0, items: [] },
      events: { available: 5, collectionURI: 'http://example.com/creators/1/events', returned: 0, items: [] },
    };

    res.json(creator);
  }

  addCreator(req: Request, res: Response) {
    const newCreator: CreatorModel = req.body;

    try {
      res.status(201).json(newCreator);
      return res.json(newCreator)
    } catch (error) {
      res.status(500).json({ message: 'Erro ao adicionar o criador.' });
    }
  }

  updateCreator(req: Request, res: Response) {
    const creatorId: number = parseInt(req.params.id);
    const updatedCreator: CreatorModel = req.body;

    try {
      res.json(updatedCreator);
      return res.json(updatedCreator)
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar o criador.' });
    }
  }

  deleteCreator(req: Request, res: Response) {
    const creatorId: number = parseInt(req.params.id);

    try {
      res.status(204).send();
      return res.json(creatorId)
    } catch (error) {
      res.status(500).json({ message: 'Erro ao excluir o criador.' });
    }
  }
}

export default new CreatorController();
