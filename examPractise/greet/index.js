import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3002;

// greet form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'greet.html'));
});

// greet handler
app.get('/greet', (req, res) => {
  const name = req.query.name;
  const age = req.query.age;

  if (!name) {
    return res.send('No name provided. <a href="/">Go back</a>');
  }

  let msg = `Hello, <b>${name}</b>! Welcome to our website.`;

  if (age) {
    msg += `<br>Your age is ${age}.`;
  }

  res.send(`
    <h2>${msg}</h2>
    <a href="/">Go back</a>
  `);
});

app.listen(PORT, () => {
  console.log(`Q3 Server running at http://localhost:${PORT}`);
});
