// @ts-ignore
import EasyYandexS3 from "easy-yandex-s3";

export const initS3 = () => {
    const a = new EasyYandexS3({
        auth: {
            accessKeyId: 'YCAJEoIwyjoaE3Pz3pzhZbImN',
            secretAccessKey: 'YCPM7mZqrsekJj1UtZ_aMLaHS6FvBPuDfpe8O3kr',
        },
        Bucket: 'myspoty', // например, "my-storage",
        debug: true, // Дебаг в консоли, потом можете удалить в релизе
    })
    console.log(a)
    return a
}

