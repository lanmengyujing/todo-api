const express = require("express");
const app = express();
app.use(express.json());

let todos = [];

app.get("/todos", (req, res) => res.json(todos));
app.post("/todos", (req, res) => {
  const todo = { id: Date.now(), text: req.body.text };
  todos.push(todo);
  res.status(201).json(todo);
});
app.delete("/todos/:id", (req, res) => {
  todos = todos.filter((t) => t.id != req.params.id);
  res.status(204).end();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
