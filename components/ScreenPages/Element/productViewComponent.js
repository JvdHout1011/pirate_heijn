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
import { styles, buttons, textInput, image, productView } from "../StylesPage";
import { fb, fs } from "../../../config.js";
// import { Ionicons} from "./../../../node_modules/@expo/vector-icons";

class Product extends React.Component {
	render() {
		return (
			<TouchableOpacity
				onPress={() => this.props.navigation.navigate("Product")}
			>
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
							style={image.productSize}
							source={{
								uri: "https://stijndv.com/images/PirateHeinWhite.png",
							}}
						/>
					</View>
					<View
						style={{
							flex: 2,
							flexDirection: "column",
							alignContent: "flex-end",
						}}
					>
						<Text style={text.h3}>Geen product beschikbaar</Text>
						<Text>Probeer iets anders te zoeken</Text>
						<View
							style={{
								alignItems: "flex-end",
								flexDirection: "column-reverse",
							}}
						>
							<Text style={productView.productPrice}>€ --</Text>
						</View>
					</View>
				</View>
			</TouchableOpacity>
		);
	}
}

export default Product;
