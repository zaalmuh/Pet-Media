const express = require('express');
const app = express();
const ejs = require('ejs');
const methodOverride = require('method-override');
const expressLayouts = require('express-ejs-layouts');
const port = 3000;
require('./utils/db');
const Data = require('./model/data');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(expressLayouts);

app.get('/', (req, res) => {
  res.render('home', {
    title: 'SUCR',
    description: 'Set Up Computer Reference',
    layout: 'layouts/main-layout',
  });
});

app.get('/explore', async (req, res) => {
  const datas = await Data.find();
  res.render('explore', {
    title: 'Explore',
    description: 'Set Up Computer Reference',
    layout: 'layouts/main-layout',
    datas,
  });
});

app.get('/yoursetup', (req, res) => {
  res.render('yoursetup', {
    title: 'Your Set Up',
    description: 'Set Up Computer Reference',
    layout: 'layouts/main-layout',
  });
});
app.listen(port, () => {
  console.log('Lesgooo');
});
