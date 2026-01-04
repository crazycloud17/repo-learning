const express = require("express");
const app = express();

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to my Learning App 🎓");
});

// Example lessons (mock data)
const lessons = [
  { id: 1, title: "Intro to Kubernetes" },
  { id: 2, title: "What is a Pod?" },
  { id: 3, title: "YAML Basics" }
];

// Get all lessons
app.get("/lessons", (req, res) => {
  res.json(lessons);
});

// Add a lesson
app.post("/lessons", (req, res) => {
  const newLesson = {
    id: lessons.length + 1,
    title: req.body.title
  };
  lessons.push(newLesson);
  res.status(201).json(newLesson);
});

app.listen(3000, () => console.log("Learning app running on port 3000"));
