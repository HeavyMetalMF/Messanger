import 'dotenv/config'
import express from 'express';
import {S3AWS} from "./aws";
import userRouter from "./routes/userRouter";

// import cors from 'cors';
// import cookieParser from 'cookie-parser';


const PORT = process.env.PORT || 5000;
const app = express()

S3AWS()

app.use('/api', userRouter)

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Started on ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

// initS3()
// const s3 = initS3()
// // @ts-ignore
// let list = await s3.GetList('/folder1/');
// console.log(list)

start()