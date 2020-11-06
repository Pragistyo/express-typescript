const user: string = process.env.USER_LOCAL
const database:string = process.env.DATABASE_LOCAL
const password:string = process.env.PASSWORD_LOCAL
const host:string = process.env.HOST_LOCAL
const max :string = '10'
const port:string = process.env.DB_PORT_LOCAL
 

const config = {
    user: user,
    database: database , 
    password:  password, 
    host:  host, 
    max:  max,
    port: port, 
};

// module.exports = config
export default config
