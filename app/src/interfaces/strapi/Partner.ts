import { StrapiMedia, StrapiImage } from './index';

interface Partner {
  name: string;
  url: string;
  logo: StrapiMedia<StrapiImage>;
}

export default Partner;
