import * as React from "react";
import {Text, View, TouchableOpacity, YellowBox, TextInput, StyleSheet} from "react-native";
import {account} from "./StylesPage";
import {fs} from "../../config";

class SettingsScreen extends React.Component {
	static navigationOptions = {
		title: "Account",
	};

	constructor(props) {
		super(props);
		console.ignoredYellowBox =[ "Setting a timer"];
		YellowBox.ignoreWarnings([ "Setting a timer"]);
		this.state = {
			cardNr: "",
			airMilesNr: "",
			docNr: "",
			cookie: ""
		};

		startGetSessionCookie = async () => {
			AsyncStorage.getItem('auth_cookie').then(value => {
				//AsyncStorage returns a promise so adding a callback to get the value
				this.setState({ cookie: value })
			});
		};

		getDiscountCardnumber = async () => {
			const getBonuskaartNumber = fs.collection("users").where("id", "==", 1);
			const firstResult = await getBonuskaartNumber.get();
			const docResult = firstResult.docs;
			if (firstResult === "" || firstResult === null || firstResult.empty ) {
				console.log("empty result");
			}

			docResult.forEach(doc => {
				let actualCardNr = doc.data().bonuskaart_number;
				this.setState({cardNr: actualCardNr});
			});

			return firstResult;
		};

		getDiscountCardnumber().then((actualCardNr) => {});
	};

	retrieveDoc = async () => {
		const query = fs.collection("users").where("id", "==", userID);
		const QuerySnapshot = await query.get();
		QuerySnapshot.forEach((doc) => {
			console.log(doc.id);
			this.setState({docNr: doc.id})
		});
	};

	startSetAirMilesCardNumber = async ()  => {
		this.retrieveDoc();
		let getDiscountCardNumberDoc = fs.collection("users").doc(this.state.docNr);
		let newAirMilesNumber = this.state.airMilesNr;

		const query = await getDiscountCardNumberDoc.update({
			airmileskaart_number: newAirMilesNumber
		});
	};

	UNSAFE_componentWillMount() { // do this instead
		startGetSessionCookie()
	};

	render() {
		return (
			<View style={account.container}>
				<Text style={account.paragraph}>
					Je bonuskaartnummer is: {this.state.cardNr};
				</Text>
				<Text style={account.text}>Vul hier je Air Miles kaartnummer in.</Text>
				<TextInput
					placeholder={"Air Miles card number"}
					style={account.input}
					onChangeText={(airMilesNr) => this.setState({airMilesNr})}
				/>
				<TouchableOpacity
					style={account.opacity}
					onPress={this.startSetAirMilesCardNumber()}
				>
					<Text style={account.opacitPlaceholder}>AANPASSEN</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default SettingsScreen;