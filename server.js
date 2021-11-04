const express = require("express");
const mongoose = require("mongoose");
//Middle wear 
const logger = require("morgan");1
const PORT = process.env.PORT || 3001;

const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/log-that-workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);


app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/mainRoutes.js"));

app.listen(PORT, () => {
  console.log(`App listing on port http://localhost${PORT}`);
});