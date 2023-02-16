import { useRef, useEffect } from 'react';
import { animateScroll } from 'react-scroll';
import { staticImageUrl } from '../utils';
import './Invitation.css';

const Invitation = ({ animate, onAssetsLoaded }) => {
  const characterRef = useRef();
  const paperRef = useRef();
  const heart1Ref = useRef();
  const heart2Ref = useRef();
  const heart3Ref = useRef();

  const startAnimation = () => {
    characterRef.current.classList.add('character-slide');
    paperRef.current.classList.add('paper-slide');
    heart1Ref.current.classList.add('pulse');
    heart2Ref.current.classList.add('pulse');
    heart3Ref.current.classList.add('pulse');

    animateScroll.scrollTo(400, {
      duration: 2500,
      delay: 100,
      smooth: 'easeOutBack'
    });
  };

  useEffect(() => {
    if (animate) {
      setTimeout(() => {
        startAnimation();
      }, 700);
    }
  }, [ animate ])

  return (
    <div className='home'>
      <img
        alt='invitation'
        className='invitation'
        src={staticImageUrl('invitation.webp')}
        onLoad={onAssetsLoaded}
      />
      <img
        alt='character'
        className='character'
        src={staticImageUrl('character.webp')}
        ref={characterRef}
      />
      <img
        alt='paper'
        className='paper'
        src={staticImageUrl('paper.webp')}
        ref={paperRef}
      />
      <img
        alt='heart'
        className='small-heart heart-1'
        src={staticImageUrl('heart_1.webp')}
        ref={heart1Ref}
      />
      <img
        alt='heart'
        className='small-heart heart-2'
        src={staticImageUrl('heart_2.webp')}
        ref={heart2Ref}
      />
      <img
        alt='heart'
        className='small-heart heart-3'
        src={staticImageUrl('heart_3.webp')}
        ref={heart3Ref}
      />
    </div>
  )
}

export default Invitation;
