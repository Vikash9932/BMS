const mongoose = require('mongoose');

mongoose
  .connect(process.env.mongo_url)
  .then(() => {
    console.log('Connection Successful');
  })
  .catch((e) => {
    console.log('Connection Failed', e);
  });
