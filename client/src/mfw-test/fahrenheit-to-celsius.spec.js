function fahrenheitToCelsius(degreesFahrenheit) {
  if (typeof degreesFahrenheit !== 'number') {
    throw new Error('Not a valid temperature');
  };
  return (degreesFahrenheit - 32) * (5 / 9);
}

describe('fahrenheit-to-celsius', () => {
  test('canary validates test infrastructure', () => {
    expect(true).toEqual(true);
  });

  test('32 degree fahrenheit is 0 degrees celsius', () => {
    expect(fahrenheitToCelsius(32)).toEqual(0);
  });

  test('212 degrees fahrenheit is 100 degrees celsius', () => {
    expect(fahrenheitToCelsius(212)).toEqual(100);
  });

  test('-40 degrees fahrenheit is -40 degrees celsius', () => {
    expect(fahrenheitToCelsius(-40)).toEqual(-40);
  });

  test('NaN should throw an exception', () => {
    expect(() => {
      fahrenheitToCelsius('test');
    }).toThrow(new Error('Not a valid temperature'));
  });
});
