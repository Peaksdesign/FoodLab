import React, { Component } from "react";
import { Dimensions, Image, View, StyleSheet } from "react-native";

import BackgroundImageScreen from "./background_image_screen";
import SafeView from "../../components/safe_view";

export default class LogoImageScreen extends Component {
	render() {
		var containerStyle = {};
		var logoStyle = {};

		const height = Dimensions.get("window").height;
		if (height < 500) {
			logoStyle = { height: 100 };
			containerStyle = { paddingVertical: 20 };
		}
		else if (height < 600) {
			logoStyle = { height: 140 };
			containerStyle = { paddingVertical: 20 };
		}

		return (
			<BackgroundImageScreen>
				<SafeView>
					<View style={[styles.container, containerStyle]}>
						<Image source={require("../../../assets/images/logo.png")} style={[styles.logo, logoStyle]} />
					</View>

					{this.props.children}
				</SafeView>
			</BackgroundImageScreen>
		);
	}

};

const styles = StyleSheet.create({
	logo: {
		resizeMode: "contain",
		alignSelf: "center",
	},
	container: {
		paddingVertical: 40
	}
});