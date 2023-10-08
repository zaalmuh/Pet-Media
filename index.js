const express = require('express');
const app = express();
const ejs = require('ejs');
const methodOverride = require('method-override');
const expressLayouts = require('express-ejs-layouts');
const port = 3000;
require('./utils/db');
const Data = require('./model/data');
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use(expressLayouts);

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Pet Media',
    description: 'Pet Media',
    layout: 'layouts/main-layout',
  });
});

app.get('/explore', async (req, res) => {
  const datas = await Data.find();
  res.render('explore', {
    title: 'Explore',
    description: 'Pet Media',
    layout: 'layouts/main-layout',
    datas,
  });
});

app.get('/yourpet', async (req, res) => {
  const datas = await Data.find();
  res.render('yourpet', {
    title: 'Your Pets',
    description: 'Pet Media',
    layout: 'layouts/main-layout',
    datas,
  });
});

app.get('/yourpet/upload', (req, res) => {
  res.render('upload', {
    layout: 'layouts/main-layout',
    title: 'Add Post',
  });
});

// Tambah Post
app.post('/yourpet', async (req, res) => {
  Data.insertMany(req.body);
  res.redirect('/yourpet');
});

app.get('/yourpet/:id', async (req, res) => {
  const datas = await Data.findById(req.params.id);
  res.render('detail', { layout: 'layouts/main-layout', title: 'Detail Post', datas });
});
app.listen(port, () => {
  console.log('Lesgooo');
});

// alias graph="git log --all --decorate --oneline --graph"
