const express = require("express");
const client = require("prom-client");

const app = express();
const PORT = 3000;

// Create a Registry
const register = new client.Registry();

// Add default metrics (CPU, memory, event loop lag...)
client.collectDefaultMetrics({ register });

// Example custom counter
const httpRequestCounter = new client.Counter({
  name: "http_requests_total",
  help: "Total number of HTTP requests",
  labelNames: ["method", "route", "status"],
});

register.registerMetric(httpRequestCounter);

app.get("/", (req, res) => {
  httpRequestCounter.inc({ method: "GET", route: "/", status: 200 });
  res.send("Server is running with Express 🚀");
});

// Metrics endpoint
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});