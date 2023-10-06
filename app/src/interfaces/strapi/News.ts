import { StrapiMedia, StrapiImage } from './index';

interface Partner {
  title: string;
  content: string;
  photo: StrapiMedia<StrapiImage>;
}

export default Partner;
