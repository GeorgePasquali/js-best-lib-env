import express from "express";
import hbs from "hbs";
import open from 'open';

const port = 3000;

const app = express();

app.set("view engine", "html");
app.set("views", "./dist");


app.engine('html', hbs.__express);
app.use(express.static('dist'));

app.get('*', function (req, res) {
  res.render('index', {});
});

app.listen(port, function (err) {
  console.log(`Rollup app started at http://localhost:${port}/`); // eslint-disable-line no-console
  if (err) {
    console.log(err); // eslint-disable-line no-console
  } else {
    open('http://localhost:' + port);
  }
});
