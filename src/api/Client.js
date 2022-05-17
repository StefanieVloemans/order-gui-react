import axios from 'axios';

const client= axios.create(
    {
        baseURL: 'https://git.heroku.com/eurder-react.git/'
    }
)

export default client;