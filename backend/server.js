const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api is reunning");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  console.log(req.params.id);
  const note = notes.find((n) => n._id === req.params.id);
  console.log(note);
  res.send({
    docs: note,
    status: "success",
  });
});

const PORT = process.env.PORT || 6000;

app.listen(PORT, console.log(`listening on port ${PORT}`));
