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
  try {
    const response = await fetch(buildUrl(query, token, forum_id));
    return await response.json();
  } catch (e) {
    return { posts: [] };
  }

};

export default getPosts;
