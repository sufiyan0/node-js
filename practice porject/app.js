const express = require("express");

const app = express();
const home = require("./routes/home");
const squelize = require("./utils/db");
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(home);



squelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
  });
});

// app.listen(3000, () => {
//     console.log('Example app listening on port 3000!');
// });
