import { API_URL } from '../utils/constants';

const path = API_URL + '/managers/exchanges';
const getPath = (token, id, amount) => {
  return `${path}?auth_token=${token}&to_client=${id}&amount=${amount}`;
};

const exchangeUser = async (token, id, amount) => {
  const response = await fetch(getPath(token, id, amount), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.status === 200) {
    const result = await response.json();
    return result;
  } else {
    const error = new Error('Not correct!');
    error.status = 403;
    return error;
  }
};

export default exchangeUser;
