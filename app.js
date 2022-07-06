const express = require('express');
const hbs = require('hbs');
const path = require('path');
const indexRouter = require('./routes/index.router');
const profileRouter = require('./routes/profile.router');
const notFoundMiddleware = require('./middlewares/notfound');
const errorMiddleware = require('./middlewares/error');
const cartRouter = require('./routes/cart.router');

const app = express();
const PORT = 3000;

app.set('view engine', 'hbs');
hbs.registerPartials(path.join(process.env.PWD, 'views', 'partials'));

app.use(express.static(path.join(process.env.PWD, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);
app.use('/profile', profileRouter);
app.use('/cart', cartRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(PORT, () => { console.log(`Server running on port ${PORT}`); });
