import { useState } from 'react';
import HomeScreenSizeLarge from './components/HomeScreenSizeLarge';
import ChallengesScreen from './components/ChallengesScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  if (currentScreen === 'challenges') {
    return <ChallengesScreen onBack={() => setCurrentScreen('home')} />;
  }

  return <HomeScreenSizeLarge onNavigateToChallenges={() => setCurrentScreen('challenges')} />;
}

export default App;
