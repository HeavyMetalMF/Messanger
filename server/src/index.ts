import 'dotenv/config'
import express from 'express';
// @ts-ignore
import {initS3} from "./YC.ts";
// @ts-ignore
import {S3AWS} from "./aws.ts";

// import cors from 'cors';
// import cookieParser from 'cookie-parser';


const PORT = process.env.PORT || 5000;
const app = express()

S3AWS()

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