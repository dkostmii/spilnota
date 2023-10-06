import { getFileNameNoExt } from '../helpers/filename';

const imgObj = import.meta.glob('./*.{svg,png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' });

const img: Record<string, string> = {};

for (const originalKey in imgObj) {
  const key = getFileNameNoExt(originalKey);
  img[key] = imgObj[originalKey];
}

export default img;
