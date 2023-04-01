import { API_URL } from '../utils/constants';

const path = API_URL + '/posts';

const buildUrl = (query, token, forum_id) => {
  let result = path + `?auth_token=${token}&forum_id=${forum_id}`;

  if (query != null) {
    result += `&query=${query}`;
  }

  return result;
};

const getPosts = async (token, forum_id, query = null) => {
  const response = await fetch(buildUrl(query, token, forum_id));

  if (response.status === 200) {
    return await response.json();
  } else {
    const error = new Error('Not correct!');
    error.status = 403;
    return error;
  }
};

export default getPosts;
