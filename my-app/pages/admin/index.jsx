import Head from 'next/head';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AddUser } from '../../components/AdminPage/AddUser/AddUser';
import { Donate } from '../../components/AdminPage/Donate/Donate';
import { Filters } from '../../components/AdminPage/Filters/Filters';
import { Search } from '../../components/AdminPage/Search/Search';
import { Users } from '../../components/AdminPage/Users/Users';
import { MediaContainer } from '../../components/common/MediaContainer';
import getTeams from '../../services/getTeams';
import getUser from '../../services/getUser';
import { API_URL } from '../../utils/constants';

const Admin = () => {
  const [users, setUsers] = useState(null);
  const [filters, setFilters] = useState(null);

  const [currentFilter, setCurrentFilter] = useState(0);
  const [currentUsers, setCurrentUsers] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('auth_token');

    getUser(API_URL + '/clients/index', token).then((result) => {
      if (!result || !result.success) {
        return;
      }
      console.log('ADMIN ', result);
      setUsers(result.clients);
    });

    getTeams(token).then((result) => {
      if (!result || !result.success) {
        return;
      }

      setFilters(result.teams);
    });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('auth_token');

    getUser(API_URL + '/clients/index?team_id=' + (currentFilter + 1), token).then((result) => {
      if (!result || !result.success) {
        return;
      }

      setUsers(result.clients);
      setCurrentUsers(result.clients);
    });
  }, [currentFilter]);

  if (!filters || !users) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Head>
        <title>VSpace - Админ</title>
        <meta name="description" content="Admin page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MediaContainer>
        <Search users={users} currentUsers={currentUsers} setCurrentUsers={setCurrentUsers} />

        <Filters data={filters} currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} />

        <Users data={currentUsers} />

        <Donate />

        <AddUser />
      </MediaContainer>
    </Container>
  );
};

const Container = styled.div`
  background: #f5f3fa;
  min-height: calc(100vh - 64px);
`;

export default Admin;
