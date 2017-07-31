// Step 1: Get access to the Express lib
const express = require('express');
// Step 2: Create an app within node representing a running Express app
const app = express();

// Step 3: Route handler:
// http GET request, set url path to '/'
// lambda expr sends JSON request object {hi: 'there'}
app.get('/', (req, res) => {
	res.send({ hi: 'there' });
});

// Step 4: Store heroku's unique PORT environment variable to const PORT
// of if app not deployed (working locally), set PORT to 5000
const PORT = process.env.PORT || 5000;
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
