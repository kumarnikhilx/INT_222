import express from 'express';
const app = express();
const PORT = 4103;

// Body parser
app.use(express.urlencoded({ extended: true }));

// Validation middleware
function validateForm(req, res, next) {
  const { name, email } = req.body;

  if (!name || name.trim() === '') {
    return res.send('❌ Name is required.');
  }

  if (!email || !email.includes('@')) {
    return res.send('❌ Valid email is required.');
  }

  next(); // sab sahi hai, aage jao
}

// Simple form page
app.get('/', (req, res) => {
  res.send(`
    <h2>Registration Form</h2>
    <form action="/submit" method="POST">
      <input type="text" name="name" placeholder="Enter name" required />
      <br><br>
      <input type="email" name="email" placeholder="Enter email" required />
      <br><br>
      <button type="submit">Submit</button>
    </form>
  `);
});

// Apply validation only on this route
app.post('/submit', validateForm, (req, res) => {
  const { name, email } = req.body;
  res.send(`<h3>✅ Form submitted successfully!</h3><p>Name: ${name}<br>Email: ${email}</p>`);
});

app.listen(PORT, () => {
  console.log(`Q3 server running at http://localhost:${PORT}`);
});
