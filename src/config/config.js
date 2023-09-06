//use require in module mode 
import { createRequire } from 'module'
const require = createRequire(import.meta.url);
const env = process.argv[2] || '../.env';

//environment variables
require('dotenv').config({path: env})

const config = {
    port: process.env.PORT,
    host: process.env.HOST,
    DBport: process.env.DBPORT,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD
}

export default config