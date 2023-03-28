import express from 'express';
import mongoose from 'mongoose'
import router from "./routes/index.js";
import * as dotenv from 'dotenv'
dotenv.config()

const DB_URL = 'mongodb+srv://root:gemini2903@cluster0.5cjniay.mongodb.net/?retryWrites=true&w=majority'

const app = express();
app.use(express.json())
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(5000, (err)=>{
            if (err) {
                return console.log(err);
            }
            console.log('OK')
        })
    } catch (e) {
        console.log(e)
    }
}

startApp().then()
