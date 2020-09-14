import { UserType } from '../enums';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Identifier } from '../../../../shared/core/domains';
import { ValidationUtils } from '../../../../utils/ValidationsUtils';

export class User {

	private _id?: Identifier;

	@IsNotEmpty({ groups: ['Create'] })
	private _name: string;

	@IsNotEmpty({ groups: ['Create'] })
	@IsEmail({}, { groups: ['Create'] })
	private _email: string;

	@IsNotEmpty({ groups: ['Create'] })
	private _type: UserType;

	@IsNotEmpty({ groups: ['Create'] })
	private _password: string;

	constructor(name: string, email: string, type: UserType, password: string, id?: Identifier) {
		this._id = id;
		this._name = name;
		this._type = type;
		this._email = email;
		this._password = password;
	}

	get id() {
		return this._id;
	}

	set id(id: Identifier) {
		this._id = id;
	}

	get name() {
		return this._name;
	}

	get email() {
		return this._email;
	}

	get password() {
		return this._password;
	}

	get type() {
		return this._type;
	}

	async validaToCreate() {
		await ValidationUtils.handleAndValidate(this, { groups: ['Create'] }, {
			message: 'Invalid values to create a user.',
			devMessage: 'See validation messages and try again.'
		});
	}

}
