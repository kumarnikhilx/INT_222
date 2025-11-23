import express from 'express';
const app = express();
const PORT = 4102;

const isMaintenance = false; // yahan se ON/OFF karo

function maintenanceMiddleware(req, res, next) {
  if (isMaintenance) {
    return res.send('<h2>🚧 Site is under maintenance. Please come back later.</h2>');
  }
  next();
}

// Global maintenance check
app.use(maintenanceMiddleware);

app.get('/', (req, res) => {
  res.send('<h2>Welcome to the website!</h2>');
});

app.get('/contact', (req, res) => {
  res.send('<h2>Contact Page</h2>');
});
app.listen(PORT, () => {
  console.log(`Q2 server running at http://localhost:${PORT}`);
});
