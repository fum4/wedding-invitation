import { useRef, useState, useEffect } from 'react';
import { animateScroll } from 'react-scroll';
import { staticImageUrl } from './helpers';
import LoadingScreen from './LoadingScreen';
import './App.css';

function App() {
  const characterRef = useRef();
  const paperRef = useRef();
  const heart1Ref = useRef();
  const heart2Ref = useRef();
  const heart3Ref = useRef();
  const loadingScreenRef = useRef();
  const [ assetsLoaded, setAssetsLoaded ] = useState(false);
  const [ loadingTimeoutElapsed, setLoadingTimeoutElapsed ] = useState(false);

  const startAnimation = () => {
    characterRef.current.classList.add('character-slide');
    paperRef.current.classList.add('paper-slide');
    heart1Ref.current.classList.add('heart-1-animation');
    heart2Ref.current.classList.add('heart-2-animation');
    heart3Ref.current.classList.add('heart-3-animation');

    animateScroll.scrollTo(400, {
      duration: 2500,
      delay: 100,
      smooth: 'easeOutBack'
    });
  };

  useEffect(() => {
    if (assetsLoaded && loadingTimeoutElapsed) {
      loadingScreenRef.current.classList.add('background-fade-out');

      setTimeout(() => {
        startAnimation();
      }, 700);
    }
  }, [ assetsLoaded, loadingTimeoutElapsed ])

  useEffect(() => {
    document.getElementById('root').classList.remove('root');

    setTimeout(() => {
      setLoadingTimeoutElapsed(true);
    }, 2000)
  });

  return (
    <div className='app'>
      <div className='wrapper'>
        <img
          className='paper'
          src={staticImageUrl('paper.webp')}
          ref={paperRef}
        />
        <img
          className='invitation'
          src={staticImageUrl('invitation.webp')}
          onLoad={() => setAssetsLoaded(true)}
        />
        <img
          className='heart heart-1'
          src={staticImageUrl('heart_1.webp')}
          ref={heart1Ref}
        />
        <img
            className='heart heart-2'
            src={staticImageUrl('heart_2.webp')}
            ref={heart2Ref}
        />
        <img
            className='heart heart-3'
            src={staticImageUrl('heart_3.webp')}
            ref={heart3Ref}
        />
        <img
          className='character'
          src={staticImageUrl('character.webp')}
          ref={characterRef}
        />
      </div>
      <LoadingScreen ref={loadingScreenRef} />
    </div>
  );
}

export default App;
