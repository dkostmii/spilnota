import breakpoints from '@data/breakpoints.json'

import type INews from '@interfaces/INews'

const slideSettings = {
  cardsPerSlide: 3,
  naturalSlideWidth: 100,
  naturalSlideHeight: 120,
  showDots: true,
}

const responsiveSlideSettings = [
  {
    breakpoint: breakpoints.tablet,
    cardsPerSlide: 1,
    naturalSlideWidth: 100,
    naturalSlideHeight: 140,
    showDots: true,
  },
  {
    breakpoint: breakpoints.laptopLarge,
    cardsPerSlide: 2,
    naturalSlideWidth: 100,
    naturalSlideHeight: 136,
    showDots: true,
  },
]

export const getResponsiveSettings = (width: number, data: INews[]) => {
  let settings: Record<string, unknown> | undefined = responsiveSlideSettings.find(s => width <= s.breakpoint)

  if (!settings) {
    settings = {}
  }

  if (data.length > 12 && width <= breakpoints.tablet) {
    settings.showDots = false
  }

  if (data.length > 22 && width <= breakpoints.laptop) {
    settings.showDots = false
  }

  if (data.length > 35 && width <= breakpoints.laptop) {
    settings.showDots = false
  }

  return { ...slideSettings, ...settings }
}


export default slideSettings
