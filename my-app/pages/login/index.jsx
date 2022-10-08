import Head from 'next/head';
import Image from 'next/image';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import loginUser from '../../services/loginUser';
// import useUser from '../../../hooks/useUser';
// import loginUser from '../../../services/loginUser';
import { API_URL, ROUTES } from '../../utils/constants';
// import useUser from '../../../hooks/useUser';
// import { Content } from '../../components/ProfilePage/Content/Content';
// import useUser from '../../hooks/useUser';
// import styles from '../styles/Home.module.css'
import useSWR from 'swr';

const Login = () => {
  // const { user } = useUser({ redirectTo: '/profile' });
  // const { user, mutate, loggedOut } = useUser(userData);
  // const { data, mutate, error } = useSWR(
  //   [API_URL + '/clients', { user: { email: 'test@mail.ru', password: 'testpass' } }],
  //   loginUser
  // );

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = async () => {
    const data = await loginUser({
      email: login,
      password,
    });

    console.log('HANDLECLICK', data);

    if (data.success) {
      localStorage.setItem('auth_token', data.user.auth_token);
      Router.replace(ROUTES.PROFILE);
    }
  };

  // useEffect(() => {
  //   if (user && !loggedOut) {
  //     Router.replace('/LOGINED');
  //   }
  // }, [user, loggedOut]);

  return (
    <Container>
      <Head>
        <title>VSpace - Профиль</title>
        <meta name="description" content="Profile page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <input type="email" value={login} onChange={handleChangeLogin}></input>
      <input type="password" value={password} onChange={handleChangePassword}></input>
      <button onClick={handleClick}></button>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 60px;
  background-color ${(props) => props.theme.colors.background};
`;

export default Login;
