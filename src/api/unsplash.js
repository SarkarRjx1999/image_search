import axios from 'axios'

export default axios.create({
  baseURL : 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID Ag1AgY_Uw4UXzO0CNAOmwtxUokH9RN9rmJcHFnyn-eE'
  }
});
