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

import { FlatList, FlatGrid } from "react-native-gesture-handler";

class ProductScreen extends React.Component {
	static navigationOptions = {
		title: "Products",
	};
	
	constructor(props) {
		super(props);
		this.state = {
			discount: [],
			image: [],
			name: [],
			price: [],
			dcn: [],
			amount: [],
		};

		//   let discountNumber = 2621134245761
		//   queryProducts = async () => {
		//     const getProducts = fs.collection("products").where("discountCardNumber", "==", discountNumber);
		//     const getProductsResult = getProducts.get();
		//     const productsDocs = getProductsResult.docs;
		//     productDocs.forEach(doc => {
		//       this.setState({
		//         discount: doc.data().article_discount,
		//         image: doc.data().article_image,
		//         name: doc.data().article_name,
		//         price: doc.data().article_price,
		//         dcn: doc.data().bonuskaart_number,
		//         amount: doc.data().weight_or_volume
		//       })
		//     })
		//   }
	}

	renderPhotosFlatListCell = ({ item }) => {
		return <Product/>;
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
				<View style={pageSetup.Plasing}>
					<FlatList renderItem={this.renderPhotosFlatListCell} />
				</View>
			</React.Fragment>
		);
	}
}

export default ProductScreen;
