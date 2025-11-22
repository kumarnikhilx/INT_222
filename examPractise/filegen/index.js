import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3004;

app.use(express.urlencoded({ extended: true }));

// form page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'filegen.html'));
});

// file creation
app.post('/create-file', (req, res) => {
  const { filename, content } = req.body;
  const type = req.query.type || 'txt'; // default txt

  if (!filename || !content) {
    return res.send('Filename and content are required.');
  }

  const fullName = `${filename}.${type}`;

  fs.writeFile(fullName, content, (err) => {
    if (err) {
      console.error(err);
      return res.send('Error creating file.');
    }

    res.send(`
      <h3>File <b>${fullName}</b> created successfully!</h3>
      <a href="/">Create another file</a>
    `);
  });
});

app.listen(PORT, () => {
  console.log(`Q5 Server running at http://localhost:${PORT}`);
});
