import React, { Component } from "react";
import { Platform, TouchableNativeFeedback, TouchableHighlight, View, Text, ActivityIndicator, StyleSheet } from "react-native";

export default class Button extends Component {

	render() {
		if (Platform.OS == "android") {
			return this.renderAndroid();
		}
		else {
			return this.renderIOS();
		}
	}

	renderIOS() {
		return (
			<TouchableHighlight onPress={this.props.onPress} style={styles.button} underlayColor="#A47928">
				<View style={styles.buttonBody}>
					{this.props.loader && <ActivityIndicator color="#fff" style={styles.loader} />}
					<Text style={styles.buttonText}>{this.props.title}</Text>
				</View>
			</TouchableHighlight>
		);
	}

	renderAndroid() {
		this.renderIOS();
	}

}

const styles = StyleSheet.create({
	button: {
		width: "100%",
		backgroundColor: "#CD9933",
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 10,
		height: 16 + 16 * 2
	},
	buttonBody: {
		flexDirection: "row"
	},
	buttonText: {
		fontSize: 16,
		color: "#fff"
	},
	loader: {
		marginRight: 5
	}
});