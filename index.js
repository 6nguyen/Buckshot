// Step 1: Get access to the Express lib
const express = require('express');
// Step 11: add passport and google strategy
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// Step 13: pass in password keys from keys.js
const keys = require('./config/keys');

// Step 2: Create an app within node representing a running Express app
const app = express();

// Step 3: Route handler for testing:
  // http GET request, set url path to '/'
  // lambda expr sends JSON request object {hi: 'there'}
  /*
      app.get('/', (req, res) => {
      	res.send({ model: 'Mazda' });
      }); */

// Step 12: Specify how passport should use Google Strategy
  // go to console.developers.google.com, search Google+ API, create new project, open project,...
  // , create credentials, oAuth client ID, configure consent screen, ...
  // , enter same project name, web app, js origin: http://localhost/3000, ...
  // , redirect: http://localhost/3000/*, save client ID and secret in config/keys.js and gitignore
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback'
		},
		(accessToken, refreshToken, profile, done) => {
			console.log('accessToken: ', accessToken);
			console.log('refreshToken: ', refreshToken);
			console.log('profile: ', profile);
		}
	)
);

// Step 14: Route handler
  // when a user attempts to log in via https...auth/google, take them into the oAuth flow
  // Tell passport to authenticate the user using the 'google' strategy.
  // Scope is the permission scope we ask from the user's account
  // User is authenticated and Google sends Server a code in URL
app.get(
	'/auth/google',
	passport.authenticate('google', {
		scope: ['profile', 'email']
	})
);


// Step 15: Route Handler to handle auth/google/callback and code
  // the code in the URL tells passport.authenticate that user isn't logging in for
  // the first time. So they must be trying to turn the code into a user profile.
app.get('/auth/google/callback', passport.authenticate('google'));



// Step 4: Store heroku's unique PORT environment variable to const PORT
  // of if app not deployed (working locally), set PORT to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT);

// Step 5: tell heroku what version of node we're using in server/package.json
/*  "engines": {
		    "node": "8.2.1",
		    "npm": "5.3.0"
      },  */

// Step 6: Instruct Heroku what commands to run to start our server in package.JSON
/*  "scripts": {
        "start": "node index.js"
      },
*/

// Step 7: Create a .gitignore file so we don't commit node_modules or other
  // dependencies to github or heroku
// Step 8: Commit all changes to github
// Step 9: Create new heroku app
  // cmd: heroku login
  // heroku create
  // copy second link (containing git...)
// Step 10: Deploy App with git
  // Add git remote using step 9 link, push to git, open the web page
  // git remote add heroku **linik**
  // git push heroku master
  // heroku open
// Step 11: Set up Passport JS and google oAuth passport strategy
  // Remove route handler above
  // require passport at beginning of index.js
