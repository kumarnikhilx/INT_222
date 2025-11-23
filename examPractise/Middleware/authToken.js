import express from 'express';  
const app = express();
const PORT = 4104;

// Token check middleware
function authMiddleware(req, res, next) {
  const token = req.query.token;

  if (token === '12345') {
    return next();
  }

  res.status(401).send('❌ Invalid or missing token. Access denied.');
}

app.get('/', (req, res) => {
  res.send(`
    <h2>Public Home</h2>
    <p>Try accessing <a href="/dashboard?token=12345">/dashboard?token=12345</a></p>
  `);
});

// Protected route (only applied here)
app.get('/dashboard', authMiddleware, (req, res) => {
  res.send('<h2>✅ Welcome to the protected dashboard!</h2>');
});

app.listen(PORT, () => {
  console.log(`Q4 server running at http://localhost:${PORT}`);
});
