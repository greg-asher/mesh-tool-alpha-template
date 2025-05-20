const express = require('express');
const dotenv = require('dotenv');
const { runTool } = require('./toolLogic');
const { inputSchema, outputSchema } = require('./schema');
const Ajv = require('ajv');

dotenv.config();
const app = express();
const ajv = new Ajv();

app.use(express.json());

app.post('/invoke', (req, res) => {
  if (!ajv.validate(inputSchema, req.body)) {
    return res.status(400).json({ error: 'Invalid input', details: ajv.errors });
  }
  try {
    const result = runTool(req.body);
    if (!ajv.validate(outputSchema, result)) {
      throw new Error('Output does not match schema');
    }
    res.json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.get('/ready', (req, res) => res.json({ ready: true }));
app.get('/schema', (req, res) => res.json({ input: inputSchema, output: outputSchema }));

const PORT = process.env.PORT || 8080; // Default port, override with PORT env variable
app.listen(PORT, () => {
  console.log(`Tool service running on port ${PORT}`);
});
