function wordwrap(myString, lineLength) {
	let paragraph = "";
	if (myString.length > lineLength) {
		myString = myString.match(new RegExp('.{1,' + lineLength + '}', 'g'));
	}
	for (let i = 0; i < myString.length; i++) {
		paragraph = paragraph.concat(myString[i]);
		if (i < myString.length - 1)
			paragraph = paragraph.concat('\n');
	}

	return paragraph;
}

describe.only('wordwrap', () => {
	test('canary validates test infrastructure', () => {
		expect(true).toBeTruthy;
	});

	test('arguments "a", 1 are passed to wordwrap() and returns paragraph "a"', () => {
		expect(wordwrap('a', 1)).toEqual('a');
	});

	test('arguments "aa", 1 are passed to wordwrap and returns paragraph "a\na"', () => {
		expect(wordwrap('aa', 1)).toEqual('a\na');
	});

	test('arguments "a a", 2 are passed to wordwrap and returns paragraph "a \na"', () => {
		expect(wordwrap('a a a', 4)).toEqual('a a \na');
	});

	test('string "aaaa bbbb cccc", 5 passed to wordwrap returns "aaaa \nbbbb \ncccc"', () => {
		expect(wordwrap('aaaa bbbb cccc', 5)).toEqual('aaaa \nbbbb \ncccc');
	});

	test('string "aaaa bb cccc", 3 passed to wordwrap returns "aaa\na \nbb \nccc\nc"', () => {
		expect(wordwrap('aaaa bb cccc', 3)).toEqual('aaa\na \nbb \nccc\nc');
	});
});