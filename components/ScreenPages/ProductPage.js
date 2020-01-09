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
import { Product } from "./Element/productViewComponent";
import Constants from "expo-constants";
import { fb, fs } from "../../config.js";

// App navigation
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// Sreen page layout with logic
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
	render() {
		return (
			<ScrollView>
				<View style={pageSetup.Plasing}>
					<Text style={text.h1}>Search</Text>
					<TouchableOpacity
						style={buttons.button}
						onPress={() => this.props.navigation.navigate("Search")}
					>
						<Text style={buttons.buttonText}> Go to Search </Text>
					</TouchableOpacity>

					<View style={productView.boxSize}>
						<View
							style={{
								flex: 1,
								flexDirection: "row",
								flexWrap: "wrap",
								justifyContent: "space-between",
								alignItems: "flex-start",
							}}
						>
							<Image
								style={image.size}
								source={{
									uri: "https://stijndv.com/images/PirateHeinWhite.png",
								}}
							/>
						</View>

						<View
							style={{
								flex: 2,
								flexDirection: "column",
								padding: 10,
								alignContent: "flex-end",
							}}
						>
							<Text>
								Hier in komt alle infotmatie van het product!{"\n"}
								{"\n"} hee
							</Text>
							<View
								style={{
									alignItems: "flex-end",
									flexDirection: "column-reverse",
								}}
							>
								<Text style={productView.productPrice}>€5,-</Text>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		);
	}
}

export default ProductScreen;
