import React, { Component } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default class Link extends Component {

	render() {
		return (
			<TouchableOpacity onPress={this.props.onPress} style={styles.link}>
				<Text style={styles.linkText}>{this.props.title}</Text>
			</TouchableOpacity>
		);
	}

}

const styles = StyleSheet.create({
	link: {
		width: "100%",
		paddingVertical: 5,
		alignItems: "center",
		marginBottom: 20
	},
	linkText: {
		fontSize: 15,
		color: "#fff"
	}
});