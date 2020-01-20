import * as React from 'react';
// import { StyleSheet, View, AsyncStorage } from 'react-native';
// import { WebView } from 'react-native-webview';
// import { fb, fs } from './config.js';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
// import from './assets/fonts';

// App navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Put the import of the screen page here
import HomeScreen from './components/ScreenPages/HomePage';
import SettingsScreen from './components/ScreenPages/SettingsPage';
import DisclamerScreen from './components/ScreenPages/DisclamerPage';
import LogInScreen from './components/ScreenPages/LogInPage';
import Scraper from './components/Scraper';

const RootStack = createStackNavigator(
    {
        Disclamer: {
            screen: DisclamerScreen
        },
        LogIn: {
            screen: LogInScreen
        },
        Scraper: {
            screen: Scraper
        },
        Home: {
            screen: HomeScreen
        },
        Settings: {
            screen: SettingsScreen
        }
    },
    {
        // Title screen
        initialRouteName: 'Disclamer',

        // General app style
        defaultNavigationOptions: {
            gesturesEnabled: false,

            headerStyle: {
                backgroundColor: '#ff7900'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontFamily: 'SpaceGrotesk',
                fontWeight: 'bold'
            }
        }
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {

    componentDidMount() {
        // Loading custom fonts
        Font.loadAsync({
            'IBM': require('./assets/fonts/IBMPlexMono-SemiBold.otf'),
            'SpaceGrotesk': require('./assets/fonts/SpaceGrotesk-Bold.otf')
        });
      }
    
    constructor(props) {
        super(props);
        
    };

  

    render() {
       
        return <AppContainer />;
    };
};
