import dbconnectinfo from './db-con.json'

const isProd = process.env.NODE_ENV == 'production'
let appConfig = {
    isProd,
    isDev: !isProd,
    ClearDataBeforeLoad: isProd ? false:true,
    dbconnectinfo,
    ssoIssuer: 'http://localhost:8888/realms/master'
}

export default appConfig