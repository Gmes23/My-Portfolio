//dependecies
var express = require('express');
var Sequelize = require('sequelize');
var express = require('express');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.listen(PORT);

app.get('/', function(req, res) {
  res.render('index'); //remember to change this to routes
})

app.get('/portfolio', function(req, res) {
  res.render('portfolioHandle'); //remember to change this to routes
})

app.get('/about', function(req, res) {
  res.render('aboutHandle'); //remember to change this to routes
})

app.get('/contact', function(req, res) {
  res.render('contactHandle'); //remember to change this to routes
})




console.log("listening on port" + PORT);
