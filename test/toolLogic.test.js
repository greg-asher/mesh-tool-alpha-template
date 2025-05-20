const { runTool } = require('../src/toolLogic');

test('adds numbers', () => {
  expect(runTool({ a: 2, b: 3, op: 'add' })).toEqual({ result: 5 });
});

test('subtracts numbers', () => {
  expect(runTool({ a: 5, b: 2, op: 'subtract' })).toEqual({ result: 3 });
});

test('throws on invalid op', () => {
  expect(() => runTool({ a: 2, b: 2, op: 'multiply' })).toThrow();
});