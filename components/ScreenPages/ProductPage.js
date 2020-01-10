import * as React from "react";
import {
	Text,
	View,
	StyleSheet,
	Button,
	TextInput,
	TouchableOpacity,
	Image,
	ScrollView,
} from "react-native";
import {
	styles,
	buttons,
	textInput,
	image,
	productView,
	pageSetup,
	text,
} from "./StylesPage";
import Product from "./Element/productViewComponent";
import { fb, fs } from "../../config.js";

import ListRow from "./Element/ListRow-start";

import { FlatList, FlatGrid } from "react-native-gesture-handler";

class ProductScreen extends React.Component {
	static navigationOptions = {
		title: "Products",
	};

	constructor(props) {
		super(props);

		this.state = {
			people: [],
		};
	}

	handleAdd = async () => {
		try {
			const res = await fetch("https://stijndv.com/S4D/api.json");
			const result = await res.json();
			this.setState({
				people: [...this.state.people, result.results[0]],
			});
		} catch (err) {
			alert(JSON.stringify(err));
		}
	};

	handleRemove = index => {
		const start = this.state.people.slice(0, index);
		const end = this.state.people.slice(index + 1);
		this.setState({
			people: start.concat(end),
		});
	};

	renderPhotosFlatListCell = ({ item }) => {
		return <Product />;
	};

	render() {
		return (
			<React.Fragment>
				<View style={pageSetup.Plasing}>
					<Text style={text.h1}>Search</Text>
					<TouchableOpacity
						style={buttons.button}
						onPress={() => this.props.navigation.navigate("Search")}
					>
						<Text style={buttons.buttonText}> Go to Search </Text>
					</TouchableOpacity>
				</View>
				<View style={{flex: 1}}>
					<FlatList
						style={{ marginTop: 20 }}
						data={this.state.people}
						renderItem={({ item, index }) => (
							<ListRow
								{...item}
								index={index}
								onRemove={() => this.handleRemove(index)}
							/>
						)}
						keyExtractor={item => item.login.username}
						ListHeaderComponent={() => (
							<Button onPress={this.handleAdd} title="Add Product" />
						)}
					/>
				</View>
			</React.Fragment>
		);
	}
}

export default ProductScreen;
