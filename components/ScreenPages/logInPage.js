import * as React from "react";
import {
	Text,
	View,
	StyleSheet,
	Button,
	TextInput,
	TouchableOpacity,
} from "react-native";
import { styles, buttons, textInput, pageSetup, text } from "./StylesPage";
import { fb, fs } from "../../config.js";

// App navigation
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// Screen page layout with logic
class LogInScreen extends React.Component {
	static navigationOptions = {
		title: "Login",
	};
	render() {
		return (
			<View style={pageSetup.Plasing}>
				<Text style={text.h1}>AH User name</Text>
				<TextInput style={textInput.input} placeholder="User name..." />

				<Text style={text.h1}>Password</Text>
				<TextInput style={textInput.input} placeholder="Password..." />
				<TouchableOpacity
					style={buttons.button}
					onPress={() => this.props.navigation.navigate("Home")}
				>
					<Text style={buttons.buttonText}> Login </Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default LogInScreen;
