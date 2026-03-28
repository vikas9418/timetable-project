require('dotenv').config(); // 1. Sabse upar dotenv ko load karein
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Timetable = require("./timetable"); 

const app = express();
// 2. Port ko environment variable se uthayein ya default 5000 rakhein
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Safely ✅");
  } catch (err) {
    console.error("MongoDB Connection Error: ❌", err.message);
    process.exit(1); // अगर कनेक्ट न हो तो सर्वर बंद कर दे
  }
};

connectDB(); // फंक्शन को कॉल करें

// --- Baki sari APIs waisi hi rahengi ---

// POST API
app.post("/timetable", async (req, res) => {
  try {
    const { course, day, lecture, subject } = req.body;
    const newData = new Timetable({ course: course.toUpperCase(), day, lecture, subject });
    const savedData = await newData.save();
    res.status(201).json({ message: "Success!", data: savedData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET API
app.get("/timetable", async (req, res) => {
  try {
    const { course, day, lecture } = req.query;
    const data = await Timetable.find({ 
      course: course ? course.toUpperCase() : undefined, 
      day, 
      lecture 
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT API
app.put("/timetable", async (req, res) => {
  try {
    const { course, day, lecture, subject } = req.body;
    const updatedData = await Timetable.findOneAndUpdate(
      { course: course.toUpperCase(), day, lecture },
      { subject },
      { new: true }
    );
    if (updatedData) {
      res.json({ message: "Updated Successfully! ", data: updatedData });
    } else {
      res.status(404).json({ message: "Lecture not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE API
app.delete("/timetable", async (req, res) => {
  try {
    const { course, day, lecture } = req.query;
    const deletedData = await Timetable.findOneAndDelete({ 
      course: course.toUpperCase(), 
      day, 
      lecture 
    });
    if (deletedData) {
      res.json({ message: "Deleted Successfully! " });
    } else {
      res.status(404).json({ message: "Lecture not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port} `);
});