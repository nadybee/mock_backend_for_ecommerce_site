  # Mock Backend for an E-Commerce site using Sequelize
  
   [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC) 

  ## Table of Contents
  - [Project description](#Description)
  - [Useage](#Usage)
  - [Installation](#Installation)
  - [Contributors](#Contributors)
  - [Questions](#Questions)
  - [License](#License)

  ## Description
  The app creates a mock database using node,  express and sequellize. You can use something like insomina to get post, update and delete the data. 

  ## Usage
  This is a command line app.  After installing and running the app, you can get/post/update or delete using insomina or postman. Please use the walk through video to see how to use this application. 
  - walkthrough video part one [here](https://drive.google.com/file/d/1GLx75C_eqALuCW60IXoXc8DEpbpqAAgC/view)
  - walk through part two [here](https://drive.google.com/file/d/1oNQb-AkqVLZGbaz1qn9sCpu0tfO1l7U3/view)
  

  ## Installation
  * Clone or download the repository.
  * Rename the `.env.example` file to `.env` and add your own credientals to the file.
  * open the db file in the terminal and login in to mysql with the `mysql -u root -p`
  * run `source schema.sql`
  * open `server.js` in the terminal and run `npm install`
  * run `npm start` to use the models.
  * open the seeds folder in the terminal and run `node index.js` to seed the database.

  Now the program is ready to use in insomnia! endpoints are:
 - `/api/categories`
  - `/api/products`
 - `/api/tags`

  see routes respective files for what the bodies should look like.    


  ## Contributors
  - Natalie Fairbourne
  - This project with build with starter code, it can be found [here](https://github.com/coding-boot-camp/fantastic-umbrella). 

  ## Tests
  none

  ## Questions
  If you have questions about this project, please contact developer at:
  - natalie@yoodlize.com 
  - [GitHub](https://github.com/nadybee)

  ## License
   [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC) 

