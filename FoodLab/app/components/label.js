import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

import Theme from "../theme";

export default class FormGroup extends Component {

	render() {
		return (
			<Text style={styles.label}>
				{this.props.children}
			</Text>
		);
	}

}

const styles = StyleSheet.create({
	label: Theme.label
});