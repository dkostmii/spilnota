export interface ISupport {
  id: string;
  title: string;
  url: string;
  order: number;
}

export interface ISupportCollection {
  id: string;
  title: string;
  items: ISupport[];
  order: number;
}
