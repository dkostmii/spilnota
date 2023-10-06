import type { FC } from 'react';
import type INews from '@interfaces/INews';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';

import useWindowSize from '@hooks/useWindowSize';
import { getResponsiveSettings } from './slideSettings';
import config from '@/config';

import NewsCard from '@components/ui/NewsCard';

import style from './NewsSlider.module.scss';
import slideControlsStyle from './SlideControls.module.scss';

import 'pure-react-carousel/dist/react-carousel.es.css';

interface Props {
  data: INews[];
}

const NewsSlider: FC<Props> = ({ data }) => {
  const { width } = useWindowSize(config.resizeDebounceTimeMs);
  const settings = getResponsiveSettings(width, data);

  return (
    <CarouselProvider
      naturalSlideWidth={settings.naturalSlideWidth}
      naturalSlideHeight={settings.naturalSlideHeight}
      isIntrinsicHeight
      totalSlides={data.length}
      visibleSlides={settings.cardsPerSlide}
      step={settings.cardsPerSlide}
      className={style.carousel}
    >
      <Slider>
        {data.map((item, id) => (
          <Slide key={id} index={id} className={style.slide} innerClassName={style.slide_inner}>
            <NewsCard data={item} />
          </Slide>
        ))}
      </Slider>
      <div className={slideControlsStyle.container}>
        <ButtonBack className={slideControlsStyle.arrow_prev}>{''}</ButtonBack>
        {settings.showDots && <DotGroup className={slideControlsStyle.dots} showAsSelectedForCurrentSlideOnly />}
        <ButtonNext className={slideControlsStyle.arrow_next}>{''}</ButtonNext>
      </div>
    </CarouselProvider>
  );
};

export default NewsSlider;
