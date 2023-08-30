const express = require('express');
const app = express();
const ejs = require('ejs');
var methodOverride = require('method-override');
var expressLayouts = require('express-ejs-layouts');
const port = 3000;

app.set('view engine', 'ejs');

app.use(expressLayouts);

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Page Title',
    description: 'Page Description',
    header: 'Page Header',
    layout: 'layouts/main-layout',
  });
});

app.listen(port, () => {
  console.log('Lesgooo');
});
