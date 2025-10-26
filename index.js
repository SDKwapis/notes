const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const path = require("path");

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cors());

// app.get("/", cors(), async (req, res) => {
//     res.send("Good to go!")
// });

app.use(express.static("public"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "./views/index.html"))
);

app.listen(port, () => {
  console.log(`server is active at http://localhost:${port}`);
});
