import { API_URL } from '../utils/constants';

const path = API_URL + '/teams?auth_token=';

const getTeams = async (token) => {
  if (!token) {
    return;
  }

  const response = await fetch(path + token);

  if (response.status === 200) {
    const result = await response.json();
    return result;
  } else {
    const error = new Error('Not correct!');
    error.status = 403;
    return error;
  }
};

export default getTeams;
