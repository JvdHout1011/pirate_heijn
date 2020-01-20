import * as React from 'react';
import { Text, View, TouchableOpacity, YellowBox, TextInput, ScrollView, AsyncStorage, Image } from 'react-native';
import { WebView } from 'react-native-webview';
import { account, buttons, text, styles } from './StylesPage';
import { fs } from '../../config';
import Barcode from './packages/react-native-barcode-builder';

class SettingsScreen extends React.Component {
    static navigationOptions = {
        title: 'Account'
    };

    constructor(props) {
        super(props);
        console.ignoredYellowBox = ['Setting a timer'];
        YellowBox.ignoreWarnings(['Setting a timer']);
    };

    state = {
        cardNr: '',
        airMilesNr: '',
        cookie: '',
        webViewUrl: 'https://www.ah.nl/mijn/uitloggen',
        showWebView: false
    };

    static navigationOptions = ({navigation}) => {
        return {
            gesturesEnabled: false,
            title: 'Pirate Heijn',
            headerLeft: null,
            headerRight: () => (
                <TouchableOpacity style={buttons.navButton} onPress={navigation.getParam('logOut')}>
                    <Text style={buttons.buttonText}>Uitloggen</Text>
                </TouchableOpacity>
            )
        };
    };

    _logOut = () => {
        console.log("dit wordt uitgevoerd")
        this.setState({showWebView: true})
    };

    startGetCookieFromAsync = async () => {
        console.log( "start ")
        AsyncStorage.getItem('auth_cookie').then(asyncCookie => {
            this.setState({cookie: asyncCookie})
            console.log(asyncCookie)
            AsyncStorage.getItem('bonuskaart').then(asyncCardNumber => {
                this.setState({cardNr: asyncCardNumber})
                console.log(asyncCardNumber)
            });
        });
    };
      
    startSetAirMiles = async () => {
        const setAirMilesQuery =  fs.collection('users').doc(this.state.cardNr)
        const result = await setAirMilesQuery.update({
            airmiles_number: this.state.airMilesNr
        });
    };

    UNSAFE_componentWillMount() {
        this.startGetCookieFromAsync()
        this.props.navigation.setParams({logOut: this._logOut});
    };

    render() {
        if (!this.state.showWebView) {
            return (
                <ScrollView style={account.container}>
                    <Text style={[text.h1, text.textAlignCenter]}>Jouw bonuskaart</Text>
                    <View style={account.bonuskaartStyling}>
                        <View
                            style={{
                                maxWidth: '100%',
                                flex: 1,
                                backgroundColor: '#FFF',
                                padding: 10,
                                borderRadius: 10
                            }}>
                            <Barcode value="2620682025269" format="EAN13" flat />
                            <Text style={text.monospace}>{this.state.cardNr}</Text>
                        </View>
                    </View>
                    <Text style={[text.h1, text.textAlignCenter, account.extraMargin]}>Jouw Air Miles kaart</Text>
                    <View style={account.inputPlacement}>
                        <TextInput
                            placeholder={'Vul Air Miles kaartnummer in...'}
                            style={account.input}
                            onChangeText={airMilesNr => this.setState({airMilesNr})}
                            placeholderTextColor="#838383"
                            selectionColor="#ff7900"
                            clearButtonMode="always"
                            returnKeyType="go"
                            keyboardType="decimal-pad"
                        />
                    </View>
                    <TouchableOpacity style={buttons.button} onPress={this.startSetAirMiles}>
                        <Text style={buttons.buttonText}>Aanpassen</Text>
                    </TouchableOpacity>
                </ScrollView>
            );
        } else if (this.state.showWebView) {
            return (
                <WebView
                    source={{uri: this.state.webViewUrl}}
                    style={{flex: 1}}
                    javaScriptEnabled
                    domStorageEnabled
                    thirdPartyCookiesEnabled
                    sharedCookiesEnabled
                    onLoadEnd={() => {
                        this.props.navigation.navigate('Disclamer');
                    }}
                />
            );
        };
    };
};


export default SettingsScreen;
