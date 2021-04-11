import express from "express";
import "dotenv/config.js";
import "./db/mongoose.js";
import posts from "./routes/posts.js";
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/posts", posts);

app.get("/", (req, res) => {
  res.send("node express mongodb with mongoose");
});

app.listen(port, () => console.log(`Server running in port ${port}`));
