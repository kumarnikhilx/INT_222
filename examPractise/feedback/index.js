import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();


const PORT = 3000;

// req.body ke liye middleware
app.use(express.urlencoded({ extended: true }));

// HTML file serve karna
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Form se aaya data handle karna
app.post('/submit-feedback', (req, res) => {
  const { name, feedback } = req.body;

  const line = `Name: ${name} | Feedback: ${feedback}\n`;

  fs.appendFile('feedback.txt', line, (err) => {
    if (err) {
      console.error(err);
      return res.send('Error while saving feedback.');
    }

    res.send(`
      <h2>Thank you, ${name}!</h2>
      <p>Your feedback has been saved.</p>
      <a href="/">Go back</a>
    `);
  });
});

app.listen(PORT, () => {
  console.log(`Q1 Server running at http://localhost:${PORT}`);
});
