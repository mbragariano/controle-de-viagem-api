export abstract class Identificator<T = any> {

	private _value: T;

	constructor(value: T) {
		this._value = value;
	}

	get value() {
		return this._value;
	}

}
