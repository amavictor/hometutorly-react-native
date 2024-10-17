import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import BootSplash from 'react-native-bootsplash';
import { BottomNavigation } from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SearchContextProvider } from './context';
import { SplashScreen } from './components';
import { AppState } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { APP_SESSION_KEY, DELAY_CONSTANTS, SESSION_TIMEOUT } from './utils';


function App() {
  const [showSplash, setShowSplash] = useState(true);


  useEffect(() => {
    const subscription = AppState.addEventListener('change', async (nextAppState) => {
      if (nextAppState === 'active') {
        const currentTime = Date.now().toString();
        await AsyncStorage.setItem(APP_SESSION_KEY, currentTime);
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    let splashTimeout;

    const initializeApp = async () => {
      try {
        const lastSession = await AsyncStorage.getItem(APP_SESSION_KEY);
        const currentTime = Date.now();
        const isNewSession = !lastSession ||
          (currentTime - parseInt(lastSession, 10)) > SESSION_TIMEOUT;

        // Always hide the native splash screen first
        await BootSplash.hide({ fade: true });

        if (isNewSession) {
          // Set new session timestamp
          await AsyncStorage.setItem(APP_SESSION_KEY, currentTime.toString());
          setShowSplash(true);
          splashTimeout = setTimeout(() => {
            setShowSplash(false);
          }, DELAY_CONSTANTS.SPLASH_SCREEN_TIME_OUT);
        } else {
          // Skip splash screen for existing session
          setShowSplash(false);
        }
      } catch (error) {
        console.error('Error initializing app:', error);
        setShowSplash(false);
      } finally {
        // setIsInitialized(true);
      }
    };

    initializeApp();


    return () => {
      if (splashTimeout) {
        clearTimeout(splashTimeout);
      }
    };
  }, []);


  if (showSplash) {
    return <SafeAreaProvider>
      <SplashScreen />
    </SafeAreaProvider>;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SearchContextProvider>
          <BottomNavigation />
        </SearchContextProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
