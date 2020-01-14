import * as React from 'react';
import { StyleSheet, View, AsyncStorage } from 'react-native';
import { WebView } from 'react-native-webview';
import { fb, fs } from './config.js';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

// App navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Put the import of the screen page here
import HomeScreen from './components/ScreenPages/HomePage';
import SettingsScreen from './components/ScreenPages/SettingsPage';
import DisclamerScreen from './components/ScreenPages/DisclamerPage';
import ProductScreen from './components/ScreenPages/ProductPage';
import SearchScreen from './components/ScreenPages/SearchPage';
import LogInScreen from './components/ScreenPages/LogInPage';

///////////////////////////////
/* Start of app.js for UI */
///////////////////////////////

const RootStack = createStackNavigator(
  {
    Disclamer: {
      screen: DisclamerScreen,
    },
    // LogIn: {
    // 	screen: LogInScreen,
    // },
    Home: {
      screen: HomeScreen,
    },
    Search: {
      screen: SearchScreen,
    },
    Product: {
      screen: ProductScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    // Title screen
    initialRouteName: 'Disclamer',

    // General app style
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#ff7900',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontFamily: 'Euclid',
        fontWeight: 'bold',
      },
    },
  },
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  // Loading custom fonts
  constructor(props) {
    super(props);
    this.state = {
      fontsReady: false,
    };
  }

  componentDidMount() {
    this.initProjectFonts();
  }

  async initProjectFonts() {
    await Font.loadAsync({
      IBM: require('./assets/fonts/IBMPlexMono-SemiBold.otf'),
    });
    await Font.loadAsync({
      Euclid: require('./assets/fonts/EuclidSquare-Semibold.ttf'),
    });
    this.setState({
      fontsReady: true,
    });
  }

  render() {
    if (!this.state.fontsReady) {
      return <AppLoading />;
    }
    return <AppContainer />;
  }
}
///////////////////////////////
/* End of app.js for UI */
///////////////////////////////
