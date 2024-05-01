import mysql from 'mysql2'
import dbConfig from '@/db/db.config'

const connection = mysql.createConnection(dbConfig)

connection.connect((err: any) => {
    if (err) throw new Error(err)
    console.log('Успешно соединено с базой данных')
})

export default connection
