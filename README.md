# ${{ values.name }}

${{ values.description }}

## Overview

This mesh tool provides a stateless API service that can be used by AI agents in the mesh network. It's designed to be lightweight, modular, and easy to deploy in Kubernetes environments.

## Getting Started

### Prerequisites
- Node.js 20+
- npm
- Docker (for containerization)
- Kubernetes cluster (for deployment)

### Development

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file based on `.env.example`:
   ```
   cp .env.example .env
   ```
4. Run tests:
   ```
   npm test
   ```
5. Start the service locally:
   ```
   npm start
   ```

## API Reference

### Endpoints

- **POST /invoke** - Main endpoint to invoke the tool functionality
  - Request body must match the input schema
  - Returns result matching the output schema
  
- **GET /health** - Health check endpoint
  - Returns `{"status": "ok"}` when the service is healthy

- **GET /ready** - Readiness check endpoint
  - Returns `{"ready": true}` when the service is ready to accept requests

- **GET /schema** - Schema information endpoint
  - Returns the input and output JSON schemas for the tool

### Input/Output Schemas

The tool expects input in the following format:
```json
{
  "a": <number>,
  "b": <number>,
  "op": "add" | "subtract"
}
```

And returns responses in this format:
```json
{
  "result": <number>
}
```

## Customization

To customize this tool for your specific use case:

1. Modify `src/toolLogic.js` to implement your custom business logic
2. Update `src/schema.js` to reflect your required input/output schemas
3. Update the OpenAPI spec in `openapi.yaml` to document your API
4. Adjust Kubernetes resources in `k8s/` directory as needed

## Deployment

### Docker

Build and run the Docker container:

```bash
docker build -t ${{ values.name }}:latest .
docker run -p 8080:8080 ${{ values.name }}:latest
```

### Kubernetes

Deploy to Kubernetes:

```bash
kubectl apply -f k8s/
```

## Integration with Mesh Network

This tool can be discovered and used by AI agents in the mesh network via its service endpoint:

```
http://${{ values.name }}-service:8080/invoke
```

The Backstage catalog entry (mesh-tool.yaml) contains the necessary metadata for discovery and integration.
