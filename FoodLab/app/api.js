const API_PATH = "https://www.food-lab.cz/api";

export default class Api {

	// *************************************************************************
	// Authentication
	// *************************************************************************

	static async signUp(name, email, password) {
		try {
			let response = await fetch(API_PATH + "/registration", {
				method: "POST",
				body: JSON.stringify({
					email: email,
					password: password
				})
			});

			let responseJson = await response.json();

			if (responseJson.Error) {
				responseJson.error = responseJson.Error;
			}
			if (responseJson.Success) {
				responseJson.success = responseJson.Success;
			}

			return responseJson;

		} catch (error) {
			return { error: error };
		}
	}

	static async signIn(email, password) {
		try {
			let response = await fetch(API_PATH + "/auth", {
				method: "POST",
				body: JSON.stringify({
					email: email,
					password: password
				})
			});

			let responseJson = await response.json();

			if (responseJson.Token) {
				responseJson.token = responseJson.Token;
			}
			if (responseJson.Error) {
				responseJson.error = responseJson.Error;
			}

			return responseJson;

		} catch (error) {
			return { error: error };
		}
	}

	static async signOut(token) {
		try {
			let response = await fetch(API_PATH + "/auth", {
				method: "DELETE",
				body: JSON.stringify({
					token: token
				})
			});
			let responseJson = await response.json();

			return responseJson;

		} catch (error) {
			return { error: error };
		}
	}

}