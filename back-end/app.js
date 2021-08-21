const express = require('express');
const app = express();
const cors=require("cors")
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
var session = require('express-session')
const { env } = require('process');
require('dotenv').config({ path: 'back-end/config/config.env' })

const errorMiddleware = require('./middlewares/error')

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())

//cors

app.use(cors())


app.use(express.static(__dirname + '/public'));
// Import all routes
const auth = require('./routes/auth');
const course = require('./routes/course');

app.use('/api/v1', auth)
app.use('/api/v1', course)

// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app



"course register bitti"  //video yüklemeye bak
