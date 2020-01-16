import * as React from "react";
import {Text, View, TouchableOpacity} from "react-native";
import {buttons, pageSetup, text} from "./StylesPage";

class SettingsScreen extends React.Component {
	static navigationOptions = {
		title: "Account",
	};

	render() {
		return (
			<View style={pageSetup.Placing}>
				<Text style={text.h1}>Deze pagina wordt niet gebruikt!</Text>
				<Text style={
					{
						textAlign: 'left',
						padding: 25
					}}>
					Hier valt niks te zoeken op het moment, dit is een dummie page!
					Deze app is bedoeld als prototype.
					</Text>
				
				<TouchableOpacity
					style={buttons.button}
					onPress={() => this.props.navigation.navigate("Home")}
				>
					<Text style={buttons.buttonText}>Terug naar Pirate Heijn</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default SettingsScreen;