import { Url, Image, ResourceList } from './commonModels';

interface CharacterModel {
  create(data: any): unknown;
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: Url[];
  thumbnail: Image;
  comics: ResourceList;
  stories: ResourceList;
  events: ResourceList;
  series: ResourceList;
}

export default CharacterModel;
