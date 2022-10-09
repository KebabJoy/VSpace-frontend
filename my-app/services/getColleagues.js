import { API_URL } from '../utils/constants';

const path = API_URL + '/clients/colleagues';
const auth = '&auth_token=';

const getColleagues = async (api, token, id) => {
  if (!id || !token) {
    return;
  }

  const response = await fetch(api ? api : `${path}?client_id=${id}${auth}${token}`);

  if (response.status === 200) {
    const result = await response.json();
    return result;
  } else {
    const error = new Error('Not correct!');
    error.status = 403;
    return error;
  }
};

export default getColleagues;
