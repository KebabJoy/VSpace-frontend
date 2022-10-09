import { API_URL } from '../utils/constants';

const path = API_URL + '/clients?auth_token=';
// const path = API_URL + '/clients';

const getUser = async (api, token) => {
  if (!token) {
    return;
  }

  // const response = await fetch(api || path);
  const response = await fetch(api || path + token);

  if (response.status === 200) {
    const result = await response.json();
    return result;
  } else {
    const error = new Error('Not correct!');
    error.status = 403;
    return error;
  }
};

export default getUser;
