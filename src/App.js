import { useState, useEffect } from 'react';
import Invitation from './components/Invitation';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

function App() {
  const [ assetsLoaded, setAssetsLoaded ] = useState(false);
  const [ loadingTimeoutElapsed, setLoadingTimeoutElapsed ] = useState(false);
  const isAppReady = assetsLoaded && loadingTimeoutElapsed;

  useEffect(() => {
    setTimeout(() => {
      setLoadingTimeoutElapsed(true);
    }, 2000)
  });

  return (
    <div className='app'>
      <Invitation
        animate={isAppReady}
        onAssetsLoaded={() => setAssetsLoaded(true)}
      />
      <LoadingScreen open={!isAppReady} />
    </div>
  );
}

export default App;
