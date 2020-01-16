import * as React from "react";
import { Text, View, TouchableOpacity, Image, AsyncStorage } from "react-native";
import { buttons, pageSetup, text } from "./StylesPage";
// import AsyncStorage from '@react-native-community/async-storage'
import { fb, fs } from "../../config.js";


// Screen page layout with logic
export default class DisclamerScreen extends React.Component {
	static navigationOptions = {
		title: "Welkom",
		
	};
	constructor() {
     	super()
		this.state = {
			cookie: 'abc',
			authenticated: 0,

	}
		
	}

	startGetSessionCookie = async () => {
		console.log("start functie")
	AsyncStorage.getItem('auth_cookie').then(value => {
		//AsyncStorage returns a promise so adding a callback to get the value
	
		console.log("test123")
		
		
		this.setState({ cookie: value })
		
		this.startCheckForExistingUser()
		//Setting the value in Text
	});
	
	console.log("staat in async")
	}
	
	setSomething = async () => {
		console.log("setSomething starts")
		const key = await AsyncStorage.getItem('auth_cookie').then(key => {
			console.log("heeft de auth cookie");
			if(true){
				console.log("afgerond")
				AsyncStorage.setItem('auth_cookie', '4N2s2aQWN7yRwc1en1G3j3uWCvr3ZOeY');
				this.startGetSessionCookie()
			}
		})
		
	}
	startCheckForExistingUser = async () => {
		console.log("startCheckForExistingUser starts")
		const checkForCookie = fs.collection('users').where('auth_cookie', "==", this.state.cookie)
		const result = await checkForCookie.get().then(querySnapshot => {
			if (querySnapshot.empty) {
				console.log('no documents found');
				return
			} else {
		
			console.log("this went well");
			this.setState({ authenticated: 1 });
			
			this.checkForAuthenticated()
		}
		});
	}
	

	
	checkForAuthenticated = () => {
		if(!this.state.authenticated){
			this.props.navigation.navigate("LogIn")
			console.log("user does not exist")
		return
		}
		this.props.navigation.navigate("Home")
		console.log("user exists")
		return
	}
	
	UNSAFE_componentWillMount() { // do this instead

		this.setSomething()
		
		}
	render() {
			
		
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
					<TouchableOpacity
							style={buttons.button}
							onPress={() => this.checkForAuthenticated}
						>
							<Image
								source={require("../../assets/icons/ShieldLock.png")}
								fadeDuration={0}
								style={buttons.buttonImage}
							/>
							<Text style={buttons.buttonText}> Bypass login → </Text>
						</TouchableOpacity>
					</View>
			</React.Fragment>
		);
	}
}
