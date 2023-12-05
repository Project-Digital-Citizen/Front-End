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

const resendOTP = axios.create({
    baseURL: CONFIG.reOTP_ENDPOINT,
    headers: {
        "Content-Type": "application/json",
    }
})

export { regAPI, logAPI, otpAPI, resendOTP }