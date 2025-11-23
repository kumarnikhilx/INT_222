import express from 'express';
const app = express();
const PORT = 4107;

let count = 0;

// Counter middleware
function counterMiddleware(req, res, next) {
  count++;
  req.hitCount = count;
  next();
}

// Global apply
app.use(counterMiddleware);

app.get('/', (req, res) => {
  res.send(`<h2>Home Page</h2><p>Total hits: ${req.hitCount}</p>`);
});

app.get('/about', (req, res) => {
  res.send(`<h2>About Page</h2><p>Total hits: ${req.hitCount}</p>`);
});

// Stats route
app.get('/stats', (req, res) => {
  res.send(`<h2>📊 Server Stats</h2><p>Total requests so far: ${count}</p>`);
});

app.listen(PORT, () => {
  console.log(`Q7 server running at http://localhost:${PORT}`);
});
