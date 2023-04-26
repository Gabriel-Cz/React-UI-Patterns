import axios from "axios";

const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  headers: {'X-Custom-Header': 'foobar'}
});

export default instance;