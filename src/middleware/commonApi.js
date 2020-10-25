import config from'../config';
import axios from 'axios';

const {domains} = config.api;
const {checkIn:checkInDomain} = domains;

const commonApi = {
    getCheckinData: () => {
      return axios.get(`${checkInDomain}`);
    },
    saveCheckinData: (data) => {
      return axios.post(`${checkInDomain}`,{...data});
    },
}

export default commonApi;