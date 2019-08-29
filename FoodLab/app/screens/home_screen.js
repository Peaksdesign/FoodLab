import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from 'react-native';

import Api from "../api";
import Storage from "../storage";

export default class HomeScreen extends Component {

	async handleSignOut() {
		const token = await Storage.getToken();
		await Api.signOut(token);
		await Storage.clearToken();
		this.props.navigation.navigate("Public");
	}

	render() {
		return <Text onPress={this.handleSignOut.bind(this)}>Sign Out</Text>;
	}
}