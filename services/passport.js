const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

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

*/
