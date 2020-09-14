import { User } from '../domains';
import { Identifier } from '../../../../shared/core/domains';

export interface IUserStorage {

	create(user: User): Promise<Identifier>;

	findByEmail(email: string): Promise<User>;

}
