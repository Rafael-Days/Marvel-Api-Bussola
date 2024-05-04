import { Url, Image, ResourceList } from './commonModels';

interface CreatorModel {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    suffix: string;
    fullName: string;
    modified: Date;
    resourceURI: string;
    urls: Url[];
    thumbnail: Image;
    series: ResourceList;
    stories: ResourceList;
    comics: ResourceList;
    events: ResourceList;
}

export default CreatorModel;
