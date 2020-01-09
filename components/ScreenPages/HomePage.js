import * as React from "react";
import {
	Text,
	View,
	StyleSheet,
	Button,
	TextInput,
	TouchableOpacity,
	Image,
} from "react-native";
import { fb, fs } from "../../config.js";

// App navigation
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { styles, buttons, textInput, pageSetup, text } from "./StylesPage";

// Screen page layout with logic
class HomeScreen extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			discountCardNumber: 203033004404040,
			auth_cookie: ''
		}
	}
	static navigationOptions = ({ navigation }) => {
		return {
			title: "Home",
			headerRight: () => (
				<TouchableOpacity
					style={buttons.navButton}
					onPress={navigation.getParam("goToSettings")}
				>
					<Image
						source={require("../../assets/icons/settings.png")}
						fadeDuration={0}
						style={buttons.buttonImage}
					/>
					<Text style={buttons.buttonText}> Settings </Text>
				</TouchableOpacity>
			),
		};
	};
	randomString = (length, chars) => {
		var result = "";
		for (var i = length; i > 0; --i)
			result += chars[Math.floor(Math.random() * chars.length)];
		return result;
	};
	

	//ik weet niet wat hier gebeurt?
	UNSAFE_componentWillMount() {
		this.props.navigation.setParams({ goToSettings: this._goToSettings });

		this.startSetCookie();
	}

	
	startSetCookie = async () => {
		const rString = this.randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

		const cookieQuery = fs.collection("users").doc();
		console.log(rString)
		const updateQuery = await cookieQuery.set({

			bonuskaart_number: this.state.discountCardNumber,
			auth_cookie: rString

		})		
		this.setState({auth_cookie: rString})
	}
	
	_goToSettings = () => {
		this.props.navigation.navigate("Settings");
	};
	

	render() {
		return (
			<View style={pageSetup.Plasing}>
				<Text style={text.h1}>Products</Text>
				<TouchableOpacity
					style={buttons.button}
					onPress={() => this.props.navigation.navigate("Product")}
				>	
					<Text style={buttons.buttonText}> Go to Products </Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default HomeScreen;
