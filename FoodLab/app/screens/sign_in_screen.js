import React, { Component } from "react";

import Api from "../api";
import Storage from "../storage";
import TabIndex from "../mixins/tab_index";

import LogoImageScreen from "./partials/logo_image_screen";
import FullScreenComponent from "./partials/full_screen_component";
import TextInput from "../components/text_input";
import ForgotPasswordInput from "../components/forgot_password_input";
import Button from "../components/button";
import Link from "../components/link";
import Spacer from "../components/spacer";

export default class SignInScreen extends FullScreenComponent {

	constructor(props) {
		super(props);
		this.tabIndex = new TabIndex();

		this.state = {
			email: null,
			password: "",
			loader: false
		};
	}

	async handleSignIn() {
		this.setState({ loader: true });
		const response = await Api.signIn(this.state.email, this.state.password);
		this.setState({ loader: false });

		if (response.token) {
			await Storage.setToken(response.token);
			this.props.navigation.navigate("Protected");
		}
		else {
			alert(response.error);
		}
	}

	handleSignUp() {
		this.props.navigation.navigate("SignUp");
	}

	handleForgotPassword() {
		this.props.navigation.navigate("ForgotPassword");
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
					returnKeyType="next"
					blurOnSubmit={false}
					onSubmitEditing={() => this.tabIndex.next(1)}
					onChangeText={(value) => this.setState({ email: value })}
					value={this.state.email}
				/>


				<ForgotPasswordInput
					placeholder="Password"
					autoCorrect={false}
					autoCapitalize="none"
					textContentType="password"
					onForgotPasswordPress={this.handleForgotPassword.bind(this)}
					keyboardAppearance="dark"
					returnKeyType="done"
					inputRef={input => this.tabIndex.set(1, input)}
					onSubmitEditing={this.handleSignIn.bind(this)}
					onChangeText={(value) => this.setState({ password: value })}
					value={this.state.password}
				/>


				<Spacer height={40} />
				<Button title="Sign In" onPress={this.handleSignIn.bind(this)} loader={this.state.loader} />
				<Spacer height={15} />
				<Link title="Create an Account" onPress={this.handleSignUp.bind(this)} />
			</LogoImageScreen>
		);
	}
};

