import { Navigation } from 'react-native-navigation';
import SplashScreen from './splash';
import HomeScreen from './home';

export const Screens = new Map();

export const SPLASH_SCREEN = 'stqapp.splash';
export const HOME = 'stqapp.home';

Screens.set(SPLASH_SCREEN, () => SplashScreen);
Screens.set(HOME, () => HomeScreen);

export const startApp = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'One', // tab label as appears under the icon in iOS (optional)
        screen: 'stqapp.home', // unique ID registered with Navigation.registerScreen
        icon: require('@assets/icons/calendar.png'), // local image asset for the tab icon unselected state (optional on iOS)
        selectedIcon: require('@assets/icons/clear.png'), // local image asset for the tab icon selected state (optional, iOS only. On Android, Use `tabBarSelectedButtonColor` instead)
        iconInsets: { // add this to change icon position (optional, iOS only).
          top: 6, // optional, default is 0.
          left: 0, // optional, default is 0.
          bottom: -6, // optional, default is 0.
          right: 0, // optional, default is 0.
        },
        title: 'Screen One', // title of the screen as appears in the nav bar (optional)
        navigatorStyle: {},
        navigatorButtons: {},
      },
      {
        label: 'Two',
        screen: 'stqapp.home',
        icon: require('@assets/icons/calendar.png'),
        selectedIcon: require('@assets/icons/clear.png'),
        title: 'Screen Two',
      },
    ],
    tabsStyle: { // optional, add this if you want to style the tab bar beyond the defaults
      tabBarButtonColor: '#ffff00', // optional, change the color of the tab icons and text (also unselected). On Android, add this to appStyle
      tabBarSelectedButtonColor: '#ff9900', // optional, change the color of the selected tab icon and text (only selected). On Android, add this to appStyle
      tabBarBackgroundColor: '#551A8B', // optional, change the background color of the tab bar
    },
    appStyle: {
      orientation: 'portrait', // Sets a specific orientation to the entire app. Default: 'auto'. Supported values: 'auto', 'landscape', 'portrait'
      bottomTabBadgeTextColor: 'red', // Optional, change badge text color. Android only
      bottomTabBadgeBackgroundColor: 'green', // Optional, change badge background color. Android only
      hideBackButtonTitle: true,
    },
    passProps: {},
    animationType: 'fade', // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
  });
};
