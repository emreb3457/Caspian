const app = require('./app')
const connectDatabase = require('./config/database')

// Handle Uncaught exceptions
process.on('uncaughtException', err => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down due to uncaught exception');
    process.exit(1)
})

// Setting up config file
if (process.env.NODE_ENV !== 'PRODUCTION') require('dotenv').config({ path: 'back-end/config/config.env' })


// Connecting to database
connectDatabase();

const SERVER_PORT = process.env.port || process.env.PORT || 3001;
const server = app.listen(SERVER_PORT, () => {
    console.log(`Server started on PORT: ${SERVER_PORT} in ${process.env.NODE_ENV} mode.`)
})

// Handle Unhandled Promise rejections
process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down the server due to Unhandled Promise rejection');
    server.close(() => {
        process.exit(1)
    })
})