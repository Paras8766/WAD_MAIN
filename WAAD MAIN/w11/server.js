const express = require("express");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// In-memory storage (resets when server restarts)
const users = [];

// Register
app.post("/register", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).json({ msg: "Required" });

  if (users.find((u) => u.email === email))
    return res.status(409).json({ msg: "Exists" });

  users.push({ email, password });
  res.json({ msg: "Registered" });
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: "Invalid login" });
  }

  res.json({ message: "Login success" });
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/", (req, res) => {
  res.redirect("/login.html");
});

app.listen(PORT, () => {
  const url = `http://localhost:${PORT}`;
  console.log(`Server running: ${url}`);
});
