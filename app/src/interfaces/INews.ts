import { StrapiImage } from './strapi';

export default interface INews {
  id: string;
  photo: StrapiImage;
  title: string;
  content: string;
}
