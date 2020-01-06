import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
import { styles, buttons, textInput } from './StylesPage'
import Constants from 'expo-constants';
import {fb, fs} from '../../config.js';

// App navigation
import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// You can import from local files
import AssetExample from '../AssetExample';

// or any pure javascript modules available in npm
import { Card,  } from 'react-native-paper';


// Sreen page layout with logic
class DisclamerScreen extends React.Component {
    static navigationOptions = {
      title: 'Welkom',
      
    };
    render() {
      return (
        <View style={{ flex: 0, alignItems: 'center', justifyContent: 'center', padding:10,  textAlign: 'center', margin:24 }}>
          <Text style={styles.text}>
            Welkom bij Pirate Heijn</Text>
          <Text></Text> 
          <Text style={{ textAlign: 'center' }}>
            Om jouw aanbiedingen op te halen moet je inloggen bij Albert Heijn, wij slaan jouw wachtwoord niet op. Wij slaan alleen jouw aanbiedigen op, deze zijn gelinkt aan jouw bonuskaartnummer. 
          </Text>
          <Text></Text>
          <Text  style={{ textAlign: 'center' }}>
            De informatie die we hebben verschilt per type klant. Je kan namelijk op verschillende manieren klant bij ons zijn:
          </Text>
          <Text></Text>
          <Text  style={{ textAlign: 'center' }}>
            1. Je doet boodschappen in de Albert Heijn winkels.
          </Text>
          <Text  style={{ textAlign: 'center' }}>
            2. Je hebt een profiel op ah.nl, of maakt gebruik van de website en Albert Heijn app. 
          </Text>
          <Text  style={{ textAlign: 'center' }}>
            3. Je hebt een Persoonlijke Bonuskaart.
          </Text>
          <Text></Text>
          <TouchableOpacity
         style={buttons.button}
         onPress={() => this.props.navigation.navigate('LogIn')}
       >
         <Text style={buttons.buttonText}> Inloggen bij AH→  </Text>
       </TouchableOpacity>
         
        </View>
      );
    }
}
  



export default DisclamerScreen