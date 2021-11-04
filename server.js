const express = require("express");
const mongoose = require("mongoose");
//Middle wear 
const logger = require("morgan");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.use(require("./routes/apiROutes.js"));
app.use(require("./routes/mainRoutes.js"));

app.listen(PORT, () => {
  console.log(`App listing on port http://localhost${PORT}`);
});