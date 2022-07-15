const express = require('express');
const routes = require('./routes');
const path = require('path')
// import sequelize connection
const connection = require('./config/connection')



const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//using the routes from the routes folder
app.use(routes);

connection.authenticate()
  .then(()=>console.log('database connected'))

  .catch(err=>console.log(err))

// sync sequelize models to the database, then turn on the server

connection.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
