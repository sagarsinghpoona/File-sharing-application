import axios from 'axios';

const API_URl = 'http://localhost:8000/upload'
export const uploadFile = async(data)=>{
    try {
      let response =  await axios.post(API_URl,data);
      return response.data;

    } catch (error) {
        console.error(error);
        
    }
}