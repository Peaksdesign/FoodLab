import React, { Component } from "react";
import { TouchableOpacity, View, StyleSheet, TextInput as Input, Text } from "react-native";

import Theme from "../theme";
import FormGroup from "./form_group";

type Props = {
	title?: string
};

export default class ForgotPasswordInput extends Component<Props> {

	render() {
		const { title, hint, hintComponent, inputRef, formGroupStyle, ...inputProps } = this.props;

		return (
			<FormGroup title={title} hint={hint} hintComponent={hintComponent} style={formGroupStyle}>
				<View style={styles.inputGroup}>
					<Input {...inputProps} ref={inputRef} style={styles.input} placeholderTextColor={Theme.placeholderColor} secureTextEntry={true} />

					<TouchableOpacity onPress={this.props.onForgotPasswordPress} style={styles.link}>
						<Text style={styles.linkText}>Forgot password?</Text>
					</TouchableOpacity>
				</View>
			</FormGroup>
		);
	}

};

const styles = StyleSheet.create({
	inputGroup: {
		flexDirection: "row",
		alignItems: "center"
	},
	input: {
		...Theme.input,
		flex: 1
	},
	link: {
		marginLeft: 10
	},
	linkText: {
		...Theme.label
	}

});