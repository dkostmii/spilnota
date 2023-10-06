export interface StrapiData<T> {
  id: string;
  attributes: T;
}

export interface StrapiPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total?: number;
}

export interface StrapiError {
  status: number;
  name: string;
  message: string;
  details: unknown;
}

export interface StrapiResponse<T> {
  data: StrapiData<T> | StrapiData<T>[];
  error?: StrapiError;
  meta: {
    pagination?: StrapiPagination;
  };
}

// export interface StrapiRequestBody<T> {
//   data: T
// }

export type StrapiImageFormat = 'small' | 'medium' | 'large';

export type StrapiFile = {
  url: string;
};

export type StrapiImage = StrapiFile & {
  formats?: Record<StrapiImageFormat, Omit<StrapiImage, 'formats'>>;
};

export type StrapiMedia<T> = {
  data: StrapiData<T>;
};
