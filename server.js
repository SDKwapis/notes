const express = require("express");
const app = express();
const PORT = 4000;
const cors = require("cors");
const path = require("path");

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cors());

// app.get("/", cors(), async (req, res) => {
//     res.send("Good to go!")
// });

app.use(express.static("public"));

app.get("/", (req, res) => res.send("Navigate to /send"))

app.get("/send", (req, res) =>
  res.sendFile(path.join(__dirname, "./public/index.html"))
);

app.get("/api", (req, res) => {
  res.json({
    term: "api",
    description:
    "An application programming interface, is a computing interface that defines interactions between multiple software intermediaries",
  });
});

app.listen(PORT, () => {
  console.log(`server is active at http://localhost:${PORT}`);
});
