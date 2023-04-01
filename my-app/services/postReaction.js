import { API_URL } from '../utils/constants';

const path = API_URL + '/reactions';

const buildUrl = (token) => {
  return path + `?auth_token=${token}`;
};

const postReaction = async (value, token, entity_id, entity_type) => {
  const response = await fetch(buildUrl(token), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ratable: {
        value: value,
        entity_type: entity_type,
        entity_id: entity_id,
      },
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

export default postReaction;
