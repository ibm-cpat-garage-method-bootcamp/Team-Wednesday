function wordwrap(myString, lineLength) {
	let paragraph = myString;

	return paragraph;
}

describe.only('wordwrap', () => {
	test('canary validates test infrastructure', () => {
		expect(true).toBeTruthy;
	});

	test('arguments "a", 1 are passed to wordwrap() and returns paragraph "a"', () => {
		expect(wordwrap('a', 1)).toEqual('a');
	});

	// test('string "aaaa bbbb cccc", 5 passed to wordwrap returns "aaaa \nbbbb \ncccc"', () => {
	// 	expect(wordwrap('aaaa bbbb cccc', 5)).toEqual('aaaa \nbbbb \ncccc');
	// });
});