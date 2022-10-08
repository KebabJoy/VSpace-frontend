import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { Content } from '../../components/ProfilePage/Content/Content';
// import useUser from '../../hooks/useUser_';
// import styles from '../styles/Home.module.css'
import useSWR from 'swr';
import { API_URL, fetcher, ROUTES } from '../../utils/constants';
import { AccordionComponent } from '../../components/ProfilePage/Accordion/Accordion';
import useGetUser from '../../hooks/useGetUser';
import { useEffect, useState } from 'react';
import getUser from '../../services/getUser';
import Router from 'next/router';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('auth_token');

    getUser('', token).then((result) => {
      if (!result || !result.success) {
        Router.push(ROUTES.LOGIN);
        return;
      }

      setUser(result);
    });
  }, []);

  if (!user) {
    return <div>LOADING...</div>;
  }
  console.log(user);
  return (
    <Container>
      <Head>
        <title>VSpace - Профиль</title>
        <meta name="description" content="Profile page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content user={user.user} />

      <AccordionComponent />
      {/* <Friends /> */}

      {/* <Collection /> */}

      {/* <History /> */}
    </Container>
  );
};

const Container = styled.div`
  padding-top: 60px;
  background-color ${(props) => props.theme.colors.background};
  min-height: calc(100vh - 64px);
`;

export default Profile;
