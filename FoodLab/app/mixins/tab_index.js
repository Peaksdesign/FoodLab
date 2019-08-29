export default class TabIndex {

	constructor() {
		this.tabIndexable = {};
	}

	set(inputId, input) {
		this.tabIndexable[inputId] = input;
	}

	next(inputId) {
		const input = this.tabIndexable[inputId]
		if (input) {
			input.focus();
		}
	}
}