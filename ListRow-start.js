import React, { Component } from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	Animated,
	TouchableOpacity,
} from "react-native";
import Product from "./components/ScreenPages/Element/productViewComponent";
import {
	styles,
	buttons,
	textInput,
	image,
	productView,
	pageSetup,
	text,
} from "./components/ScreenPages/StylesPage";

class ListRow extends Component {
	onRemove = () => {
		const { onRemove } = this.props;
		if (onRemove) {
			onRemove();
		}
	};

	render() {
		const { name, picture, email } = this.props;

		const rowStyles = [styles.row];

		return (
			<TouchableOpacity onPress={this.onRemove}>
				<Animated.View style={{ alignContent: "center", alignItems: "center", marginBottom: 10 }}>
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
								<Text style={text.h3}>
									{name.first} {name.last}
								</Text>
								<Text>{email}</Text>
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
				</Animated.View>
			</TouchableOpacity>
		);
	}
}

// const styles = StyleSheet.create({
//   row: {
//     flexDirection: 'row',
//     paddingHorizontal: 15,
//     alignItems: 'center',
//     height: ROW_HEIGHT,
//   },
//   image: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 10,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: '500',
//   },
//   email: {
//     fontSize: 14,
//   },
// });

export default ListRow;
