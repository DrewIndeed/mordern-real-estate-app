import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'a40a668e8amsh7b7a9299cb89da1p1a0699jsnf93fdd415d8e',
    },
  });

  return data;
};
