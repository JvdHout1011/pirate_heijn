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
import { styles, buttons, textInput } from "./StylesPage";

// Sreen page layout with logic
class DisclamerScreen extends React.Component {
	static navigationOptions = {
		title: "Welkom",
  };
  
	render() {
		return (
			<View
				style={{
					flex: 0,
					alignItems: "center",
					justifyContent: "center",
					padding: 10,
					textAlign: "center",
					margin: 24,
				}}
			>
				<Text style={styles.h1}>Welkom bij Pirate Heijn</Text>
				<Text></Text>
				<Text style={{ textAlign: "center" }}>
					Met Pirate Heijn kan je nog meer Bonus voordeel krijgen door jouw
					aanbiedigen te delen: een voor allen, allen voor een.
				</Text>
				<Text></Text>
				<Text style={{ textAlign: "center" }}>Zo werkt het:</Text>
				<Text style={{ textAlign: "center", paddingTop: "2%" }}>
					1. Log in met jouw AH account
				</Text>
				<Text style={{ textAlign: "center", paddingTop: "5%" }}>
					2. Kies welke bonus aanbiedingen je wilt gebruiken
				</Text>
				<Text style={{ textAlign: "center", paddingTop: "5%" }}>
					3. Scan de Bonus Kaarten bij de kassa
				</Text>
				<Text></Text>
				<Text style={styles.h2}>Privacy</Text>
				<Text style={{ textAlign: "center" }}>
					Om jouw aanbiedingen op te halen moet je inloggen bij Albert Heijn,
					wij slaan jouw wachtwoord niet op. Wij slaan alleen jouw aanbiedigen
					op, deze zijn gelinkt aan jouw bonuskaartnummer.
				</Text>
				<Text></Text>
				<Text style={{ textAlign: "center" }}>
					Pirate Heijn is geen onderdeel van Albert Heijn
				</Text>
				<TouchableOpacity
					style={buttons.button}
					onPress={() => this.props.navigation.navigate("LogIn")}
				>
					<Image
						source={require("../../assets/icons/ShieldLock.png")}
						fadeDuration={0}
						style={{ width: 20, height: 20, flex: 0, flexDirection: "column" }}
					/>
					<Text style={buttons.buttonText}> Inloggen bij AH → </Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default DisclamerScreen;
