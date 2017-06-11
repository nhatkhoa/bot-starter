require('ts-node/register')
const startApp = require('./src/app').default
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

startApp()
.then(() => console.log('======= APP STARTED ========'))
.catch((err) => console.error('======= APP ERROR ========', err.stack))
