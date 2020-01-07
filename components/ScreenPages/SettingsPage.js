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
class SettingsScreen extends React.Component {
	static navigationOptions = {
		title: "Settings",
	};
	render() {
		return (
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				<Text style={styles.alertText}>This page is out of use!</Text>
				<TouchableOpacity
					style={buttons.button}
					onPress={() => this.props.navigation.navigate("Home")}
				>
					<Text style={buttons.buttonText}> Go to Home </Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default SettingsScreen;
