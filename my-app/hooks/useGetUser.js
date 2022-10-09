import useSWR from 'swr';
import getUser from '../services/getUser';

export default function useGetUser(token) {
  const { data, mutate, error } = useSWR(['', token], getUser);

  console.log('useGetUser', data, error);

  const loading = !data && !error;
  const loggedOut = error && error.status === 403;

  return {
    loading,
    loggedOut,
    user: data,
    mutate,
  };
}
