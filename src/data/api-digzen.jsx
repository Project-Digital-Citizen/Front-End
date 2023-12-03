import axios from 'axios';
import CONFIG from '../globals/config.jsx';
const regAPI = axios.create({
    baseURL: CONFIG.REG_ENDPOINT,
    headers: {
        "Content-Type": "application/json",
      },
})

const logAPI = axios.create({
    baseURL: CONFIG.LOG_ENDPOINT,
    headers: {
        "Content-Type": "application/json",
    }
})

const otpAPI = axios.create({
    baseURL: CONFIG.OTP_ENDPOINT,
    headers: {
        "Content-Type": "application/json",
    }
})

// class AuthDigZen {
//     static async registerUser(param){
//         const response = await fetch(CONFIG.REG_ENDPOINT, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(param),
//         })
        
//         return response;
//     }
//     static async loginUser(param){
//         const response = await fetch(CONFIG.LOG_ENDPOINT, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(param)
//         })

//         return response;
//     }
// }

// export default AuthDigZen;
export { regAPI, logAPI, otpAPI }