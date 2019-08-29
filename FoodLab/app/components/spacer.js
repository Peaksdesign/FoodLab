import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

export default class Spacer extends Component {

	render() {
		return (
			<View style={styles.spacer} {...this.props}></View>
		);
	}

}

const styles = StyleSheet.create({
	spacer: {
		flexShrink: 2,
		minHeight: 5
	}
});