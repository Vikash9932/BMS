const express = require('express');
const cors = require('cors');

const userRoute = require('./routes/userRoute');
const movieRoute = require('./routes/movieRoute');
const app = express();

require('dotenv').config();
require('./config/db');

app.use(cors());
app.use(express.json());
app.use('/api/users', userRoute);
app.use('/api/movies', movieRoute);

app.listen(3000, () => {
  console.log('server is listening at port 3000');
});
