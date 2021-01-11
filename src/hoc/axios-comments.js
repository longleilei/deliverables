import axios from 'axios'; 

const instance = axios.create({
    baseURL: 'https://deliveries-website-default-rtdb.firebaseio.com/'
}); 

export default instance; 

