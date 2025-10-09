import * as React from 'react';

export default function useDimension() {
  const [dimension, setDimension] = React.useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 800,
    height: typeof window !== 'undefined' ? window.innerHeight : 600,
    pixelRatio: typeof window !== 'undefined' ? window.devicePixelRatio : 1,
  });

  React.useEffect(() => {
    // Check if the code is running on the client side
    if (typeof window !== 'undefined') {
      const resize = () => {
        setDimension({
          width: window.innerWidth,
          height: window.innerHeight,
          pixelRatio: window.devicePixelRatio,
        });
      };

      resize();

      window.addEventListener('resize', resize);

      return () => window.removeEventListener('resize', resize);
    }
  }, []);

  return dimension;
}