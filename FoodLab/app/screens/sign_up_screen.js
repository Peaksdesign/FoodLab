import React, { Component } from "react";
import { Text } from 'react-native';

import Api from "../api";
import TabIndex from "../mixins/tab_index";

import LogoImageScreen from "./partials/logo_image_screen";
import FullScreenComponent from "./partials/full_screen_component";
import TextInput from "../components/text_input";
import PasswordInput from "../components/password_input";
import Button from "../components/button";
import Link from "../components/link";
import Spacer from "../components/spacer";

export default class SignUpScreen extends FullScreenComponent {

	constructor(props) {
		super(props);
		this.tabIndex = new TabIndex();
		this.state = {
			loader: false,
			name: null,
			email: null,
			password: null
		}
	}

	handleBackToSignIn() {
		this.props.navigation.navigate("SignIn");
	}

	async handleSignUp() {
		this.setState({ loader: true });

		const response = await Api.signUp(this.state.name, this.state.email, this.state.password);
		if (response.token) {
			alert("Yeah!!!");
		}
		else {
			alert(response.error);
		}

		this.setState({ loader: false });
	}

	handleTermsOfService() {
		alert("Terms of Service");
	}

	render() {
		const HintComponent = (
			<Text style={Theme.hint}>
				By clicking "Register" you agree the <Text style={Theme.link} onPress={this.handleTermsOfService.bind(this)}>Terms of Service</Text>.
			</Text>
		);

		return (
			<LogoImageScreen>
				<TextInput
					title="Name"
					placeholder="Your Name"
					textContentType="name"
					keyboardAppearance="dark"
					returnKeyType="next"
					blurOnSubmit={false}
					onSubmitEditing={() => this.tabIndex.next(1)}
					onChangeText={(value) => this.setState({ name: value })}
					value={this.state.name}
				/>

				<TextInput
					title="E-mail"
					placeholder="your@email.com"
					keyboardType="email-address"
					autoCorrect={false}
					autoCapitalize="none"
					textContentType="username"
					keyboardAppearance="dark"
					returnKeyType="next"
					inputRef={input => this.tabIndex.set(1, input)}
					blurOnSubmit={false}
					onSubmitEditing={() => this.tabIndex.next(2)}
					onChangeText={(value) => this.setState({ email: value })}
					value={this.state.email}
				/>

				<PasswordInput
					title="Password"
					placeholder="Password"
					autoCorrect={false}
					autoCapitalize="none"
					textContentType="password"
					keyboardAppearance="dark"
					returnKeyType="done"
					inputRef={input => this.tabIndex.set(2, input)}
					onSubmitEditing={this.handleSignUp.bind(this)}
					onChangeText={(value) => this.setState({ password: value })}
					value={this.state.password}
				/>

				<Spacer height={40} />
				<Button title="Register" onPress={this.handleSignUp.bind(this)} loader={this.state.loader} />
				<Spacer height={15} />
				<Link title="Back to Sign In" onPress={this.handleBackToSignIn.bind(this)} />
			</LogoImageScreen>
		);
	}
};
