export interface Thumbnail {
  path: string;
  extension: string;
}


export interface CharacterInterface {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: string[];
  thumbnail: Thumbnail;
}


export class Character {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: string[];
  thumbnail: Thumbnail;
  constructor({
    id,
    name,
    description,
    modified,
    resourceURI,
    urls,
    thumbnail,
  }: CharacterInterface) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.modified = modified;
    this.resourceURI = resourceURI;
    this.urls = urls ?? [];
    this.thumbnail = thumbnail;
  }
}
