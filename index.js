const express = require('express');
const app = express();
const ejs = require('ejs');
var methodOverride = require('method-override');
var expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');

app.use(expressLayouts);

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Page Title',
    description: 'Page Description',
    header: 'Page Header',
    layout: '/layouts/main-layout',
  });
});

app.listen(3000);

app.get('/', function (req, res) {
  res.send('Hello World');
});
