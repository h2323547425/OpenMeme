const express = require('express')
const env = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

// enviourment variables
env.config()

// middlerwares
app.use(cors())
app.use(express.json())

// routes
const userAuthRoutes = require('./routes/user.auth')

app.use('/api', userAuthRoutes)

// mongodb connection
const connectDB = (dburl) => {
    return mongoose.connect(dburl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
    }).then(() => {
        console.log('Database Connected');
    })
}

const start = async () => {
    try {
        await connectDB(process.env.dburl);
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}...`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();