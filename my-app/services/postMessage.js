import { API_URL } from '../utils/constants';

const path = API_URL + '/posts';

const buildUrl = (token) => {
  return path + `?auth_token=${token}`;
};

const postMessage = async (token, message, forum_id) => {
  const response = await fetch(buildUrl(token), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: message,
      forum_id: forum_id,
    }),
  });

  if (response.status === 200) {
    return await response.json();
  } else {
    const error = new Error('Not correct!');
    error.status = 403;
    return error;
  }
};

export default postMessage;
