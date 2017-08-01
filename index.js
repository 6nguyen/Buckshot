// Step 1: Get access to the Express lib
const express = require('express');
// passport.js must be required in order for the code to run. Since it's not
  // returning anything, we don't assignt it to any const, only require
require('./services/passport');


// Step 2: Create an app within node representing a running Express app
const app = express();

// Require statement returns function module.exports from authRoutes that expects
  // app as arg. We immediately invoke the app.get functions with app, instantiated in this file
require('./routes/authRoutes')(app);


// Step 4: Store heroku's unique PORT environment variable to const PORT
  // of if app not deployed (working locally), set PORT to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT);
