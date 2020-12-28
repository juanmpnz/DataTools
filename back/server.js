const express = require("express");
const app = express();
const volleyball = require("volleyball")
const bodyParser = require("body-parser")
const db = require("./db");
const routes = require("./routes");

// Routes
app.use("/api", routes)

//Server & data base setting
db.sync({ force: false })
  .then(() =>
    app.listen(8000, () => {
      console.log("Server listening on port 8000");
    })
  )
  .catch((err) => console.log(err));
