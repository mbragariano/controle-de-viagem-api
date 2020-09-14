import { compare, hash } from 'bcryptjs';
import { IHasher } from '../../../core/ports';

export class BcryptJsHasher implements IHasher {

	encrypt(target: string, salt: number): Promise<string> {
		return hash(target, salt);
	}

	compare(target: string, hash: string): Promise<boolean> {
		return compare(target, hash);
	}

}
