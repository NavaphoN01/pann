import Knex from 'knex'
import appConfig from "./config";

const knexStringCase = require('knex-stringcase')

const db = Knex(knexStringCase({
    client: "mysql2",
    connection: appConfig.dbconnectinfo,
    useNullAsDefalult: true
}))

export default db