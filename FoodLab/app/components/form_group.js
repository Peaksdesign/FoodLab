import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import Label from "./label";


type Props = {
	title?: string
};

export default class FormGroup extends Component<Props> {

	render() {
		if (this.props.hint || this.props.hintComponent) {
			return this.renderComponentWithHint();
		}
		else {
			return this.renderComponent([styles.control, styles.container, this.props.style]);
		}
	}

	renderComponent(style) {
		return (
			<View style={style}>
				{this.props.title && (
					<Label>{this.props.title}</Label>
				)}
				{this.props.children}
			</View>
		);
	}

	renderComponentWithHint() {
		return (
			<View style={[styles.container, this.props.style]}>
				{this.renderComponent(styles.control)}
				{this.props.hint && (
					<Text style={styles.hint}>{this.props.hint}</Text>
				)}
				{this.props.hintComponent && this.props.hintComponent}
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		marginBottom: 20
	},
	control: {
		borderBottomWidth: 1,
		borderColor: "#EBEBEB",
		marginBottom: 10
	},
	hint: Theme.hint
});