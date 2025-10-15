import express from "express";
import mongoose from "mongoose";
import User from "./models/user.model.js";
const app = express();
app.use(express.json());

const PORT = 8000;

const MONGOURI ="mongodb+srv://demoPractise2004:Nikhil$2004@demopractice.hdpqzrn.mongodb.net/DemoPractise";

const connectDb= async () => {
  try {
    await mongoose.connect(MONGOURI);
    console.log("Database Connected Successfully!");
  } catch (err) {
    console.log("error Found:", err);
  }
};

app.get("/", (req, res) => {
  res.send("home Page");
});

app.post("/create", async (req, res) => {
 try {
    let { name, age, email, userName } = req.body;

    const newUser = await User.create({
      name,
      age,
      email,
      userName,
    });

    res.status(201).json({ message: "User has been created!", user: newUser });
  } catch (err) {
    console.log("❌ Found Error:", err);
    res.status(400).json({ error: err.message });
  }
});

app.get("/read",async (req,res) => {
    try {
        const user=await User.find();
        res.status(201).json({message:user})
    } catch (error) {
        res.status(400).json({message:error.message});        
    }

})
app.get("/read/:name",async (req,res) => {
    try {
        const user=await User.findOne({name:req.params.name});
        res.status(201).json({message:user})
    } catch (error) {
        res.status(400).json({message:error.message});        
    }

})
app.put("/update/:id",async (req,res) => {
    try {
        const {name,age}=req.body;
        const id=req.params.id;
        const user=await User.findByIdAndUpdate(id,{name,age},{new:true});
        res.status(201).json({message:user})
    } catch (error) {
        res.status(400).json({message:error.message});        
    }

})

connectDb();
app.listen(PORT, () => {
  console.log(`The server is running in http://localhost:${PORT}`);
});
