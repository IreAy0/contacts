import axios from 'axios';

export default {
  getData: (path) => axios({
    method: 'GET',
    url: `https://tripadvisor1.p.rapidapi.com/${path}`,
    headers: {
      'content-type': 'application/json',
      'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
      "x-rapidapi-key": "17b855ee98mshc0176862117846ep146a41jsnf890bd4f02d6"
    },
  }),
};
