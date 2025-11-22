import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// Serve HTML file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "form.html"));
});

// Receive form data and create file
app.post("/save", (req, res) => {
    const text = req.body.userText;

    // Writing text into file using fs
    fs.writeFile("output.txt", text, (err) => {
        if (err) {
            return res.send("❌ Error writing file!");
        }
        res.send("✔ File created successfully! Check output.txt");
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
