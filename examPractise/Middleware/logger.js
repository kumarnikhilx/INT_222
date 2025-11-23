import express from 'express';
const app = express();
const PORT = 4101;

// Custom logger middleware
function loggerMiddleware(req, res, next) {
  const now = new Date().toLocaleTimeString();
  console.log(`${req.method} ${req.url} - ${now}`);
  next(); // aage ke handler ko control de do
}

// Global middleware


// Simple routes
app.get('/', (req, res) => {
  res.send('<h2>Home Page</h2>');
});
app.use(loggerMiddleware);
app.get('/about', (req, res) => {
  res.send('<h2>About Page</h2>');
});

app.listen(PORT, () => {
  console.log(`Q1 server running at http://localhost:${PORT}`);
});
