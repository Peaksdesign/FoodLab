import React, { Component } from "react";
import { ImageBackground, StatusBar, StyleSheet } from "react-native";

export default class BackgroundImageScreen extends Component {
	render() {
		return (
			<ImageBackground source={ require("../../../assets/images/background.jpg") } imageStyle={{ resizeMode: "cover" }} style={[styles.imageBackground, this.props.style]}>
				{this.props.children}
				<StatusBar barStyle="light-content" />
			</ImageBackground>
		);
	}

};

const styles = StyleSheet.create({
	imageBackground: {
		flex: 1,
		backgroundColor: "#333"
	}
});