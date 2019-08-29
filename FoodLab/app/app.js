import React, { Component } from "react";
import { createSwitchNavigator, createStackNavigator } from "react-navigation";

//
// Public routes (available to all users)
//
import SignInCheckScreen from "./screens/sign_in_check_screen";
import SignInScreen from "./screens/sign_in_screen";
import SignUpScreen from "./screens/sign_up_screen";
import ForgotPasswordScreen from "./screens/forgot_password_screen";

const PublicStack = createStackNavigator({
	SignIn: SignInScreen,
	SignInCheck: SignInCheckScreen,
	SignUp: SignUpScreen,
	ForgotPassword: ForgotPasswordScreen
});


//
// Protected routes (available only to logged users)
//
import HomeScreen from "./screens/home_screen";

const ProtectedStack = createStackNavigator({
	Home: HomeScreen
});


//
// Create main application router, which handles public and protected routes
// Ie. shows protected content only to logged users and allow non-loged users
// to sign in or sign up.
//
const Router = createSwitchNavigator(
	{
		SignInCheck: SignInCheckScreen,
		Public: PublicStack,
		Protected: ProtectedStack,
	},
	{
		initialRouteName: "SignInCheck",
	}
);


export default class App extends Component {
	render() {
		return <Router />;
	}
}
