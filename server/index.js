const express = require("express");
const fileDb = require("./fileDb");
const messages = require("./app/messages");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

fileDb.init();
const port = 8000;

app.use("/messages", messages);

app.listen(port, () => {
  console.log(`Server started on ${port}  port`);
});
