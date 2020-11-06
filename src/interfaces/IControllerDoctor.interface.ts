import { Int, roundToInt, toInt, checkIsInt, assertAsInt } from '../helper/Int'

interface IDoctor {
    doctor_id: string,
    firstname: string,
    middlename: string,
    lastname: string,
    mobilenumber: string,
    gender: string, 
    address1: string,
    address2: string,
    state: string,
    city: string,
    zipcode: string,
    birthplace: string,
    birthday: Date,
    nik: string,
    specialization: string,
    certificate: string,
    datecertification: Date,
    countpatientnumber: Int
}

export default IDoctor