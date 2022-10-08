import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { MarketList } from '../../components/MarketPage/MarketList/MarketList';
import { VTBBox } from '../../components/MarketPage/VTBBox/VTBBox';
import { News } from '../../components/WorkflowPage/News/News';
// import styles from '../styles/Home.module.css'

const Market = () => {
  return (
    <Container>
      <Head>
        <title>VSpace - Маркет</title>
        <meta name="description" content="Market page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <News title="ЧТО НОВЕНЬКОГО" />

      <VTBBox />

      <MarketList data={{}} />
    </Container>
  );
};

const Container = styled.div`
  padding-top: 60px;
  background-color ${(props) => props.theme.colors.background};
`;

export default Market;
