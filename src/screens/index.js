import { Navigation } from 'react-native-navigation';
import SplashScreen from './splash';
import HomeScreen from './home';

export const Screens = new Map();

export const SPLASH_SCREEN = 'stqapp.splash';
export const HOME = 'stqapp.home';
export const POPUP = 'stqapp.popup';

Screens.set(SPLASH_SCREEN, () => SplashScreen);
Screens.set(HOME, () => HomeScreen);

export const startApp = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: HOME,
      title: 'Todo List',
    },
  });
};
