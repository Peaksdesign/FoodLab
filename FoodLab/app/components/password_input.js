import React, { Component } from "react";
import { View, StyleSheet, TextInput as Input, Text } from "react-native";

import Theme from "../theme";
import FormGroup from "./form_group";

type Props = {
	title: string
};

export default class PasswordInput extends Component<Props> {

	render() {
		const { title, hint, hintComponent, inputRef, formGroupStyle, ...inputProps } = this.props;

		return (
			<FormGroup title={title} hint={hint} hintComponent={hintComponent} style={formGroupStyle}>
				<Input {...inputProps} ref={inputRef} style={styles.input} placeholderTextColor={Theme.placeholderColor} secureTextEntry={true} />
			</FormGroup>
		);
	}

};

const styles = StyleSheet.create({
	input: {
		...Theme.input,
		width: "100%",
	}
});