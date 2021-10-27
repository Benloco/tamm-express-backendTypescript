# tamm-express-backendTypescript

## How to install

## Available Scripts

### `npm run dev`
Runs the app in the development mode.
Open http://localhost:4200 to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm start`
Runs the app in the prodution mode.

### App structure

The server.ts file in the root folder is the entry point of the application. Built with express

Sessions are required for authentication on the routes beginning with pub/proxy  and api/proxy
The sessions expire after 60 mins.
The middelware folder in the root folder contains the auth.ts file where the session authentication occurs.

### Contollers

The controllers folder contain the functions responsible for  post and get  data.
This data is stored  and read in and from the id.json file located in the data folder in the root folder.

The saveData.ts file is contains the function responsible to saving data into the id.json file. Its saves data in the request body into the file

### Routes
 The routes folder contain all routes for post and get.
 
 A post request made to route api/proxy/save/:id will save data in req.body to file with id as the id in the params.
 
 
