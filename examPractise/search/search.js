import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

// search page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'search.html'));
});

// search handler
app.get('/search', (req, res) => {
  const keyword = req.query.search;

  if (!keyword) {
    return res.send('Please provide a search keyword.');
  }

  fs.readFile('notes.txt', 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return res.send('Error reading notes file.');
    }

    if (data.includes(keyword)) {
      res.send(`
        <h3>Found keyword "<b>${keyword}</b>" in notes.</h3>
        <a href="/">Search again</a>
      `);
    } else {
      res.send(`
        <h3>No match found for "<b>${keyword}</b>".</h3>
        <a href="/">Try again</a>
      `);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Q2 Server running at http://localhost:${PORT}`);
});
