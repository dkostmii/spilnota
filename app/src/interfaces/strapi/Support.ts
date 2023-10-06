import { StrapiData } from './index';
import { Indexed } from '@helpers/strapi/unpack';

export interface SupportCategory {
  title: string;
  order: number;
}

export interface SupportItem {
  title: string;
  url: string;
  support_category: { data: StrapiData<SupportCategory> | null };
  order: number;
}

export interface UnpackedSupportItem {
  title: string;
  url: string;
  support_category: Indexed<SupportCategory> | null;
  order: number;
}
