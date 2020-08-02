import axios from 'axios';

 const instance = axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      'Bearer kOxI3dmSKhuiNTF2pukusY4Sx39ajs8uUIU8Hd1ne9E6RJq0q1EAnrtpsXHqeowgPFttYnx2nNbF4pxn2RLYzLq9_OEawPUMPfrLKYIUCmwYRcL0FiNOsrJgaGYhX3Yx',
  },
});

export default instance;