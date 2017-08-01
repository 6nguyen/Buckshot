const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');


mongoose.connect(keys.mongoDbURI);

require('./services/passport');

const app = express();
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT);

//  ****************************** DOCUMENTATION *************************************
/*
// Step 1: Get access to the Express lib
const express = require('express');
// Get access to Mongoose
const mongoose = require('mongoose');
const keys = require('./config/keys');
// MongoDB URI used to connect driver to MongoDB.  Found on mLab buckshot-dev db
  // replace <dbuser>:<dbpassword> with user and pw
mongoose.connect(keys.mongoDbURI);
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
*/
