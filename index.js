const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

let db = [
  { id: 1, name: "jack" },
  { id: 2, name: "tina" },
  { id: 2, name: "kalle" },
];

app.use(express.static("public"));

// get http://localhost:8080/customers
app.get("/customers", (req, res) => {
  res.send(db);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
