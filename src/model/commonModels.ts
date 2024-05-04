export interface Url {
  type: string;
  url: string;
}

export interface Image {
  path: string;
  extension: string;
}

export interface ResourceList {
  available: number;
  returned: number;
  collectionURI: string;
  items: any[]; // Defina o tipo correto para os items
}

export interface TextObject {
  type: string;
  language: string;
  text: string;
}

export interface ComicDate {
  type: string;
  date: Date;
}

export interface ComicPrice {
  type: string;
  price: number;
}

export interface SeriesSummary {
  resourceURI: string;
  name: string;
}

export interface ComicSummary {
  resourceURI: string;
  name: string;
}

  // Interface para representar um resumo de evento
  export interface EventSummary {
    resourceURI: string;
    name: string;
  }
  