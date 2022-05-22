import { useRef, useState, useEffect, forwardRef } from 'react';
import { staticImageUrl } from './helpers';
import './App.css';

const LoadingScreen = forwardRef((props, ref) => {
  const imageRef = useRef();
  const [ imageLoaded, setImageLoaded ] = useState(false);

  useEffect(() => {
    if (imageLoaded) {
      setTimeout(() => {
        imageRef.current.className += ' loading-screen-heart-animation';
      }, 500)
    }
  }, [ imageLoaded ])

  return (
    <div
      ref={ref}
      className='loading-screen-bg'
    >
      <img
        src={staticImageUrl('favicon.webp')}
        className='loading-screen-heart'
      />
      <img
        ref={imageRef}
        src={staticImageUrl('favicon.webp')}
        onLoad={() => setImageLoaded(true)}
        className='loading-screen-heart'
      />
      <img
        className='date'
        src={staticImageUrl('date.webp')}
      />
    </div>
  )
})

export default LoadingScreen;
