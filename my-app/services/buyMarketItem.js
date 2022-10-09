import { API_URL } from '../utils/constants';

// const path = API_URL + '/purchase';
const path = API_URL + '/products';

const getPath = (id, token, userId) => {
  return `${path}/buy?product_id=${id}&auth_token=${token}`;
};

const buyMarketItem = async (api, id, token, userId) => {
  if ((!token && token !== '') || !id) {
    return;
  }

  const response = await fetch(api ? api : getPath(id, token, userId), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.status === 200 || response.status === 400) {
    const result = await response.json();
    return result;
  } else {
    const error = new Error('Not correct!');
    error.status = 403;
    return error;
  }
};

export default buyMarketItem;
