import axios from "axios";
import  TokenStorage from '../util/token-storage'

export default axios.create({
  baseURL: "http://127.0.0.1:8000/",
  headers: {
    Authorization: `Bearer ${TokenStorage.getToken()}`,
    'Content-Type': 'application/json',
    Accept: 'application/json, text/plain, */*'
  }
});