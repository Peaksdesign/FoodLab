import { AsyncStorage } from "react-native";

class Storage {
	async getToken() {
		return await AsyncStorage.getItem("token");
	}

	async setToken(value) {
		return await AsyncStorage.setItem("token", value);
	}

	async clearToken() {
		await AsyncStorage.removeItem("token");
	}
}

export default new Storage();