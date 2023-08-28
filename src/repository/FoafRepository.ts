import axios from '../axios/axios';

const FoafRepository = {

  getProfileInfo: (foafUrl: string) => {
    return axios.get(`/foaf/analyze?foafUrl=${foafUrl}`);
  }

};

export default FoafRepository;
