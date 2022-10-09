import { API_URL } from '../utils/constants';

const path = API_URL + '/clients/leaderboard';

const getLeaderboard = async () => {
  const response = await fetch(path);

  if (response.status === 200) {
    const result = await response.json();
    return result;
  } else {
    const error = new Error('Not correct!');
    error.status = 403;
    return error;
  }
};

export default getLeaderboard;
