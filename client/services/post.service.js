import axios from 'axios'
import { BACKEND_URL } from '../constants'


export const NeedHeader = ()=>{
    return axios.post(`${BACKEND_URL}/i-need-a-header`,{},{
        headers:{
            token:"ARUSHI_L_ARYAMANN"
        }
    })
}


const PostRequest = (body)=>{
    return axios.post(`${BACKEND_URL}/welcome`,body,{
        headers:{
            
        }
    })
}


export default PostRequest;