import * as express from 'express'
import { Request, Response } from 'express'
import IControllerBase from 'interfaces/IControllerBase.interface'
import IDoctor from 'interfaces/IControllerDoctor.interface'; // as dataType
import dbConfig from '../helper/db.config'
import { Pool } from 'pg'
import to from '../helper/to'

class HomeController implements IControllerBase {
    public path = '/'
    public router = express.Router()
    constructor() {
        this.initRoutes()
    }    

    public initRoutes() {
        this.router.get('/', this.index)
    }

    index = async (req: Request, res: Response) => {
        const queryString: string = 'SELECT * from doctor';
        const pool = new Pool(dbConfig)
        let conn:any ;
        try {
            let connErr:any;
            [connErr, conn] = await to(pool.connect())
            if (connErr) console.log('=============: ', connErr)
            // throw new Error ("Error Connection Pool")

            let [resultAllDoctorsErr, resultAllDoctors] = await to(
                conn.query(
                    queryString)
                )
            if(resultAllDoctorsErr) throw resultAllDoctorsErr

            //make interface for response dataTypes
            let response = { status: 200, message:'success', queryName:"All Doctors", data: resultAllDoctors}
            res.status(200).json(response)

        } catch (error) {
            console.error('error: ', error)
            res.status(400).json({'message':'error'})
        }


        // const users = [
        //     {
        //         id: 1,
        //         name: 'Ali'
        //     },
        //     {
        //         id: 2,
        //         name: 'Can'
        //     },
        //     {
        //         id: 3,
        //         name: 'Ahmet'
        //     }
        // ]

        // res.render('home/index', { users })
        // res.status(200).json({message:'success', data: 'users'})
    }
}

export default HomeController