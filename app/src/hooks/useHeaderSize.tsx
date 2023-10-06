import { useEffect, useState } from 'react';

import useWindowSize from './useWindowSize';
import calcHeader from '@helpers/calcHeader';
import config from '@/config';

function useHeaderSize() {
  const [headerSize, setHeaderSize] = useState({ width: 0, height: 0 });
  const { width } = useWindowSize(config.resizeDebounceTimeMs);

  useEffect(() => {
    const size = calcHeader();

    if (size) {
      setHeaderSize(size);
    }
  }, [width]);

  return headerSize;
}

export default useHeaderSize;
