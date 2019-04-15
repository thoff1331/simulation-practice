require("dotenv").config();
const express = require("express");
const massive = require("massive");
const c = require("./controller");

const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING)
  .then(
    dbInstance => console.log("database connected") || app.set("db", dbInstance)
  )
  .catch(err => console.log(err));

app.use(express.json());

app.get("/api/inventory", c.getAll);
app.get("/api/inventory/:id", c.getOne);
app.post("/api/product", c.create);
app.delete("/api/inventory/:id", c.deleteOne);

app.listen(SERVER_PORT, () =>
  console.log(`Server listening on port ${SERVER_PORT}`)
);
