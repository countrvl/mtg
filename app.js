require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const indexRouter = require('./routes/index.router');
const profileRouter = require('./routes/profile.router');
const notFoundMiddleware = require('./middlewares/notfound');

const authCheck = require('./middlewares/authCheck');

const errorMiddleware = require('./middlewares/error');
const cartRouter = require('./routes/cart.router');

const app = express();
const PORT = 3000 || 3001;

app.set('view engine', 'hbs');
hbs.registerPartials(path.join(process.env.PWD, 'views', 'partials'));

app.use(express.static(path.join(process.env.PWD, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sessionConfig = {
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'blabla', // Секретное слово для шифрования, может быть любым
  store: new FileStore(),
  resave: false, // Пересохранять ли куку при каждом запросе
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};

app.use(session(sessionConfig));

app.use((req, res, next) => {
  res.locals.userName = req.session?.userName;
  next();
});

app.use('/', indexRouter);
app.use('/profile', profileRouter);
app.use('/cart', cartRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);
app.use(authCheck);

app.get('/', (req, res) => {
  res.render('/');
});

app.listen(PORT, () => { console.log(`Server running on port ${PORT}`); });
