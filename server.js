const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//app.use(express.static("public"));

//app.get("/", (req, res) => res.send("Navigate to /send"))

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "./public/index.html"))
);

app.get("/api", (req, res) => {
  res.json({
    term: "api",
    description:
    "An application programming interface, is a computing interface that defines interactions between multiple software intermediaries",
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`server is active at http://0.0.0.0:${PORT}`);
});
