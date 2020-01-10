import React, { Component } from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	Animated,
	TouchableOpacity,
} from "react-native";
import {
	styles,
	buttons,
	textInput,
	image,
	productView,
	pageSetup,
	text,
} from "./../StylesPage";

class ListRow extends Component {
	onRemove = () => {
		const { onRemove } = this.props;
		if (onRemove) {
			onRemove();
		}
	};

	render() {
		const { name, picture, email, price, description } = this.props;

		return (
			<TouchableOpacity onPress={this.onRemove}>
				<Animated.View
					style={{
						alignContent: "center",
						alignItems: "center",
						marginBottom: 10,
					}}
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
								<Text style={text.h3}>{name.first}</Text>
								<Text>{description}</Text>
								<View
									style={{
										alignItems: "flex-end",
										flexDirection: "column-reverse",
									}}
								>
									<Text style={productView.productPrice}>{price}</Text>
								</View>
							</View>
						</View>
				</Animated.View>
			</TouchableOpacity>
		);
	}
}


export default ListRow;
