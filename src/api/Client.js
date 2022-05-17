import axios from 'axios';

const client= axios.create(
    {
        baseURL: 'https://localhost:8080/'
    }
)

export default client;