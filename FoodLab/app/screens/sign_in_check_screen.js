import React, { Component } from "react";
import { ActivityIndicator } from "react-native";

import Storage from "../storage";
import LogoImageScreen from "./partials/logo_image_screen";


export default class SignInCheckScreen extends Component {

	constructor(props) {
		super(props);
		this.readToken();
	}

	async readToken() {
		const userToken = await Storage.getToken();
		this.props.navigation.navigate(userToken ? "Protected" : "Public");
	}

	render() {
		return (
			<LogoImageScreen>
				<ActivityIndicator color="#fff" size="large" />
			</LogoImageScreen>
		);
	}
};

