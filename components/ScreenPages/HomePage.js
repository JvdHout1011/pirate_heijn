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

	//ik weet niet wat hier gebeurt?
	UNSAFE_componentWillMount() {
		this.props.navigation.setParams({ goToSettings: this._goToSettings });
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
