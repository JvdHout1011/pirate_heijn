import * as React from "react";
import {fb, fs} from "../../config.js";
import {Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList, Alert} from "react-native";
import {Ionicons} from './../../node_modules/@expo/vector-icons';
import {styles, buttons, textInput} from "./StylesPage";
import {InstantSearch, Hits, SearchBox} from "react-instantsearch-dom";
import algoliasearch from '../../node_modules/algoliasearch/lite';

const searchClient = algoliasearch('UX2UMAXP16', '8b0c42bbfc187123f977c1aa2ffffb42');

// Screen page layout with logic
export default class SearchScreen extends React.Component {
	static navigationOptions = {
		title: "Zoeken",
	};

	state = {
		text: "",
		products: [],
	};

	algoliaSearchBar = () => (
		<InstantSearch searchClient={searchClient} indexName="demo_ecommerce" style={styles.algoliaStyle}>
			<SearchBox />
			<Hits />
		</InstantSearch>
	);

	searchForItem = async () => {
		const searchTerm = this.state.text;
		const getSearchList = fs.collection("products").where("article_name", "==", searchTerm/*.toLowerCase()*/);
		const searchForTagList = fs.collection("products").where("tag", "==", searchTerm/*.toLowerCase()*/);

		let products = [];

		// Add items based on item title
		const querySnapshot = await getSearchList.get();
		querySnapshot.forEach(doc => products.push(doc.data()));

		// Add items based on tag
		const querySnapshotTags = await searchForTagList.get();
		querySnapshotTags.forEach(doc => products.push(doc.data()));

		// There might be duplicates in the products array, so make it unique
		products = [...new Set(products)];

		return products;
	};

	// Makes sure it links through to the searchForItem function when button is pressed, empties text input after
	buttonPressHandler = async () => {
		const item = this.state.text;
		const products = await this.searchForItem();
		this.setState({
			text: "",
			products
		});

		// Can't perform an empty search
		if (item === "" || item === null) {
			console.log('empty search');
			return
		}

		// When item can't be found
		if (!this.state.products.length) {
			Alert.alert(
				'Oeps!',
				'Dit product is vandaag niet in de bonus. Probeer het maandag nog eens!',
				[
					{
						text: 'Helaas...',
						onPress: () => console.log('Alert button pressed'),
					},
				],
			);
		}
	};

	render () {
		return (
			// Added fragment to put two Views next to each other
			<React.Fragment>
				{/*<View style={localStyles.algoliaStyle}>*/}
				{/*    {this.algoliaSearchBar()}*/}
				{/*</View>*/}
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						placeholder="Zoeken naar..."
						placeholderTextColor="#838383"
						onChangeText={(text) => this.setState({text})}
						value={this.state.text}
					/>
					<View style={styles.buttonContainer}>
						<TouchableOpacity style={styles.button} color="#00ade6" onPress={this.buttonPressHandler}>
							<Ionicons name="ios-search" size={25} color="white"/>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.resultContainer}>
					<Text style={text.h1}>Voor jou in de bonus</Text>
					<FlatList
						data={this.state.products}
						renderItem={({item}) => <Text style={styles.resultText}>{item.article_name}</Text>}
					/>
				</View>
			</React.Fragment>
		);
	}
}

const localStyles = StyleSheet.create({
	algoliaStyle: {
		backgroundColor: '#ff7900',
		width: 40,
		height: 40,
		marginTop: 100
	}
});