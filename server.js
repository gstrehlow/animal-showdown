const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
app.use(function (req, res, next) {
  res.locals.session = req.session;
  next();
});

const helpers = require('./utils/helpers');

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//middlewear
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//basic page (styling)
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => { //SET FORCE TO FALSE AFTER RUNNING IT FIRST TIME
  app.listen(PORT, () => console.log(`Now listening on Port ${PORT}. => http://localhost:${PORT}`));
});