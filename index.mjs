import express from 'express';
import router from './Routes/index.js';
import mongoose from './db/index.js';
import bcrypt from 'bcrypt';
import chalk from 'chalk';

const db = mongoose.connection;
db.on('error',console.error.bind(console,"connection error:"));
db.once('open',function(){
    console.log(chalk.bgGreen("db connected!"))
})

const app = express()
const PORT = process.env.PORT || 8000

const users = [
    {
        id: 1,
        name: "mustafa",
        email: "mustafaraza@gmail.com"
    },
    {
        id: '2',
        name: "ali",
        email: "ali@gmail.com"
    }
]

app.use(express.json())

app.use('/',(req,res,next)=>{
    console.log("comes ....");
    next()
})
app.use('/api',router)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

