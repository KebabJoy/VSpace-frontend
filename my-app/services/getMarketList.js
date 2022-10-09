import { API_URL } from '../utils/constants';

const path = API_URL + '/products?category=';
const auth = '&auth_token=';

const getMarketList = async (api, category, token) => {
  if (!category && category !== '') {
    return;
  }

  const response = await fetch(api ? api : path + category + auth + token);

  if (response.status === 200) {
    const result = await response.json();
    return result;
  } else {
    const error = new Error('Not correct!');
    error.status = 403;
    return error;
  }
};

export default getMarketList;
