import { Request, Response } from 'express';
import CharacterModel from '../model/characterModel';

class CharacterController {

  getAllComic(req: Request, res: Response) {
    const characters: CharacterModel[] = [
      {
          id: 1,
          name: 'Spider-Man',
          description: 'A bite from a radioactive spider granted Peter Parker amazing arachnid-like powers.',
          modified: new Date(),
          resourceURI: 'http://example.com/characters/1',
          urls: [{ type: 'detail', url: 'http://example.com/characters/1' }],
          thumbnail: { path: 'http://example.com/thumbnail/1', extension: 'jpg' },
          comics: {
              available: 100, collectionURI: 'http://example.com/characters/1/comics',
              returned: 0,
              items: []
          },
          stories: {
              available: 200, collectionURI: 'http://example.com/characters/1/stories',
              returned: 0,
              items: []
          },
          events: {
              available: 50, collectionURI: 'http://example.com/characters/1/events',
              returned: 0,
              items: []
          },
          series: {
              available: 30, collectionURI: 'http://example.com/characters/1/series',
              returned: 0,
              items: []
          },
          create: function (data: any): unknown {
              throw new Error('Function not implemented.');
          }
      },
    ];

    res.json(characters);
  }

  getComicById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const character: CharacterModel = {
        id: 1,
        name: 'Spider-Man',
        description: 'A bite from a radioactive spider granted Peter Parker amazing arachnid-like powers.',
        modified: new Date(),
        resourceURI: 'http://example.com/characters/1',
        urls: [{ type: 'detail', url: 'http://example.com/characters/1' }],
        thumbnail: { path: 'http://example.com/thumbnail/1', extension: 'jpg' },
        comics: {
            available: 100, collectionURI: 'http://example.com/characters/1/comics',
            returned: 0,
            items: []
        },
        stories: {
            available: 200, collectionURI: 'http://example.com/characters/1/stories',
            returned: 0,
            items: []
        },
        events: {
            available: 50, collectionURI: 'http://example.com/characters/1/events',
            returned: 0,
            items: []
        },
        series: {
            available: 30, collectionURI: 'http://example.com/characters/1/series',
            returned: 0,
            items: []
        },
        create: function (data: any): unknown {
            throw new Error('Function not implemented.');
        }
    };

    res.json(character);
  }

  addComic(req: Request, res: Response) {
    const newCharacter: CharacterModel = req.body;

    try {
      res.status(201).json(newCharacter);
      return res.json(newCharacter)
    } catch (error) {
      res.status(500).json({ message: 'Erro ao adicionar o personagem.' });
    }
  }

  updateComic(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const updatedCharacter: CharacterModel = req.body;

    try {
      res.json(updatedCharacter);
      return res.json(updatedCharacter)
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar o personagem.' });
    }
  }

  deleteComic(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    try {
      res.status(204).send();
      return res.json(id)
    } catch (error) {
      res.status(500).json({ message: 'Erro ao excluir o personagem.' });
    }
  }
}

export default new CharacterController();
