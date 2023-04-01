import Head from 'next/head';
import styled from 'styled-components';
import { useState } from 'react';
import Content from '../../components/ForumPage/Content';

const Forum = () => {
  return (
    <div>
      <Head>
        <title>VSpace - Форум</title>
        <meta name="description" content="Forum page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Content></Content>
    </div>
  );
};

const StyledInput = styled.input`
  all: unset;
  width: 100%;
  height: 31px;
  border-bottom: 1px solid #b6c1dd;
  border-radius: 8px;

  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #0a2896;
`;

export default Forum;
