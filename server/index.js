const express = require('express');
const userRoute = require('./routes/userRoute');

const app = express();

require('dotenv').config();
require('./config/db');

app.use(express.json());
app.use('/api/users', userRoute);

app.get('/', (req, res) => {
  res.send('hello, baby');
});

app.listen(3000, () => {
  console.log('server is listening at port 3000');
});
