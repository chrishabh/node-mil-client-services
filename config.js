const dotenv = require('dotenv');
const env = process.env;
dotenv.config();

const dev = { /* don't expose password or any sensitive info, done only for demo */
    host: env.DB_HOST || 'np-db-maria-1.chp9usepkri2.us-east-2.rds.amazonaws.com',
    user: env.DB_USER || 'devwpuser',
    password: env.DB_PASSWORD || '',
    database: env.DB_NAME || 'dev_milclientapp',
    port: env.DB_PORT || 3406
};

const sqlsrv = { /* don't expose password or any sensitive info, done only for demo */
    user: env.MIL_SERVER_USERNAME,
    password: env.MIL_SERVER_PASSWORD,
    server: env.MIL_SERVER_HOST,
    database: env.MIL_SERVER_DB_NAME,
    port: 59763,
    synchronize: true,
    options: {
        trustedconnection: false,
        encrypt: false,
        useUTC: true,
    },

    ssl: {
        rejectUnauthorized: false,
    }
};

module.exports = {
    dev,
   sqlsrv
};