import {config} from 'dotenv'

config()

export default{
    uri_db: process.env.URI_DB,
}