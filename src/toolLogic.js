function runTool(input) {
  // Replace with your actual logic
  const { a, b, op } = input;
  if (op === 'add') return { result: a + b };
  if (op === 'subtract') return { result: a - b };
  throw new Error('Invalid operation');
}
module.exports = { runTool };