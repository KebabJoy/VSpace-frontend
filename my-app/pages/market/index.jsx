import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MarketList } from '../../components/MarketPage/MarketList/MarketList';
import { VTBBox } from '../../components/MarketPage/VTBBox/VTBBox';
import { News } from '../../components/WorkflowPage/News/News';
import getMarketList from '../../services/getMarketList';
import { FILTERS } from '../../utils/constants';
// import styles from '../styles/Home.module.css'

const Market = () => {
  const [marketList, setMarketList] = useState(null);
  const [currentFilter, setCurrentFilter] = useState(FILTERS[0]);

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (!token) {
      return;
    }

    getMarketList('', currentFilter.value, token).then((result) => {
      if (!result || !result.success) {
        return;
      }
      console.log('MARKET RESULT !!!!', result);
      setMarketList(result.products);
    });
  }, [currentFilter]);
  return (
    <Container>
      <Head>
        <title>VSpace - Маркет</title>
        <meta name="description" content="Market page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <News title="ЧТО НОВЕНЬКОГО" />

      <VTBBox />

      {marketList ? (
        <MarketList
          data={marketList}
          currentFilter={currentFilter}
          setCurrentFilter={setCurrentFilter}
        />
      ) : (
        <div>Loading...</div>
      )}
    </Container>
  );
};

const Container = styled.div`
  padding-top: 60px;
  background-color ${(props) => props.theme.colors.background};
`;

export default Market;
