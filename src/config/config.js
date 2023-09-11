//use require in module mode 
import { createRequire } from 'module'
const require = createRequire(import.meta.url);
const env = process.argv[2] || '../.env'
const publicPath = process.argv[3] || '../public'
console.log(process.argv[3])
//environment variables
require('dotenv').config({path: env})

const config = {
    publicPath: publicPath,
    port: process.env.PORT,
    mongoUri: process.env.MONGOURI
}

export default config