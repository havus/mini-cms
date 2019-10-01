if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.ATLAS_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(require('cors')());
app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

const user = require('./routes/user');
app.use('/user', user);
const post = require('./routes/post');
app.use('/post', post);

const errorHandler = require('./middleware/errorHandler');

app.use(errorHandler);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server >>>>>> ${process.env.PORT || 3000}!`)
});