import { StrapiData, StrapiMedia, StrapiResponse } from '@interfaces/strapi';

export type Indexed<T> = T & Pick<StrapiData<T>, 'id'>;

export function unpackData<T>(data: StrapiData<T>): Indexed<T> {
  return { id: data.id, ...data.attributes };
}

export function unpackResponse<T>(response: StrapiResponse<T>): Indexed<T> | Indexed<T>[] {
  if (!response.data) {
    throw new TypeError('Expected response.data to be defined');
  }

  if (Array.isArray(response.data)) {
    return response.data.map((d) => unpackData(d));
  }

  return unpackData(response.data);
}

export function unpackMedia<T>(media: StrapiMedia<T>): Indexed<T> {
  const { data } = media;
  return unpackData(data);
}
