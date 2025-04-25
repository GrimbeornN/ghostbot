
const express = require('express');
const app = express();
const path = require('path');

const stats = {
  balance: 10,
  startBalance: 10,
  drawdownMax: 0,
  log: ["Début de session..."]
};
let mode = 'simu';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index', { stats, mode });
});

app.post('/setmode', (req, res) => {
  mode = req.body.mode;
  res.redirect('/');
});

app.get('/reset', (req, res) => {
  stats.balance = 10;
  stats.startBalance = 10;
  stats.log.unshift("Reset effectué.");
  res.redirect('/');
});

app.listen(3000, () => {
  console.log("Serveur lancé sur http://localhost:3000");
});
