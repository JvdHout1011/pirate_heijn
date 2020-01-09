import * as React from "react";
import Constants from "expo-constants";

import { Text, View, StyleSheet } from "react-native";
import { fb, fs } from "./config.js";

import { DangerZone, AppLoading } from "expo";
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

const testQuery = fs.collection("users").doc("test4");
testQuery.set({
	a: "B",
	c: "D",
});

/////////////////////////////////
/* Start of app.js for cookies */
////////////////////////////////

// export default class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {cookies: ''}
//   }

//   callbackFunction = (data) => {
//     this.setState({cookies: data})

//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <LoginScreen parentCallback = {this.callbackFunction} />
//         {/* {console.log(this.state.newCookies)} */}
//         <Scraper cookies = {this.state.cookies} />

//           {/* Change code in the editor and watch it change on your phone! Save to get a shareable url. */}

//         {/* <loginScreen parentCallback = {this.callbackFunction} />
//         <Text> {this.state.message} </Text> */}
//       </View>
//     );
//   }

// const testQuery = fs.collection("users").doc("test4");
// testQuery.set({
//   a: "B",
//   c: "D"
// });

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

// Render function screen page
const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
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
			Euclid: require("./assets/fonts/EuclidCircularB-Semibold.otf"),
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });
