const mongoose = require('mongoose')

//connects to database 

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.DB_STRING)

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch(err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB