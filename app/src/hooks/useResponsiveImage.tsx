import type { StrapiImage, StrapiImageFormat } from '@interfaces/strapi';

import breakpoints from '@data/breakpoints.json';

import useWindowSize from './useWindowSize';

export function fallbackGradually(img: StrapiImage, sizes: StrapiImageFormat[]): Omit<StrapiImage, 'formats'> {
  if (!img.formats) {
    return img;
  }

  for (const size of sizes) {
    if (img.formats[size]) {
      return img.formats[size];
    }
  }

  return img;
}

function useResponsiveImage(img?: StrapiImage): Omit<StrapiImage, 'formats'> | null {
  const { width } = useWindowSize();

  if (!img) {
    return null;
  }

  if (!img.formats) {
    return img;
  }

  if (width >= breakpoints.laptop) {
    return fallbackGradually(img, ['large', 'medium', 'small']);
  } else if (width >= breakpoints.tablet) {
    return fallbackGradually(img, ['medium', 'small']);
  }

  return fallbackGradually(img, ['small']);
}

export default useResponsiveImage;
