import { Url, Image, ComicDate, ComicPrice, ResourceList, TextObject } from './commonModels';

interface ComicModel {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: Date;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  resourceURI: string;
  urls: Url[];
  series: SeriesSummary;
  variants: ComicSummary[];
  collections: ComicSummary[];
  collectedIssues: ComicSummary[];
  dates: ComicDate[];
  prices: ComicPrice[];
  thumbnail: Image;
  images: Image[];
  creators: ResourceList;
  characters: ResourceList;
  stories: ResourceList;
  events: ResourceList;
  textObjects: TextObject[];
}

interface SeriesSummary {
  resourceURI: string;
  name: string;
}

interface ComicSummary {
  resourceURI: string;
  name: string;
}

export default ComicModel;
