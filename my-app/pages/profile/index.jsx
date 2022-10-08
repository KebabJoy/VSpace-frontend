import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
// import styles from '../styles/Home.module.css'

const Profile = () => {
  return (
    <Container>
      <Head>
        <title>VSpace - Профиль</title>
        <meta name="description" content="Profile page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Profile test</h1>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 60px;
  background-color ${(props) => props.theme.colors.background};
`;

export default Profile;
