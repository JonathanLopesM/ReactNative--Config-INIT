/// <reference types="nativewind/types" />
import 'react-native-gesture-handler';
import { useState } from 'react';
import { StatusBar, StatusBarStyle } from 'react-native';
import { Routes } from './src/routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native'

import { Loading } from './src/components/Loading';

const STYLES = ['default', 'dark-content', 'light-content'] as const;
const TRANSITIONS = ['fade', 'slide', 'none'] as const;

export default function App() {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
    STYLES[0],
  );
  const [statusBarTransition, setStatusBarTransition] = useState<
    'fade' | 'slide' | 'none'
  >(TRANSITIONS[0]);

  
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar
            animated={true}
            backgroundColor="#002e62"
            barStyle={statusBarStyle}
            showHideTransition={statusBarTransition}
            hidden={hidden}
          />
        <Routes />
      </NavigationContainer>
    </SafeAreaProvider>
    
  );
}
