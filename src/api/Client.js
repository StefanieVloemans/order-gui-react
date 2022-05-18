import axios from 'axios';

const client= axios.create(
    {
        // baseURL: 'https://git.heroku.com/eurder-react.git/'
        baseURL : 'http://localhost:8080/'
    }
)

export default client;