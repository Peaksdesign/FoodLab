import React, { Component } from "react";
import { View, StyleSheet, KeyboardAvoidingView, ScrollView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default class SafeView extends Component {

	render() {
		return (
			<KeyboardAwareScrollView style={[styles.container, this.props.style]} contentContainerStyle={styles.content} bounces={false} showsVerticalScrollIndicator={false}>
				{this.props.children}
			</KeyboardAwareScrollView>
		);
	}

};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20,
		paddingLeft: 30,
		paddingRight: 30,
	},
	content: {
		// flex: 1,
	}
});