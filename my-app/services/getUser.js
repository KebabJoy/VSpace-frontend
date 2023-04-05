import { API_URL } from '../utils/constants';

const path = API_URL + '/clients?auth_token=';

const getUser = async (api, token) => {
  if (!token) {
    return;
  }

  try {
    const response = await fetch(api || path + token);
    return await response.json();
  } catch (e) {
    return null;
  }
};

export default getUser;
