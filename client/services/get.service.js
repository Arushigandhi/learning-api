import axios from 'axios'
import { BACKEND_URL } from '../constants'

const GetRequest = ()=>{
    return axios.get(`${BACKEND_URL}/welcome`,{
        headers:{
            
        }
    })
}

export default GetRequest