const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// User is our Mongoose Model class, that holds model instances
// mongoose.model is called with one arg, we are getting a model/schema
const User =  mongoose.model('users');

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback'
		},
		// User.findOne searches for a User whos googleID matches a profile.id
			// User.findOne returns a JS Promise, which is used in JS to handle async code
			// the model class searchedUser is used to find out if a matching user was found
			// if searchedUser is found, do nothing.  else create a new user
		(accessToken, refreshToken, profile, done) => {
			User.findOne({ googleID: profile.id }).then((searchedUser) => {
				if (searchedUser){
					// the user matches an existing id, do nothing
				} else {
					// usser not found.  create new model instance
					new User({ googleID: profile.id }).save();
				}
			})
		}
	)
);


// *********************************** DOCUMENTATION ********************************
/*
// Step 11: add passport and google strategy
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// Step 13: pass in password keys from keys.js
const keys = require('../config/keys');


// Step 12: Specify how passport should use Google Strategy
  // go to console.developers.google.com, search Google+ API, create new project, open project,...
  // , create credentials, oAuth client ID, configure consent screen, ...
  // , enter same project name, web app, js origin: http://localhost/3000, ...
  // , redirect: http://localhost/3000/*, save client ID and secret in config/keys.js and gitignore



*/
