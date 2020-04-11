Server for the [t-v-client project](https://github.com/damiannorman0/t-v-client)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm i`

You will need to create a running mongo instance, on the default port, that will be available at mongodb://localhost:27017
Verify thats its running through using mongod command in one process, the run mongo in a second tab

### `npm run test`

This will create some data and add to the mongo db`
Use the mongo tab to query the db to verify the data is present and correct

### `npm start`

Runs the server on PORT 7000. 
ie http://localhost:7000/api/pets?limit=10 or something like http://localhost:7000/api/pets/5e7e32318e864c3ca8d1039a`
