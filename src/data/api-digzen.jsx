import CONFIG from '../globals/config.jsx';

class AuthDigZen {
    static async registerUser(param){
        const response = await fetch(CONFIG.REG_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(param),
        })
        return response;
    }
}

export default AuthDigZen;