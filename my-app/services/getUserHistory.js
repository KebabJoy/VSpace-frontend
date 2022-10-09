import { API_URL } from '../utils/constants';

const getPath = (token, id) => {
  return `${API_URL}/clients/balance_history?auth_token=${token}&client_id=${id}`;
};

const getUserHistory = async (api, token, id) => {
  if (!token) {
    return;
  }

  const response = await fetch(api || getPath(token, id));

  if (response.status === 200) {
    const result = await response.json();
    return result;
  } else {
    const error = new Error('Not correct!');
    error.status = 403;
    return error;
  }
};

export default getUserHistory;
