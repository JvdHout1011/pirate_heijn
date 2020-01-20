import * as React from 'react';
import { Text, View, TouchableOpacity, YellowBox, TextInput, ScrollView, AsyncStorage } from 'react-native';
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
        this.state = {
            cardNr: '',
            airMilesNr: '',
            docNr: '',
            cookie: ''
        };

        startGetSessionCookie = async () => {
            AsyncStorage.getItem('auth_cookie').then(value => {
                // AsyncStorage returns a promise so adding a callback to get the value
                this.setState({ cookie: value });
                
            });
        };

        getDiscountCardnumber = async () => {
          console.log(this.state.cookie);
            const getBonuskaartNumber = fs.collection('users').where('auth_cookie', '==', this.state.cookie);
            const firstResult = await getBonuskaartNumber.get();
            const docResult = firstResult.docs;

            if (firstResult === '' || firstResult === null || firstResult.empty) {
                console.log('empty result');
            }

            docResult.forEach(doc => {
                let actualCardNr = doc.data().bonuskaart_number;
                this.setState({ cardNr: actualCardNr });
            });
          }
  retrieveDoc = async () => {
    const query = fs.collection('users').where('bonuskaart_number', '==', this.state.cardNr);
    const QuerySnapshot = await query.get();
    QuerySnapshot.forEach(doc => {
      this.setState({ docNr: doc.id });
    });
  };
}
    startSettingInfo = async () => {
      await this.retrieveDoc.then(doc => {
        this.startSetAirMilesCardNumber()
      })
    }
    startSetAirMilesCardNumber = async () => {
        
        let getDiscountCardNumberDoc = fs.collection('users').doc(this.state.docNr);
        let newAirMilesNumber = this.state.airMilesNr;

        const query = await getDiscountCardNumberDoc.update({
            airmileskaart_number: newAirMilesNumber
        });
    };

    getInfo = async () => {
      await   startGetSessionCookie().then(cookie => {
        getDiscountCardnumber();
        console.log(this.state.cardNr)
    })
  }

    UNSAFE_componentWillMount() {
        // dD this instead
     this.getInfo
    }

    render() {
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
                        onChangeText={airMilesNr => this.setState({ airMilesNr })}
                        placeholderTextColor="#838383"
                        selectionColor="#ff7900"
                        clearButtonMode="always"
                        returnKeyType="go"
                        keyboardType="decimal-pad"
                    />
                </View>
                <TouchableOpacity style={buttons.button} onPress={this.startSettingInfo}>
                    <Text style={buttons.buttonText}>Aanpassen</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

export default SettingsScreen;
