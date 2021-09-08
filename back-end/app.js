const express = require('express');
const app = express();
const cors = require("cors")
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const morgan = require("morgan")
const path = require("path")
const { env } = require('process');
require('dotenv').config({ path: 'back-end/config/config.env' })

const errorMiddleware = require('./middlewares/error')
app.use(morgan("dev"))
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())


//cors
const corsConfig = {
    credentials: true,
    origin: true,
};
app.use(cors(corsConfig));



app.use(express.static(__dirname + '/public'));
// Import all routes
const auth = require('./routes/auth');
const course = require('./routes/course');


app.use('/api/v1', auth)
app.use('/api/v1', course)

if (process.env.NODE_ENV === "production") {
    app.use('/',express.static(path.join(__dirname, '../front-end/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../front-end/build/index.html'))
      
    })

}

// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app



