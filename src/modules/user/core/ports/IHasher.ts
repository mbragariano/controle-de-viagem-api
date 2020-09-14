export interface IHasher {

	encrypt(target: string, salt: number): Promise<string>;

	compare(target: string, hash: string): Promise<boolean>;

}
