import * as React from "react";
import { fb, fs } from "../../config.js";
import {
	Text,
	View,
	StyleSheet,
	Button,
	TextInput,
	TouchableOpacity,
	Image,
	FlatList,
	Alert,
} from "react-native";
import { styles, buttons, textInput } from "./StylesPage";
import { Ionicons } from "@expo/vector-icons";
import SearchBar from "./Elements/SearchBar.js";

// Sreen page layout with logic
export default class SearchScreen extends React.Component {
	static navigationOptions = {
		title: "Zoeken",
  };
  
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
			<React.Fragment>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						placeholder="Zoeken naar..."
						placeholderTextColor="#838383"
						onChangeText={text => this.setState({ text })}
						value={this.state.text}
					/>
					<View style={styles.buttonContainer}>
						<TouchableOpacity
							style={styles.button}
							color="#00ade6"
							onPress={this.buttonPressHandler}
						>
							<Image
								source={require("../../assets/icons/searchIcon.png")}
								fadeDuration={0}
								style={{
									width: 25,
									height: 25,
									flex: 0,
									flexDirection: "column",
								}}
							/>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.resultContainer}>
					<Text style={styles.h1}>Voor jou in de bonus</Text>
					<FlatList
						data={this.state.products}
						renderItem={({ item }) => (
							<Text style={styles.resultText}>{item.article_name}</Text>
						)}
					/>
				</View>
			</React.Fragment>
		);
	}
}
