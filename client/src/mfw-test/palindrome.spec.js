function palindrome(myString) {
	if (typeof myString !== 'string') {
		throw new Error('Invalid argument');
	}

	myString = myString.toLowerCase().replace(/[^a-zA-Z]/g, "");	// strip all non-letters and convert to lowercase

	if (myString === "")
		return false;
	if (myString === reverseString(myString)) {
		return true;
	}
	return false;
}

function reverseString(input) {
	return input.split("").reverse().join("")
}

describe('palindrome', () => {
	test('canary validates test infrastructure', () => {
		expect(true).toBeTruthy;
	});

	test('"a" is a palindrome and returns true', () => {
		expect(palindrome('a')).toEqual(true);
	});

	test('"dude" is not a palindrome and returns false', () => {
		expect(palindrome('dude')).toEqual(false);
	});

	test('the empty string returns false', () => {
		expect(palindrome("")).toEqual(false);
	});

	test('null argument throws an error', () => {
		expect(() => {
			palindrome();
		}).toThrow(new Error('Invalid argument'));
	});

	test('"was it a cat i saw" is a palindrome and returns true, regardless of whitespace', () => {
		expect(palindrome('was it a cat i saw')).toEqual(true);
	});

	test('"rac3,e car" is a palindrome and returns true, regardless of punctuation and special characters', () => {
		expect(palindrome('rac3,e car')).toEqual(true);
	});

	test('"raCecar is a palindrome and returns true, regardless of capitalization', () => {
		expect(palindrome('raCecar')).toEqual(true);
	});

	test('reverseString() actually reverses a string "testing"', () => {
		expect(reverseString("testing")).toEqual("gnitset");
	});
});