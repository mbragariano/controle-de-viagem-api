import { User } from '../../../../../modules/user/core/domains';
import { UserType } from '../../../../../modules/user/core/enums';
import { ValidationEntityError } from '../../../../../shared/impl/errors';

describe('User Domain', () => {

	describe('Validate to Create', () => {

		it('should not be throw ValidationEntityError when try create a valid user.', async () => {
				const user = new User('Matheus Braga', 'matheus@example.com', UserType.COLABORATOR, '123456');

				await user.validaToCreate();
		});

		it('should be throw ValidationEntityError when try create a invalid user and check validation messages.', async () => {
			try {
				const user = new User('', '', undefined, '');

				await user.validaToCreate();
			} catch(error) {
				const { validations } = error as ValidationEntityError;

				const nameValidations = validations.find(validation => validation.property === 'name');
				const typeValidations = validations.find(validation => validation.property === 'type');
				const emailValidations = validations.find(validation => validation.property === 'email');
				const passwordValidations = validations.find(validation => validation.property === 'password');

				expect(nameValidations.messages).toContain<string>('name should not be empty');
				expect(typeValidations.messages).toContain<string>('type should not be empty');
				expect(emailValidations.messages).toEqual<string[]>([
					'email must be an email',
					'email should not be empty'
				]);
				expect(passwordValidations.messages).toContain<string>('password should not be empty');
			}
		});
	});
});
