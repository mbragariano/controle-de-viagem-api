module.exports = {
	bail: 1,
	clearMocks: true,
	collectCoverageFrom: [
		'src/**/*',
		'!src/shared/**/*',
		'!src/tests/**/*',
	],
	coverageDirectory: 'coverage',
	testEnvironment: 'node',
	testMatch: [
		'**/src/tests/**/*.test.ts'
	],
	testPathIgnorePatterns: [
		'\\\\node_modules\\\\',
		'\\\\coverage\\\\'
	],
	preset: 'ts-jest',
	transform: {
		'^.+\\.ts?$': 'ts-jest'
	},
	verbose: true
};
