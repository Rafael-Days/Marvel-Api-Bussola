import { Url, Image, ResourceList, EventSummary } from './commonModels';

interface EventModel {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  urls: Url[];
  modified: Date;
  start: Date;
  end: Date;
  thumbnail: Image;
  comics: ResourceList;
  stories: ResourceList;
  series: ResourceList;
  characters: ResourceList;
  creators: ResourceList;
  next: EventSummary;
  previous: EventSummary;
}

export default EventModel;
