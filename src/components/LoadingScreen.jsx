import { useRef, useEffect } from 'react';
import { staticImageUrl } from '../utils';
import './LoadingScreen.css';

const LoadingScreen = ({ open }) => {
  const ref = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  })

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
        alt='heart'
        src={staticImageUrl('favicon.webp')}
        className='big-heart'
      />
      <img
        alt='heart'
        src={staticImageUrl('favicon.webp')}
        className='big-heart pulse'
      />
      <div className='date'>
        <img
          alt='wedding-date'
          src={staticImageUrl('date.webp')}
        />
      </div>
    </div>
  )
}

export default LoadingScreen;
