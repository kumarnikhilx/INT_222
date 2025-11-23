const express = require('express');
const app = express();
const PORT = 4108;

app.use(express.urlencoded({ extended: true }));

// Role-check middleware
function adminOnly(req, res, next) {
  const role = req.query.role;

  if (role === 'admin') {
    return next();
  }

  res.status(403).send('❌ Only admin can upload file.');
}

// Simple upload form
app.get('/', (req, res) => {
  res.send(`
    <h2>Upload File (Demo)</h2>
    <p>Try with and without ?role=admin</p>
    <form action="/upload?role=admin" method="POST">
      <input type="text" name="fileName" placeholder="File name" required />
      <br><br>
      <button type="submit">Upload (as admin)</button>
    </form>
    <br>
    <form action="/upload" method="POST">
      <input type="text" name="fileName" placeholder="File name" required />
      <br><br>
      <button type="submit">Upload (no role)</button>
    </form>
  `);
});

// Upload route with middleware
app.post('/upload', adminOnly, (req, res) => {
  const fileName = req.body.fileName;
  res.send(`✅ File "${fileName}" uploaded successfully by admin.`);
});

app.listen(PORT, () => {
  console.log(`Q8 server running at http://localhost:${PORT}`);
});
