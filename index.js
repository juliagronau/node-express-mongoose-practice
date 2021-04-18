import express from "express";
import "dotenv/config.js";
import "./db/mongoose.js";
import posts from "./routes/posts.js";
import students from "./routes/students.js";
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/posts", posts);
app.use("/students", students);

app.get("/", (req, res) => {
  res.send(
    "node express mongodb with mongoose. Endpoints: /students, /students/.id, /posts, /posts/:id"
  );
});

app.listen(port, () => console.log(`Server running in port ${port}`));
