import * as React from "react";
import {
	Text,
	View,
	StyleSheet,
	Button,
	TextInput,
	TouchableOpacity,
} from "react-native";
import { styles, buttons, textInput } from "./StylesPage";
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
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				<Text style={styles.title}>AH</Text>
				<Text style={styles.title}>User name</Text>
				<TextInput style={textInput.input} placeholder="User name..." />

				<Text style={styles.title}>Password</Text>
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
