import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  AsyncStorage
} from 'react-native';
import { buttons, pageSetup, text } from './StylesPage';
import * as Haptics from 'expo-haptics';

// import AsyncStorage from '@react-native-community/async-storage'
// import { fb, fs } from "../../config.js";

// Screen page layout with logic
export default class DisclamerScreen extends React.Component {
	static navigationOptions = {
		title: "Welkom",
  }
  
	constructor() {
    super()
		this.state = {
			cookie: 'abc',
			authenticated: 0
	  }	
	}

	startGetSessionCookie = async () => {
    console.log("start functie")
    // AsyncStorage returns a promise so adding a callback to get the value.
	  AsyncStorage.getItem('auth_cookie').then(value => {
		  console.log("test123")
		
      this.setState({ cookie: value })
      // Setting the value in Text.
		  this.startCheckForExistingUser()
	  })
	  console.log("staat in async")
	}
	
	setSomething = async () => {
		console.log("setSomething starts")
		const key = await AsyncStorage.getItem('auth_cookie').then(key => {
			console.log("heeft de auth cookie")
			if(false) {
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
				console.log("no documents found");
				return
			} else {	
  			console.log("this went well");
	  		this.setState({ authenticated: 1 })
			  this.checkForAuthenticated()
		  }
		})
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
        <ScrollView style={pageSetup.Placing}>
          <Text style={text.h1}>Welkom bij Pirate Heijn {'\n'}</Text>
          <Text style={text.p1}>
            Met Pirate Heijn kan je nog meer Bonus voordeel krijgen door jouw
            aanbiedigen te delen: één voor allen, allen voor één.
            {'\n \n'}
            Zo werkt het:
            {'\n \n'}
            <Text style={text.p3}>1. </Text>
            <Text style={text.p2}>Log in met je AH account.</Text>
            {'\n \n'}
            <Text style={text.p3}>2. </Text>
            <Text style={text.p2}>Kies je aanbiedingen.</Text>
            {'\n \n'}
            <Text style={text.p3}>3. </Text>
            <Text style={text.p2}>Scan je bonus bij de zelfscankassa.</Text>
          </Text>

          <Text style={text.h2}>Privacy</Text>
          <Text style={text.p1}>
            Om je aanbiedingen op te halen moet je ingelogd zijn bij Albert
            Heijn. Jouw persoonlijke gegevens worden niet door Pirate Heijn
            verzameld. Alleen jouw persoonlijke aanbiedingen, gelinkt aan jouw
            Bonuskaartnummer, worden opgeslagen bij Pirate Heijn.
          </Text>
          <Text style={text.p4}>
            Pirate Heijn is geen onderdeel van Albert Heijn.
          </Text>

          <TouchableOpacity
            onPressOut={() => {
              Haptics.selectionAsync();
            }}
            style={buttons.button}
            onPress={() => this.props.navigation.navigate('LogIn')}>
            <Image
              source={require('../../assets/icons/AH-Inlog.png')}
              fadeDuration={0}
              style={buttons.buttonImage}
            />
            <Text style={buttons.buttonText}> Inloggen bij AH → </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={buttons.button}
            onPress={() => this.props.navigation.navigate('LogInScreen')}>
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
