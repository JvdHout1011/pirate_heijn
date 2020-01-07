import * as React from "react";
import { fb, fs } from "../../../config.js";
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	Image,
} from "react-native";

export default class SearchBar extends React.Component {
	state = {
		text: "",
		products: [],
	};

	searchForItem = async () => {
		const searchTerm = this.state.text;
		const getSearchList = fs
			.collection("products")
			.where("article_name", "==", searchTerm);

		const querySnapshot = await getSearchList.get();
		const products = [];
		querySnapshot.forEach(doc => products.push(doc.data()));
		return products;
	};

	// Makes sure it links through to the searchForItem function when button is pressed, empties text input after
	buttonPressHandler = async () => {
		const item = this.state.text;

		const products = await this.searchForItem();
		this.setState({
			text: "",
			products,
		});

		// Can't perform an empty search
		if (item === "" || item === null) {
			return;
		}

		// When item can't be found
		if (!this.state.products.length) {
			Alert.alert(
				"Oeps!",
				"Dit product is vandaag niet in de bonus. Probeer het maandag nog eens!",
				[
					{
						text: "Helaas...",
						onPress: () => console.log("Alert button pressed"),
					},
				],
			);
		}
	};
	
	render() {
		return (
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder="Zoeken naar..."
					onChangeText={text => this.setState({ text })}
					value={this.state.text}
				/>
				<View style={styles.buttonContainer}>
					<TouchableOpacity
						style={styles.button}
						color="#00ade6"
						onPress={this.buttonPressHandler}
					>
						{/*<Text style={{color: '#FFFFFF', fontSize: 20, letterSpacing: 3}}>ZOEK</Text>*/}
						<Image
							style={styles.searchIcon}
							source={require("../../../assets/icons/searchIcon.png")}
						/>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	inputContainer: {},
	input: {},
	buttonContainer: {},
	button: {},
	searchIcon: {},
});
