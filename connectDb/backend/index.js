import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/studentDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

// Schema & Model
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
const Student = mongoose.model("Student", studentSchema);

// -----------------------------
// CREATE (POST)
// -----------------------------
app.post("/add", async (req, res) => {
  try {
    const { name, age } = req.body;
    const student = new Student({ name, age });
    await student.save();
    res.json({ message: "Student added successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// -----------------------------
// READ (GET)
// -----------------------------
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// -----------------------------
// UPDATE (PUT)
// -----------------------------
app.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age } = req.body;
    const updated = await Student.findByIdAndUpdate(id, { name, age }, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// -----------------------------
// DELETE (DELETE)
// -----------------------------
app.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Student.findByIdAndDelete(id);
    res.json({ message: "Student deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
