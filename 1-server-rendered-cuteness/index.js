const express = require("express");
const exphbs = require("express-handlebars");
const axios = require("axios");

const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));
app.engine("handlebars", exphbs.engine({ extname: "hbs", defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", async (req, res) => {
  const apiRes = await axios.get("https://api.thecatapi.com/v1/images/search");
  const data = apiRes.data;
  console.log(data[0].url);
  res.render("index", {
    catPhotoSrc: data[0].url,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
