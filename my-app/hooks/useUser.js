import useSWR from 'swr';
import loginUser from '../services/loginUser';
import { API_URL, fetcher } from '../utils/constants';

export default function useUser(userData) {
  const { data, mutate, error } = useSWR([API_URL + '/clients', userData], loginUser);

  console.log('useUser', data, error, mutate);

  const loading = !data && !error;
  const loggedOut = error && error.status === 403;

  return {
    loading,
    loggedOut,
    user: data,
    mutate,
  };
}
