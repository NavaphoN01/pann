import Knex from 'knex'
import appConfig from "./config";

const knexStringCase = require('knex-stringcase')

const db = Knex(knexStringCase({
    user: "mysql2",
    connection: appConfig.dbconnectinfo,
    useNullAsDefalult: true
}))
