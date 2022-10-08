import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { Content } from '../../components/ProfilePage/Content/Content';
// import useUser from '../../hooks/useUser_';
// import styles from '../styles/Home.module.css'
import useSWR from 'swr';
import { API_URL, fetcher } from '../../utils/constants';
import { AccordionComponent } from '../../components/ProfilePage/Accordion/Accordion';

const Profile = () => {
  // const { data, error } = useSWR(API_URL + '/clients/sign_in ', fetcher);

  // if (error) return 'An error has occurred.';
  // if (!data) return 'Loading...';

  return (
    <Container>
      <Head>
        <title>VSpace - Профиль</title>
        <meta name="description" content="Profile page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content />

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
`;

export default Profile;
