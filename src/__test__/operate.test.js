import operate from '../logic/operate';

describe('Operate', () => {
  const num1 = 4;
  const num2 = 2;
  const addition = operate(num1, num2, '+');
  test('The test check for  Addition of two number', () => {
    expect(addition).toBe('6');
    expect(addition).toMatchSnapshot();
  });
  const subtraction = operate(num1, num2, '-');
  test('The test check for subtraction of two number', () => {
    expect(subtraction).toBe('2');
    expect(subtraction).toMatchSnapshot();
  });
  const division = operate(num1, num2, '÷');
  test('The test check for division of two number', () => {
    expect(division).toBe('2');
    expect(division).toMatchSnapshot();
  });
  const multiplication = operate(num1, num2, 'x');
  test('The test check for multiplication of two number', () => {
    expect(multiplication).toBe('8');
    expect(multiplication).toMatchSnapshot();
  });
  const noDivisibility = operate(num1, '0', '÷');
  test('The  test that check for no divisibility by denominator zero', () => {
    expect(noDivisibility).toBe("Can't divide by 0.");
    expect(noDivisibility).toMatchSnapshot();
  });
  const modulus = operate(num1, num2, '%');
  test('The  test that checks for the modulus of a number', () => {
    expect(modulus).toBe('0');
    expect(modulus).toMatchSnapshot();
  });
});