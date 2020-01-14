import * as React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { buttons, pageSetup, text } from "./StylesPage";
// import AsyncStorage from '@react-native-community/async-storage'
import { fb, fs } from "../../config.js";
import { ScrollView } from "react-native-gesture-handler";

// startGetSessionCookie = async () => {
// AsyncStorage.getItem('auth_cookie').then(value =>
// 	//AsyncStorage returns a promise so adding a callback to get the value
// 	this.setState({ auth_cookie: auth_cookie })
	
// 	//Setting the value in Text
// );
// }

// startCheckForExistingUser = async () => {
// 	const checkForCookie = fs.collection('users').where('auth_cookie', "==", this.state.auth_cookie)
// 	const result = await checkForCookie.get().then(function(querySnapshot) {
// 		if (querySnapshot.empty) {
// 			console.log('no documents found');
// 		} else {
// 			this.state.authenticated = true;
// 		}
// 	});
// }

// startCompleteCheck = async () => {
// 	await startGetSessionCookie().then(function() {
// 		startCheckForExistingUser();
// 	})
// }

checkForAuthenticated = () => {
	while(!this.state.authenticated){
		this.props.navigation.navigate("LogIn")
	}
	this.props.navigation.navigate("Home")
}

// Screen page layout with logic
export default class DisclamerScreen extends React.Component {
	static navigationOptions = {
		title: "",
		auth_cookie: '4N2s2aQWN7yRwc1en1G3j3uWCvr3ZOeY',
		authenticated: false
	};

	render() {
		// startGetSessionCookie();
		return (
      <React.Fragment>
        <ScrollView style={pageSetup.Placing}>
          <Text style={text.h1}>Welkom bij Pirate Heijn {'\n'}</Text>
          <Text style={text.p1}>
            Met Pirate Heijn kan je nog meer Bonus voordeel krijgen door jouw
            aanbiedigen te delen: één voor allen, allen voor één.
            {'\n \n'}
            Zo werkt het:
            {'\n \n'}
            <Text style={text.p3}>1.  </Text><Text style={text.p2}>Log in met je AH account.</Text>
            {'\n \n'}
            <Text style={text.p3}>2.  </Text><Text style={text.p2}>Kies je bonusaanbieding.</Text>
            {'\n \n'}
            <Text style={text.p3}>3.  </Text><Text style={text.p2}>Scan de bonuskaart bij de kassa.</Text>
          </Text>

          <Text style={text.h2}>Privacy</Text>
          <Text style={text.p1}>
            Om je aanbiedingen op te halen moet je ingelogd zijn bij Albert Heijn.
            Je gegevens worden niet opgeslagen. Alleen de aanbiedingen, die gelinkt zijn aan je bonuskaartnummer, worden opgeslagen.
          </Text>
          <Text style={text.p4}>Pirate Heijn is geen onderdeel van Albert Heijn.</Text>

          <TouchableOpacity
            style={buttons.button}
            onPress={() => this.props.navigation.navigate('LogIn')}>
            <Image
              source={require('../../assets/icons/ShieldLock.png')}
              fadeDuration={0}
              style={buttons.buttonImage}
            />
            <Text style={buttons.buttonText}> Inloggen bij AH → </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={buttons.button}
            onPress={() => this.checkForAuthenticated}>
            <Image
              source={require('../../assets/icons/ShieldLock.png')}
              fadeDuration={0}
              style={buttons.buttonImage}
            />
            <Text style={buttons.buttonText}> Check login → </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={buttons.button}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Image
              source={require('../../assets/icons/ShieldLock.png')}
              fadeDuration={0}
              style={buttons.buttonImage}
            />
            <Text style={buttons.buttonText}> Bypass login → </Text>
          </TouchableOpacity>
        </ScrollView>
      </React.Fragment>
    );
	}
}
