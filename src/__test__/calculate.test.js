import calculate from '../logic/calculate';
import obj from '../__mock__/calculate';

describe('Calculate', () => {
  test('the test is to return an empty object', () => {
    expect(calculate(obj, 'AC')).toEqual(obj);
    expect(calculate(obj, 'AC')).toMatchSnapshot();
  });

  test('the test should return 0', () => {
    obj.next = '0';
    expect(calculate(obj, '0')).toEqual({});
    expect(calculate(obj, '0')).toMatchSnapshot();
  });

  test('the test to should return concatenation of numbers with next value ', () => {
    obj.operation = '+';
    obj.next = '8';
    calculate(obj, '4');
    expect(calculate(obj, '4').next).toBe('84');
    expect(calculate(obj, '4').next).toMatchSnapshot();
  });

  test('the test should return a total null if  operation is null ', () => {
    obj.operation = null;
    obj.next = 2;
    expect(calculate(obj, '3').next).toBe('23');
    expect(calculate(obj, '3').total).toBe(null);
    expect(calculate(obj, '3').total).toMatchSnapshot();
  });

  test('the test should return a number entered if the operation and total are null', () => {
    obj.operation = null;
    obj.next = null;
    expect(calculate(obj, '3').next).toBe('3');
    expect(calculate(obj, '3').next).toMatchSnapshot();
  });
});