import * as React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { buttons, pageSetup, text } from "./StylesPage";
import AsyncStorage from '@react-native-community/async-storage'
import { fb, fs } from "../../config.js";

startGetSessionCookie = async () => {
AsyncStorage.getItem('any_key_here').then(value =>
	//AsyncStorage returns a promise so adding a callback to get the value
	this.setState({ getValue: value })
	
	//Setting the value in Text
);
}

startCheckForExistingUser = async () => {
	const checkForCookie = fs.collection('users').where('auth_cookie', "==", this.state.auth_cookie)
	const result = checkForCookie.get();
	const docResult = result.docs;
            if (result === "" || firstResult === null ) {
                console.log("empty result");
            }
            //console.log("##### ", docResult.data());
            docResult.forEach(doc => {

              let actualCardNr = doc.data().bonuskaart_number;
              this.setState({cardNr: actualCardNr});
              //console.log("#### ", doc.discountCardNumber , " ####")
            });
            return firstResult;
}
// Screen page layout with logic
export default class DisclamerScreen extends React.Component {
	static navigationOptions = {
		title: "Welkom",
		auth_cookie: ''
	};


	
	render() {
		startGetSessionCookie();
		return (
			<React.Fragment>
				<View style={pageSetup.Plasing}>
						<Text style={text.h1}>Welkom bij Pirate Heijn {"\n"}</Text>
						<Text style={{ textAlign: "center" }}>
							Met Pirate Heijn kan je nog meer Bonus voordeel krijgen door jouw
							aanbiedigen te delen: een voor allen, allen voor een.
							{"\n"}
							{"\n"}
							Zo werkt het:
							{"\n"}
							{"\n"}
							1. Log in met jouw AH account
							{"\n"}
							{"\n"}
							2. Kies welke bonus aanbiedingen je wilt gebruiken
							{"\n"}
							{"\n"}
							3. Scan de Bonus Kaarten bij de kassa
							{"\n"}
							{"\n"}
						</Text>

						<Text style={text.h2}>Privacy</Text>
						<Text style={{ textAlign: "center" }}>
							Om jouw aanbiedingen op te halen moet je inloggen bij Albert
							Heijn, wij slaan jouw wachtwoord niet op. Wij slaan alleen jouw
							aanbiedigen op, deze zijn gelinkt aan jouw bonuskaartnummer.
							{"\n"}
							{"\n"}
							Pirate Heijn is geen onderdeel van Albert Heijn
						</Text>

						<TouchableOpacity
							style={buttons.button}
							onPress={() => this.props.navigation.navigate("LogIn")}
						>
							<Image
								source={require("../../assets/icons/ShieldLock.png")}
								fadeDuration={0}
								style={buttons.buttonImage}
							/>
							<Text style={buttons.buttonText}> Inloggen bij AH → </Text>
						</TouchableOpacity>
					</View>
			</React.Fragment>
		);
	}
}
