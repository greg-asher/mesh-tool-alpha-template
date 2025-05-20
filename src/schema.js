const inputSchema = {
  type: 'object',
  properties: {
    a: { type: 'number' },
    b: { type: 'number' },
    op: { type: 'string', enum: ['add', 'subtract'] }
  },
  required: ['a', 'b', 'op']
};

const outputSchema = {
  type: 'object',
  properties: {
    result: { type: 'number' }
  },
  required: ['result']
};

module.exports = { inputSchema, outputSchema };