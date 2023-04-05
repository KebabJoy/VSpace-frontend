import { API_URL } from '../utils/constants';

const path = API_URL + '/forums';
const auth = 'auth_token=';

const buildUrl = (query, token) => {
  if (query != null) {
    return path + `?query=${query}&${auth}${token}`;
  }

  return path + '?' + auth + token;
};

const getForums = async (token, query = null) => {
  try {
    const response = await fetch(buildUrl(query, token));
    return await response.json();
  } catch (e) {
    return { forums: [] };
  }

};

export default getForums;
