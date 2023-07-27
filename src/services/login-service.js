import axios from "axios";
import qs from 'qs';

const LoginService = {
    login(data){
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: qs.stringify(data),
            url: 'http://127.0.0.1:8000/token'
        }
        return axios(options);
    }
};

export default LoginService;