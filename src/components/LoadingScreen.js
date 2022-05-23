import { useRef, useEffect } from 'react';
import { staticImageUrl } from '../utils';
import './LoadingScreen.css';

const LoadingScreen = ({ open }) => {
  const ref = useRef();

  useEffect(() => {
    if (!open) {
      ref.current.classList.add('fade-out');
    }
  }, [ open ])

  return (
    <div
      ref={ref}
      className='loading-screen'
    >
      <img
        src={staticImageUrl('favicon.webp')}
        className='big-heart'
      />
      <img
        src={staticImageUrl('favicon.webp')}
        className='big-heart pulse'
      />
      <img
        className='date'
        src={staticImageUrl('date.webp')}
      />
    </div>
  )
}

export default LoadingScreen;
