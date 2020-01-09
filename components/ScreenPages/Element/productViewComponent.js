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

class Product extends React.Component {
	render() {
		return (
			<TouchableOpacity
				onPress={() => this.props.navigation.navigate("Product")}
			>
				<View style={pageSetup.Plasing}>
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
								Hier in komt alle infotmatie van het product!
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
			</TouchableOpacity>
		);
	}
}

export default Product;
