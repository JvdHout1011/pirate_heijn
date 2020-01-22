import * as React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, AsyncStorage, StatusBar } from 'react-native';
import { buttons, pageSetup, text } from './StylesPage';
import * as Haptics from 'expo-haptics';

// import AsyncStorage from '@react-native-community/async-storage'
import { fb, fs } from "../../config.js";

// Screen page layout with logic
export default class DisclamerScreen extends React.Component {
    static navigationOptions = {
        title: 'Welkom'
    };

    constructor() {
        super();
        this.state = {
            cookie: 'abc',
            authenticated: 0
        };
    }

    startGetSessionCookie = async () => {
        // AsyncStorage returns a promise so adding a callback to get the value.
        AsyncStorage.getItem('auth_cookie').then(value => {
            this.setState({ cookie: value });
            // Setting the value in Text.
            this.startCheckForExistingUser();
        });
    };

    setSomething = async () => {
        const key = await AsyncStorage.getItem('auth_cookie').then(key => {
            if (key == null || str.length <= 30) {
              
                console.log('false');
                this.startGetSessionCookie();
            }
        });
    };

    startCheckForExistingUser = async () => {
        const checkForCookie = fs.collection('users').where('auth_cookie', '==', this.state.cookie);
        const result = await checkForCookie.get().then(async (querySnapshot) => {
            if (querySnapshot.empty) {
                return;
            } else {
                this.setState({ authenticated: 1 });
                this.checkForAuthenticated();
                await AsyncStorage.setItem('loggedInAlready', true)
            };
        });
    };

    checkForAuthenticated = async () => {
        if (!this.state.authenticated) {
            await  AsyncStorage.setItem('LoggedInAlready', false).then(async () =>{
            this.props.navigation.navigate('LogIn');
            return;
            })
        };
        await  AsyncStorage.setItem('LoggedInAlready', true).then(() =>{
        this.props.navigation.navigate('Home');
            })
    };

    UNSAFE_componentWillMount() {
        // do this instead
        this.setSomething();
    };

    render() {
        return (
            <React.Fragment>
                <StatusBar barStyle="light-content"/>
                <ScrollView style={pageSetup.Placing}>
                    <View
                        style={{
                            flexDirection: 'row'
                        }}>
                        <Text style={text.h1}>Welkom bij {'\n'}</Text>
                        <Image
                            source={require('../../assets/icons/PirateHeinWordmark.png')}
                            fadeDuration={0}
                            style={{
                                height: 48,
                                width: 192,
                                marginTop: -6,
                                marginLeft: -4
                            }}
                        />
                    </View>
                    <Text style={text.p1}>
                        Met Pirate Heijn kan je nog meer Bonus voordeel krijgen door jouw aanbiedigen te
                        delen: één voor allen, allen voor één.
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
                        Om je aanbiedingen op te halen moet je ingelogd zijn bij Albert Heijn. Jouw
                        persoonlijke gegevens worden niet door Pirate Heijn verzameld. Alleen jouw
                        persoonlijke aanbiedingen, gelinkt aan jouw Bonuskaartnummer, worden opgeslagen bij
                        Pirate Heijn.
                    </Text>

                    <Text style={text.p4}>Pirate Heijn is geen onderdeel van Albert Heijn.</Text>

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
{/*             
                    dodge button for development
                    <TouchableOpacity
                        style={buttons.button2}
                        onPress={() => this.props.navigation.navigate('Home')}>
                        <Image
                            source={require('../../assets/icons/ShieldLock.png')}
                            fadeDuration={0}
                            style={buttons.buttonImage}
                        />
                        <Text style={buttons.buttonText}> Bypass login → </Text>
                    </TouchableOpacity> */}
                </ScrollView>
            </React.Fragment>
        );
    };
};
