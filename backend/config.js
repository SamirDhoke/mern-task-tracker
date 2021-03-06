require('dotenv').config();

const APP_NAME = process.env.APP_NAME;
const APP_PASS = process.env.APP_PASS;
const DB_NAME = process.env.DB_NAME;
const URL = `mongodb+srv://${APP_NAME}:${APP_PASS}@cluster0.i6eur.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

console.log('mongo url is', URL);

module.exports = {
	URL
}