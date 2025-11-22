import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3003;

app.use(express.urlencoded({ extended: true }));

// form page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'message.html'));
});

// message save
app.post('/message', (req, res) => {
  const { username, message } = req.body;

  const line = `Name: ${username} | Message: ${message}\n`;

  fs.appendFile('messages.txt', line, (err) => {
    if (err) {
      console.error(err);
      return res.send('Error saving message.');
    }

    res.send(`
      <h3>Message saved!</h3>
      <a href="/messages">View all messages</a><br>
      <a href="/">Go back</a>
    `);
  });
});

// show all messages
app.get('/messages', (req, res) => {
  fs.readFile('messages.txt', 'utf-8', (err, data) => {
    if (err) {
      // agar file nahi bani abhi tak
      if (err.code === 'ENOENT') {
        return res.send('<h3>No messages yet.</h3><a href="/">Go back</a>');
      }

      console.error(err);
      return res.send('Error reading messages.');
    }

    if (!data.trim()) {
      return res.send('<h3>No messages yet.</h3><a href="/">Go back</a>');
    }

    res.send(`
      <h2>All Messages</h2>
      <pre>${data}</pre>
      <a href="/">Go back</a>
    `);
  });
});

app.listen(PORT, () => {
  console.log(`Q4 Server running at http://localhost:${PORT}`);
});
