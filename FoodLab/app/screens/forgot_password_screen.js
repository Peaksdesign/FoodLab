import React, { Component } from "react";

import LogoImageScreen from "./partials/logo_image_screen";
import FullScreenComponent from "./partials/full_screen_component";
import TextInput from "../components/text_input";
import Button from "../components/button";
import Link from "../components/link";
import Spacer from "../components/spacer";

export default class ForgotPasswordScreen extends FullScreenComponent {

	handleBackToSignIn() {
		this.props.navigation.navigate("SignIn");
	}

	handleForgotPassword() {
		alert("Renew Password");
	}

	handleTermsOfService() {
		alert("Terms of Service");
	}

	render() {
		return (
			<LogoImageScreen>
				<TextInput
					title="E-mail"
					placeholder="your@email.com"
					keyboardType="email-address"
					autoCorrect={false}
					autoCapitalize="none"
					textContentType="username"
					keyboardAppearance="dark"
					returnKeyType="done"
					onSubmitEditing={this.handleForgotPassword.bind(this)}
				/>

				<Spacer height={40} />
				<Button title="Renew Password" onPress={this.handleForgotPassword.bind(this)} />
				<Spacer height={15} />
				<Link title="Back to Sign In" onPress={this.handleBackToSignIn.bind(this)} />
			</LogoImageScreen>
		);
	}
};
