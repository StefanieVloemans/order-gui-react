import axios from 'axios';

const client= axios.create(
    {
        baseURL: 'https://eurder-react.herokuapp.com/'
        // baseURL : 'http://localhost:8080/'
    }
)

export default client;