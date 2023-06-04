import {S3} from "@aws-sdk/client-s3";


export const S3AWS = async () => {
    const s3 = new S3({region: 'us-east-1', endpoint: 'https://storage.yandexcloud.net'});
    // console.log(s3.config)
    // // console.log('-------------')
    // // console.log(s3.config.req)
    const obj = await s3.getObject({
        Bucket: 'myspoty',
        Key: 'folder1/TESTDOC.txt'
    })
    console.log(await obj.Body?.transformToString())
}