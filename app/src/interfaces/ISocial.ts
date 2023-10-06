import IconsData from '@interfaces/IconsData';

export interface ISocialItem {
  url: string;
  caption: string;
  icons: IconsData;
}

export interface ISocial {
  [socialNetworkName: string]: ISocialItem;
}
