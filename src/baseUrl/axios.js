import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.hintekkllc.com/v1'
});

export const params = `?appId=${import.meta.env.VITE_APPID}&poolId=${import.meta.env.VITE_POOLID}`;

/**{

    appId : import.meta.env.VITE_APPID,
    poodId : import.meta.env.VITE_POOLID
}*/