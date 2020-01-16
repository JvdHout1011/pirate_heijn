import * as React from 'react';
import {Text, View, StyleSheet, TextInput, YellowBox, Alert} from 'react-native';
import Constants from 'expo-constants';
import {fb, fs} from './config.js';
import { TouchableOpacity } from 'react-native-gesture-handler';


const userID = 1;

export default class App extends React.Component {
    constructor(props) {
        super(props);
        console.ignoredYellowBox =[ "Setting a timer"]
        YellowBox.ignoreWarnings([ "Setting a timer"])
        this.state = {
            cardNr: "test", 
            airMilesNr: "",
            docNr: "",
            cookie: ""
        };

        startGetSessionCookie = async () => {
          console.log("start functie")
        AsyncStorage.getItem('auth_cookie').then(value => {
          //AsyncStorage returns a promise so adding a callback to get the value
        
          console.log("test123")
          
          
          this.setState({ cookie: value })
          
         
         
        });
      }

     
        
        getDiscountCardnumber = async () => {
            const getBonuscardNumber = fs.collection("users").where("id", "==", 1);
            const firstResult = await getBonuscardNumber.get();
            const docResult = firstResult.docs;
            if (firstResult === "" || firstResult === null ) {
                console.log("empty result");
            }
            //console.log("##### ", docResult.data());
            docResult.forEach(doc => {

              let actualCardNr = doc.data().bonuskaart_number;
              this.setState({cardNr: actualCardNr});
              //console.log("#### ", doc.discountCardNumber , " ####")
            });
            return firstResult;
            
        };
         
        
        
        getDiscountCardnumber().then((actualCardNr) => {          
            
            
        })
    };
    
    retrieveDoc = async () => {
    const query = fs.collection("users").where("id", "==", userID)
    const QuerySnapshot = await query.get();
    QuerySnapshot.forEach((doc) => {
      console.log(doc.id)
     this.setState({docNr: doc.id})
              })        
   }
 

    testFunction = async ()  => {
     
      console.log("asdadd") 
      this.retrieveDoc()
      //if(this.state.docNr === "" || this.state.docNr == undefined || this.state.docNr == null || this.state.docNr.length < 6) {
      //  Alert.alert("Vul alsjeblieft een geldige waarde in.");
      //  return;
     // }
       let Yada = fs.collection("users").doc(this.state.docNr);
       let newAirMilesNumber = this.state.airMilesNr;
       
      const query = await Yada.update({
        airmileskaart_number: newAirMilesNumber
      });    
     }


     UNSAFE_componentWillMount() { // do this instead

      this.startGetSessionCookie()
      
      }
      
    render() {
    
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    Je bonuskaartnummer is: {this.state.cardNr};
                </Text>
                <Text style={styles.text}>Vul hier je Air-Miles kaartnummer in.</Text>
                <TextInput placeholder={"AirMiles card number"} style={styles.input}onChangeText={(airMilesNr) => this.setState({airMilesNr})}/>
                <TouchableOpacity style={styles.opacity} onPress={this.testFunction}>
                  <Text style={styles.opacitPlaceholder}>AANPASSEN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
        textAlign: "center"
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    opacity: {
      backgroundColor: "green",
      height: 40,
      width: "100%",
      marginTop: 20
      },
    input: {
      textAlign: "center",
      margin: 10
    },
    text: { 
      textAlign: "center",
      
    },
    opacitPlaceholder: {
      textAlign: "center",
      fontSize: 16,
      color: "white",
      lineHeight: 40
    }
});