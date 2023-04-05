import { API_URL } from '../utils/constants';

const loginUser = async (user) => {
  try {
    const response = await fetch(API_URL + '/clients/sign_in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (response.status === 200) {
      const result = await response.json();
      return result;
    } else {
      const error = new Error('Not correct!');
      error.status = 403;
      return error;
    }
  } catch (e) {
    return e;
  }
};

export default loginUser;
