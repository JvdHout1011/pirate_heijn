import * as React from "react";
import { StyleSheet } from 'react-native';
import { AppLoading } from "expo";
import * as Font from "expo-font";

// App navigation
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// Put the import of the screen page here
import HomeScreen from "./components/ScreenPages/HomePage";
import SettingsScreen from "./components/ScreenPages/SettingsPage";
import DisclamerScreen from "./components/ScreenPages/DisclamerPage";
import LogInScreen from "./components/ScreenPages/logInPage";
import ProductScreen from "./components/ScreenPages/ProductPage.js";
import SearchScreen from "./components/ScreenPages/SearchPage.js";
import Scraper from "./components/Scraper";

/////////////////////////////////
/* Start of app.js for cookies */
////////////////////////////////

// export default class App extends React.Component {
//   	constructor() {
//     	super()
// 		this.state = {isUserLoggedIn: false}
//   	}

// 	callbackFunction = (data) => {
// 		this.setState({isUserLoggedIn: data})
// 	}

//   	render() {
// 		if (this.state.isUserLoggedIn == false){
// 			return (
// 				<View style={styles.container}>
// 					<View style={styles.logInScreen}><LogInScreen parentCallback={this.callbackFunction}/></View>
// 				</View>
// 		)} else if (this.state.isUserLoggedIn == true){
// 			return(
// 				<View style={styles.container}>
// 					<View style={styles.scraper}><Scraper/></View>
// 				</View>
// 			)
// 		}
//   	}
// }

///////////////////////////////
/* End of app.js for cookies */
///////////////////////////////

///////////////////////////////
/* Start of app.js for UI */
///////////////////////////////

const RootStack = createStackNavigator(
	{
		Disclamer: {
			screen: DisclamerScreen,
		},
		LogIn: {
			screen: LogInScreen,
		},
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
		initialRouteName: "Disclamer",

		// General app style
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: "#ff7900",
			},
			headerTintColor: "#fff",
			headerTitleStyle: {
				fontFamily: "Euclid",
				fontWeight: "bold",
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
			"EAN-13": require("./assets/fonts/EAN-13.ttf"),
		});
		await Font.loadAsync({
			Euclid: require("./assets/fonts/EuclidSquare-Semibold.ttf"),
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

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.paragraph}>
//           Change code in the editor and watch it change on your phone! Save to get a shareable url.
//         </Text>
//         <Card>
//           <AssetExample />
//         </Card>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 25, // Constants kon niet gevonden worden, persoon die dit heeft gedaan moet er even nog een keer naar kijken.
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  loginInScreen: {
	  flex: 1
  },
  scraper: {
	  flex: 0
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
