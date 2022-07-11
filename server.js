const express = require('express');
const routes = require('./routes');
const path = require('path')
// import sequelize connection
const connection = require('./config/connection')

connection.authenticate()
  .then(()=>console.log('database connected'))

  .catch(err=>console.log(err))

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//using the routes from the routes folder
app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
