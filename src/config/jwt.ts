import * as dotenv from 'dotenv';


dotenv.config({ path: __dirname+'/.env' });

export const config = {
    secret: process.env.SECRET_KEY || "KENZINHO_3232323232_323232323",
    expiresIn: "1h",
};